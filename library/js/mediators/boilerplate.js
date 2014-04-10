define(
    [
        'jquery',
        'hammer.jquery',
        'moddef',
        'physicsjs',
        'dat',
        'modules/multicanvas-renderer'
    ],
    function(
        $,
        _hjq,
        M,
        Physics,
        dat,
        _mcr
    ) {

        'use strict';

        function drawPoints(ctx, points) {
            var i, b, c, d;
            // if (points.length < 6) return;
            // if (points.length < 6) {
            //     b = points[0];
            //     ctx.beginPath();
            //     ctx.arc(b.x, b.y, ctx.lineWidth / 2, 0, Math.PI * 2, !0);
            //     ctx.closePath();
            //     ctx.fill();
            //     return
            // }
            ctx.beginPath();
            ctx.moveTo(points[0].x, points[0].y);
            for (i = 1; i < points.length - 2; i++) {
                c = (points[i].x + points[i + 1].x) / 2
                d = (points[i].y + points[i + 1].y) / 2;
                ctx.quadraticCurveTo(points[i].x, points[i].y, c, d)
            }
            ctx.quadraticCurveTo(points[i].x, points[i].y, points[i + 1].x, points[i + 1].y);
            ctx.stroke();
        }

        $.fn.slider = function( opts ){
            var options = $.extend({
                min: 0
                ,max: 1
                ,value: 0.5
            }, opts);

            return $(this).each(function(){
                var $this = $(this).addClass('slider')
                    ,factor = options.max - options.min
                    ,val = (options.value - options.min) / factor
                    ,$handle = $('<div>').appendTo($this).addClass('handle')
                    ,$meter = $('<div>').appendTo($this).addClass('meter')
                    ;

                function set( x ){
                    var width = $this.width();
                    x = Math.max(0, Math.min(width, x));
                    val = x / width;

                    $handle.css('left', x);
                    $meter.css('width', (val * 100) + '%');

                    $this.trigger('change', val * factor + options.min);
                }

                $this.css({
                    position: this.style.position || 'relative'
                });

                $meter.css({
                    display: 'block'
                    ,position: 'absolute'
                    ,top: '0'
                    ,left: '0'
                    ,bottom: '0'
                });

                $handle.css({
                    position: 'absolute'
                    ,top: '50%'
                    ,marginLeft: -$handle.outerWidth() * 0.5
                    ,marginTop: -$handle.outerHeight() * 0.5
                });

                $this.hammer().on('touch drag', Physics.util.throttle(function( e ){
                    var offset = $this.offset()
                        ,x = e.gesture.center.pageX - offset.left
                        ,y = e.gesture.center.pageY - offset.top
                        ;

                    set( x );

                    e.preventDefault();

                }, 20));

                $this.on('mousedown', function(){
                    return false;
                });

                set( val * $this.width() );
            });
        };

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
                ,r
                ;

            if ( layer.el.style.opacity === '0' ){
                return layer;
            }

            if ( clear !== false ){
                layer.ctx.clearRect(0, 0, layer.el.width, layer.el.height);
            }

            for ( var i = 0, l = bodies.length; i < l; ++i ){
                
                body = bodies[ i ];
                if ( !body.hidden ){
                    pos = body.state.pos;
                    view = layer.circleView || body.view;
                    r = view.width * 0.5;
                    ctx.drawImage(view, pos.x - r, pos.y - r);
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
                this.tinyDensity = 3e-3;
                this.largeDensity = 2e-4;
                this.largeSize = window.Modernizr.touch ? 50 : 35;
                this.ratio = 0.15;
                this.massRatio = 0.06;
                this.maxParticles = window.Modernizr.touch ? 100 : 500;

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
                        self.renderer.layer('tiny').el.style.opacity = '' + (Math.exp(val)-1)/(Math.E-1);
                    },
                    'settings:paths': function( e, val ){
                        var layer = self.renderer.layer('paths');
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
                    }, 100),
                    'settings:ratio': function( e, val ){
                        var r = val * self.largeSize;
                        self.renderer.layer('tiny').circleView = (this.tinyParticleView = self.renderer.createView(Physics.geometry('circle',{radius: r}), 'grey'));
                        var body;
                        for ( var i = 0, l = self.tinyParticles.length; i < l; ++i ){
                            body = self.tinyParticles[ i ];
                            body.geometry.radius = r;
                            body.recalc();
                        }
                    },

                    'settings:mass-ratio': function( e, val ){
                        var body;
                        for ( var i = 0, l = self.largeParticles.length; i < l; ++i ){
                            body = self.largeParticles[ i ];
                            body.mass = 1 / val;
                        }
                    }
                });

                self.on('settings:tiny-opacity', function( e, val ){
                    if ( val > 0.2 ){
                        setTimeout(function(){
                            $('#video-msg').show();
                        }, 2000);
                        self.off(e.topic, e.handler);
                    }
                });

                $(function(){
                    var controls = $('#controls').hammer();

                    controls.on('touch', '#ctrl-draw-paths', function(){
                        var $this = $(this)
                            ,on = !$this.hasClass('on')
                            ;

                        $this.toggleClass('on', on);
                        self.emit('settings:paths', on);
                    });
                    controls.on('touch', '#ctrl-download', function(){
                        var img = self.getImage();
                        this.href = img;
                        this.download = 'minutelabs-brownian-motion.png';
                    });

                    var center, drag = false;
                    controls.on('touch', '#ctrl-move', function( e ){
                        e.preventDefault();
                        drag = true;
                        center = $('#controls').position();
                    });
                    controls.on('touchmove', function(e){
                        e.preventDefault();
                    });
                    controls.on('drag', function( e ){
                        if ( drag ){
                            self.emit('move-controls', {
                                x: center.left + e.gesture.deltaX,
                                y: center.top + e.gesture.deltaY
                            });
                        }
                    });
                    controls.on('dragend', function( e ){
                        drag = false;
                    });

                    $('#viewport').hammer().on('touch', '.ctrl-close', function(){
                        $(this).parent().hide();
                    });
                });

                window.addEventListener('resize', Physics.util.throttle(function(){
                    self.emit('resize', {
                        width: window.innerWidth,
                        height: window.innerHeight
                    });
                }, 50), false);

                var timesteps;
                var first;
                var avg = 0;
                var avgIdx = 0;
                self.on('speed-monitor', function(e, dt){
                    avgIdx += avgIdx > 10 ? -5 : 1;
                    avg = avg * (avgIdx-1) + (dt);
                    avg /= avgIdx;

                    if ( avgIdx >= 10 || dt > 1000/7 ){
                        if ( avg > 1000/30 ){
                            self.emit('sluggish', {
                                avg: avg,
                                time: Date.now()
                            });
                            avgIdx = 0;
                            avg = 0;
                        }
                    }
                });

                var lastSluggish = 0;
                var msg = false;
                self.on('sluggish', function( e, data ){
                    // console.log('sluggish', data.avg, data.time);
                    if ( (data.time - lastSluggish) < 3000 || data.avg > 100 ){
                        var toRm = self.world.find({
                            tags: { $in: ['tiny'] }
                        });

                        // console.log('removing some bodies. Total:', toRm.length);

                        if ( toRm.length > 0.4 * self.tinyDensity * window.innerWidth * window.innerHeight / (self.ratio * self.largeSize) ){

                            toRm = toRm.slice( -30 );

                            self.world.remove( toRm ); // try removing 10 bodies
                            self.renderer.layer('tiny').removeFromStack( toRm );
                            lastSluggish = 0;
                        } else {
                            if ( !msg ){
                                $('body').addClass('slow');
                                msg = true;
                                setTimeout(function(){
                                    $('body').removeClass('slow');
                                }, 8000)
                            }
                        }
                    } else {
                        lastSluggish = data.time;
                    }
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
                        meta: true,
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
                self.on('resize', function ( e, dim ) {
            
                    viewWidth = dim.width;
                    viewHeight = dim.height;
            
                    renderer.resize( viewWidth, viewHeight );
            
                    viewportBounds = Physics.aabb(0, 0, viewWidth, viewHeight);
                    edgeBounce.setAABB(viewportBounds);
            
                });
                
                world.add([
                    Physics.behavior('body-collision-detection'),
                    Physics.behavior('sweep-prune'),
                    Physics.behavior('body-impulse-response'),
                    self.posTracker = Physics.behavior('position-tracker'),
                    edgeBounce
                ]);
            
                // subscribe to ticker to advance the simulation
                Physics.util.ticker.on(function (time) {
                    var dt = Date.now();
                    world.step(time);
                    dt = Date.now() - dt;
                    self.emit('speed-monitor', dt);
                });
            
                // start the ticker
                Physics.util.ticker.start();

                // add controls boundary
                var ctrls = Physics.body('convex-polygon', {
                    hidden: true,
                    x: viewWidth * 0.5,
                    y: viewHeight * 0.5,
                    vertices: [
                        { x: 0, y: 0 },
                        { x: 0, y: 280 },
                        { x: 400, y: 280 },
                        { x: 400, y: 0 }
                    ],
                    treatment: 'static'
                });

                world.add( ctrls );

                var $ctrls = $('#controls');
                self.on('move-controls', function( e, pos ){
                    $ctrls.css('left', pos.x).css('top', pos.y);
                    ctrls.state.pos.clone( pos );
                });

                self.on('resize', function( e, dim ){
                    var pos = $ctrls.position();
                    ctrls.state.pos.set( pos.left, pos.top );
                });

                for ( var i = 0, l = Math.min(this.maxParticles, parseInt(this.tinyDensity * viewWidth * viewHeight / (this.ratio * this.largeSize))); i < l; ++i ){
                    
                    this.addTinyParticle({
                        x: Math.random() * viewWidth,
                        y: Math.random() * viewHeight,
                        radius: 5
                    });
                }

                for ( var i = 0, l = Math.max(3, parseInt(this.largeDensity * viewWidth * viewHeight / this.largeSize)); i < l; ++i ){
                    
                    this.addLargeParticle({
                        x: Math.random() * viewWidth,
                        y: Math.random() * viewHeight,
                        color: MPColors[ i % MPColors.length ]
                    });
                }

                renderer.addLayer( 'tiny' ).addToStack( world.find({
                    tags: { $in: [ 'tiny' ] }
                })).render = fastRender;

                renderer.layer('tiny').circleView = (this.tinyParticleView = self.renderer.createView(Physics.geometry('circle',{radius: self.ratio * self.largeSize }), 'grey'));

                renderer.layer( 'main' ).addToStack( world.find({
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
                    ctx.shadowBlur = 2;
                    
                    for ( var i = 0, l = bodies.length; i < l; ++i ){
                        
                        body = bodies[ i ];
                        list = body.positionBuffer;
                        ctx.strokeStyle = ctx.shadowColor = body.color;

                        if ( list ){
                            if ( clearNext ) {
                                list.length = 0;
                            } else {

                                for ( var j = 0, ll = list.length - 1; j < ll; j++ ){
                                    renderer.drawLine( list[ j ], list[ j + 1 ], styles, ctx );
                                }
                                // drawPoints( ctx, list );
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
                    radius: this.largeSize,
                    restitution: 1,
                    cof: 0,
                    mass: 1 / this.massRatio,
                    color: '#125497'
                }, opts);

                p = Physics.body('circle', opts);
                p.tags = [ 'large' ];
                p.view = this.renderer.createView( p.geometry, opts.color );
                this.largeParticles.push( p );
                this.world.add( p );
                this.emit('add:large', p);
            },

            initControls: function(){

                var self = this
                    ;

                $('#ctrl-opacity').on('change', function( e, val ){
                    self.emit('settings:tiny-opacity', val);
                }).slider({
                    value: 0
                });

                $('#ctrl-energy').on('change', function( e, val ){
                    self.emit('settings:energy', val);
                }).slider({
                    value: 1,
                    min: 0.1,
                    max: 10
                });

                $('#ctrl-ratio').on('change', function( e, val ){
                    self.emit('settings:ratio', val);
                }).slider({
                    value: this.ratio,
                    min: 0.1,
                    max: 0.6
                });

                $('#ctrl-mass-ratio').on('change', function( e, val ){
                    self.emit('settings:mass-ratio', val);
                }).slider({
                    value: this.massRatio,
                    min: 0.001,
                    max: 1
                });
            },

            getImage: function(){
                var layers = ['tiny', 'paths', 'main']
                    ,el
                    ,ctx = this.renderer.hiddenCtx
                    ,canvas = this.renderer.hiddenCanvas
                    ,opacity
                    ,w = this.renderer.el.width
                    ,h = this.renderer.el.height
                    ;
                canvas.width = w;
                canvas.height = h;
                for ( var i = 0, l = layers.length; i < l; ++i ){
                    
                    el = this.renderer.layer( layers[i] ).el;
                    opacity = parseFloat(el.style.opacity, 10);
                    ctx.globalAlpha = isNaN(opacity) ? 1 : opacity;
                    ctx.drawImage(el, 0, 0);
                }
                ctx.globalAlpha = 1;
                return canvas.toDataURL('image/png')
            },

            /**
             * DomReady Callback
             * @return {void}
             */
            onDomReady : function(){

                var self = this
                    ;

                if ( window.innerWidth > 500 ){
                    Physics({ timestep: window.Modernizr.touch ? 10 : 8 }, self.initPhysics.bind(self));
                    self.initControls();
                    self.emit('settings:paths', $('#ctrl-draw-paths').hasClass('on'));
                }
            }

        }, ['events']);

        return new Mediator();
    }
);




