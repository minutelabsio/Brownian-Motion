define(
    [
        'physicsjs'
    ],
    function(
        Physics
    ){

        Physics.renderer('multicanvas', 'canvas', function( parent ){

            return {

                init: function( options ){

                    parent.init.call( this, options );

                    this.layers = {};
                    this.addLayer( 'main', this.el );
                    this.resize( this.options.width, this.options.height );
                },

                addLayer: function( id, el, opts ){

                    var self = this
                        ,bodies = []
                        ,styles = Physics.util.extend({}, this.options.styles)
                        ,layer = {
                            id: id
                            ,el: el || document.createElement('canvas')
                            ,options: Physics.util.extend({
                                manual: false
                            }, opts)
                        }
                        ;

                    if ( id in this.layers ){
                        throw 'Layer "'+id+'" already added.';
                    }

                    this.el.parentNode.appendChild( layer.el );
                    layer.el.className += ' physics-layer-' + layer.id;
                    layer.ctx = layer.el.getContext('2d');
                    layer.el.width = this.el.width;
                    layer.el.height = this.el.height;

                    layer.reset = function( arr ){

                        bodies = arr || [];
                    };

                    layer.addToStack = function( thing ){

                        if ( Physics.util.isArray( thing ) ){
                            bodies.push.apply(bodies, thing);
                        } else {
                            bodies.push( thing );
                        }
                    };

                    layer.drawBody = function( body ){
                        var ctx = layer.ctx
                            ,pos = body.state.pos
                            ,offset = self.options.offset
                            ,aabb = body.aabb()
                            ;

                        ctx.save();
                        ctx.translate(pos.get(0) + offset.get(0), pos.get(1) + offset.get(1));
                        ctx.rotate(body.state.angular.pos);
                        ctx.drawImage(view, -view.width/2, -view.height/2);
                        ctx.restore();
                    };

                    layer.render = function(){

                        var body;

                        if ( layer.options.manual ){
                            return;
                        }

                        layer.ctx.clearRect(0, 0, layer.el.width, layer.el.height);

                        for ( var i = 0, l = bodies.length; i < l; ++i ){
                            
                            body = bodies[ i ];
                            view = body.view || ( body.view = self.createView(body.geometry, styles[ body.geometry.name ]) );
                            layer.drawBody( body );
                        }
                    };

                    // remember layer
                    this.layers[ id ] = layer;

                    return layer;
                },

                resize: function( width, height ){

                    var layer;

                    for ( var id in this.layers ){
                        
                        layer = this.layers[ id ];
                        layer.el.width = width;
                        layer.el.height = height;
                    }
                },

                /**
                 * Render the world bodies and meta. Called by world.render()
                 * @param  {Array} bodies Array of bodies in the world (reference!)
                 * @param  {Object} meta  meta object
                 * @return {this}
                 */
                render: function( bodies, meta ){

                    var body
                        ,view
                        ,pos
                        ;

                    this._world.emit('beforeRender', {
                        renderer: this,
                        meta: meta
                    });

                    if (this.options.meta){
                        this.drawMeta( meta );
                    }

                    for ( var id in this.layers ){
                        
                        this.layers[ id ].render();
                    }

                    return this;
                },
            };
        });
    }
);