define(
    [
        'jquery',
        'moddef',
        'physicsjs',
        'dat',
        'modules/multicanvas-renderer'
    ],
    function(
        $,
        M,
        Physics,
        dat,
        _mcr
    ) {

        'use strict';

        var MPColors = [
            'rgb(18, 84, 151)' // blue-dark
            // ,'rgb(0, 37, 143)' // deep-blue-dark
            ,'rgb(167, 42, 34)' // red-dark
            // ,'rgb(151, 52, 29)' // red-orange-dark
            ,'rgb(159, 80, 31)' // orange-dark
            ,'rgb(64, 128, 0)' // green-dark
            ,'rgb(139, 129, 23)' // yellow-dark

            // external
            
            ,'#542437'
            ,'#53777A'
            ,'#ECD078'
            ,'#D95B43'
            ,'#C02942'
        ];

        function logerr( err ){
            window.console.error( err );
        }

        // VERY crude approximation to a gaussian random number.. but fast
        var gauss = function gauss( mean, stddev ){
            var r = 2 * (Math.random() + Math.random() + Math.random()) - 3;
            return r * stddev + mean;
        };

        Physics.behavior('position-tracker', function( parent ){

            return {
                connect: function( world ){

                    world.on('integrate:positions', this.behave, this, -100);
                },
                disconnect: function( world ){
                    world.off('integrate:positions', this.behave);
                },
                behave: function(){
                    var bodies = this.getTargets()
                        ,body
                        ,list
                        ;

                    for ( var i = 0, l = bodies.length; i < l; ++i ){
                        
                        body = bodies[ i ];
                        list = body.positionBuffer || (body.positionBuffer = []);
                        if ( list.length > 100 ){
                            list.splice( 0, list.length - 100, body.state.old.pos.values() );
                        } else {
                            list.push(body.state.old.pos.values());
                        }
                    }
                }
            };
        });

        // faster rendering method
        var fastRender = function( clear ){
            var body
                ,layer = this
                ,bodies = layer.bodies
                ,ctx = layer.ctx
                ,pos
                ,view
                ;

            if ( clear !== false ){
                layer.ctx.clearRect(0, 0, layer.el.width, layer.el.height);
            }

            for ( var i = 0, l = bodies.length; i < l; ++i ){
                
                body = bodies[ i ];
                if ( !body.hidden ){
                    pos = body.state.pos;
                    view = body.view || ( body.view = self.createView(body.geometry, body.styles || styles[ body.geometry.name ]) );
                    ctx.drawImage(view, pos.x-view.width/2, pos.y-view.height/2);
                }
            }
            return layer;
        }

        /**
         * Page-level Mediator
         * @module Boilerplate
         * @implements {Stapes}
         */
        var Mediator = M({

            /**
             * Mediator Constructor
             * @return {void}
             */
            constructor : function(){

                var self = this;

                // standard deviation of velocities
                self.energyScale = 1;
                this.velSigma = 0.1;
                this.tinyDensity = 4e-4;
                this.largeDensity = 9e-6;
                this.maxParticles = 300;
                this.tinyParticles = [];
                this.largeParticles = [];

                self.initEvents();

                $(function(){
                    self.resolve('domready');
                });

                self.after('domready').then(function(){
                    self.onDomReady();
                }).otherwise( logerr );
            },

            /**
             * Initialize events
             * @return {void}
             */
            initEvents : function(){

                var self = this;

                self.on('add:large', function(){
                    if ( self.posTracker ){
                        self.posTracker.applyTo( self.largeParticles );
                    }
                });

                self.on({
                    'settings:tiny-opacity': function( e, val ){
                        self.renderer.layers.tiny.el.style.opacity = '' + (Math.exp(val)-1)/(Math.E-1);
                    },
                    'settings:paths': function( e, val ){
                        var layer = self.renderer.layers.paths;
                        if ( val === false ){
                            layer.ctx.clearRect(0, 0, layer.el.width, layer.el.height);   
                            self.world.remove( self.posTracker );
                        } else {
                            self.world.add( self.posTracker );
                        }

                        layer.enabled = val;
                    },
                    'settings:energy': Physics.util.throttle(function( e, val ){

                        // because... energy ~ v^2
                        val = Math.sqrt( val );

                        var scale = val / self.energyScale
                            ,bodies = self.world._bodies
                            ;
                        self.energyScale = val;

                        self.world.one('step', function(){
                            for ( var i = 0, l = bodies.length; i < l; ++i ){
                                
                                bodies[ i ].state.vel.mult( scale );
                            }
                        });
                    }, 100)
                });
            },

            initPhysics: function( world ){

                var self = this
                    ,viewWidth = window.innerWidth
                    ,viewHeight = window.innerHeight
                    ,renderer = Physics.renderer('multicanvas', {
                        el: 'physics',
                        width: viewWidth,
                        height: viewHeight,
                        // meta: true,
                        // debug:true,
                        styles: {
                            'circle': {
                                strokeStyle: '#1a1a1a',
                                lineWidth: 0,
                                fillStyle: '#1a1a1a',
                                angleIndicator: 'rgba(0,0,0,0)'
                            }
                        }
                    })
                    ,edgeBounce
                    // bounds of the window
                    ,viewportBounds = Physics.aabb(0, 0, viewWidth, viewHeight)
                    ;

                this.world = world;
                this.renderer = renderer;
                
                // add the renderer
                world.add(renderer);

                // render on each step
                world.on('step', function () {
                    world.render();
                });
                
                // constrain objects to these bounds
                edgeBounce = Physics.behavior('edge-collision-detection', {
                    aabb: viewportBounds,
                    restitution: 1,
                    cof: 0
                });
            
                // resize events
                window.addEventListener('resize', function () {
            
                    viewWidth = window.innerWidth;
                    viewHeight = window.innerHeight;
            
                    renderer.resize( viewWidth, viewHeight );
            
                    viewportBounds = Physics.aabb(0, 0, viewWidth, viewHeight);
                    edgeBounce.setAABB(viewportBounds);
            
                }, true);
                
                world.add([
                    Physics.behavior('body-collision-detection'),
                    Physics.behavior('sweep-prune'),
                    Physics.behavior('body-impulse-response'),
                    self.posTracker = Physics.behavior('position-tracker'),
                    edgeBounce
                ]);
            
                // subscribe to ticker to advance the simulation
                Physics.util.ticker.on(function (time, dt) {
            
                    world.step(time);
                    self.emit('step');
                });
            
                // start the ticker
                Physics.util.ticker.start();

                // add controls boundary
                world.add(Physics.body('convex-polygon', {
                    hidden: true,
                    x: viewWidth * 0.5,
                    y: viewHeight * 0.5,
                    vertices: [
                        { x: 0, y: 0 },
                        { x: 0, y: 200 },
                        { x: 400, y: 200 },
                        { x: 400, y: 0 }
                    ],
                    treatment: 'static'
                }));

                for ( var i = 0, l = Math.min(this.maxParticles, parseInt(this.tinyDensity * viewWidth * viewHeight)); i < l; ++i ){
                    
                    this.addTinyParticle({
                        x: Math.random() * viewWidth,
                        y: Math.random() * viewHeight,
                        radius: 5,
                        view: this.tinyParticleView || (this.tinyParticleView = renderer.createView(Physics.geometry('circle',{radius: 5}), 'grey'))
                    });
                }

                for ( var i = 0, l = Math.max(1, parseInt(this.largeDensity * viewWidth * viewHeight)); i < l; ++i ){
                    
                    this.addLargeParticle({
                        x: Math.random() * viewWidth,
                        y: Math.random() * viewHeight,
                        color: MPColors[ i % MPColors.length ]
                    });
                }

                renderer.addLayer( 'tiny' ).addToStack( world.find({
                    tags: { $in: [ 'tiny' ] }
                })).render = fastRender;

                renderer.layers.main.addToStack( world.find({
                    tags: { $in: [ 'large' ] }
                })).render = fastRender;

                var pathLayer = renderer.addLayer( 'paths' );
                var clearNext = false;
                pathLayer.render = function(){

                    var bodies = self.largeParticles
                        ,body
                        ,list
                        ,ctx = pathLayer.ctx
                        ,pt
                        ,styles = {
                            lineWidth: 2
                            ,fillStyle: 'rgba(0,0,0,0)'
                        }
                        ;

                    if ( !pathLayer.enabled ){
                        clearNext = true;
                        return;
                    }

                    ctx.lineCap = 'round';

                    for ( var i = 0, l = bodies.length; i < l; ++i ){
                        
                        body = bodies[ i ];
                        list = body.positionBuffer;
                        styles.strokeStyle = body.color;

                        if ( list ){
                            if ( clearNext ) {
                                list.length = 0;
                            } else {
                                for ( var j = 0, ll = list.length - 1; j < ll; ++j ){
                                    // TODO: optimize this
                                    renderer.drawLine( list[ j ], list[ j + 1 ], styles, ctx );
                                }
                                pt = list.pop();
                                list.length = 0;
                                list.push( pt );
                            }
                        }
                    }

                    clearNext = false;
                };
            },

            addTinyParticle: function( opts ){

                var p;
                opts = Physics.util.extend({
                    x: 50,
                    y: 50,
                    vx: gauss(0, this.velSigma),
                    vy: gauss(0, this.velSigma),
                    radius: 5,
                    restitution: 1,
                    cof: 0,
                    hidden: false
                }, opts);

                p = Physics.body('circle', opts);
                p.tags = [ 'tiny' ];
                this.tinyParticles.push( p );
                this.world.add( p );
            },

            addLargeParticle: function( opts ){

                var p;
                opts = Physics.util.extend({
                    x: 50,
                    y: 50,
                    vx: gauss(0, this.velSigma/10),
                    vy: gauss(0, this.velSigma/10),
                    radius: 25,
                    restitution: 1,
                    cof: 0,
                    mass: 30,
                    color: '#125497'
                }, opts);

                p = Physics.body('circle', opts);
                p.tags = [ 'large' ];
                p.view = this.renderer.createView( p.geometry, opts.color);
                this.largeParticles.push( p );
                this.world.add( p );
                this.emit('add:large', p);
            },

            initControls: function(){

                var self = this
                    ,gui = new dat.GUI()
                    ,settings = {

                    }
                    ;

                function addSetting( id, name, def, min, max ){

                    var ctrl;
                    settings[ name ] = def;
                    ctrl = gui.add( settings, name, min, max );
                    ctrl.onChange(function(){

                        self.emit('settings:' + id, settings[ name ]);
                    });
                    self.emit('settings:' + id, settings[ name ]);
                    return ctrl;
                }

                addSetting('paths', 'Draw Paths', false);
                addSetting('tiny-opacity', 'Particle Fade', 0.01, 0, 1).step(0.1);
                addSetting('energy', 'Energy', 1, 0.1, 10).step(0.1);

            },

            /**
             * DomReady Callback
             * @return {void}
             */
            onDomReady : function(){

                var self = this
                    ;

                Physics({ timestep: 10 }, self.initPhysics.bind(self));
                self.initControls();

            }

        }, ['events']);

        return new Mediator();
    }
);




