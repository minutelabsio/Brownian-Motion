define(
    [
        'jquery',
        'moddef',
        'physicsjs',
        'modules/multicanvas-renderer'
    ],
    function(
        $,
        M,
        Physics,
        _mcr
    ) {

        'use strict';

        function logerr( err ){
            window.console.error( err );
        }

        // VERY crude approximation to a gaussian random number.. but fast
        var gauss = function gauss( mean, stddev ){
            var r = 2 * (Math.random() + Math.random() + Math.random()) - 3;
            return r * stddev + mean;
        };

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
                this.velSigma = 0.1;
                this.tinyParticles = [];

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
            },

            initPhysics: function( world ){

                var viewWidth = window.innerWidth
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
                    edgeBounce
                ]);
            
                // subscribe to ticker to advance the simulation
                Physics.util.ticker.on(function (time, dt) {
            
                    world.step(time);
                });
            
                // start the ticker
                Physics.util.ticker.start();

                for ( var i = 0, l = 200; i < l; ++i ){
                    
                    this.addTinyParticle({
                        x: Math.random() * viewWidth,
                        y: Math.random() * viewHeight
                    });
                }

                for ( var i = 0, l = 5; i < l; ++i ){
                    
                    this.addLargeParticle({
                        x: Math.random() * viewWidth,
                        y: Math.random() * viewHeight
                    });
                }

                renderer.addLayer( 'tiny' ).addToStack( world.find({
                    tags: { $in: [ 'tiny' ] }
                }));

                renderer.layers.main.addToStack( world.find({
                    tags: { $in: [ 'large'] }
                }));
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
                    vx: gauss(0, this.velSigma),
                    vy: gauss(0, this.velSigma),
                    radius: 15,
                    restitution: 1,
                    cof: 0
                }, opts);

                p = Physics.body('circle', opts);
                p.tags = [ 'large' ];
                p.view = this.renderer.createView( p.geometry, '#125497');
                this.tinyParticles.push( p );
                this.world.add( p );
            },

            /**
             * DomReady Callback
             * @return {void}
             */
            onDomReady : function(){

                var self = this;

                Physics(self.initPhysics.bind(self));

            }

        }, ['events']);

        return new Mediator();
    }
);




