define(
    [
        'when'
    ],
    function(
        when
    ){
        var bind;
        if (Function.prototype.bind){
            bind = function bind( fn, scope ){
                return fn.bind(scope);
            };
        } else {
            bind = function bind( fn, scope ){

                return function(){
                    return fn.apply(scope, arguments);
                };
            };
        }

        return {

            on: function( topic, fn, scope ){

                var topics = this._topics || (this._topics = {})
                    ,listeners = topics[ topic ] || (topics[ topic ] = [])
                    ,orig = fn
                    ,idx
                    ;

                // check if we're subscribing to multiple topics
                // with an object
                if ( typeof topic === 'object' ){

                    for ( var t in topic ){
                        
                        this.on( t, topic[ t ], fn, scope );
                    }

                    return this;
                }

                if ( typeof scope === 'object' ){
                    
                    fn = bind( fn, scope );
                    fn._bindfn_ = orig;

                }

                listeners.push( fn );
                return this;
            },

            off: function( topic, fn ){

                var topics = this._topics || (this._topics = {})
                    ,listeners = topics[ topic ]
                    ,listn
                    ;

                if (!listeners){
                    return this;
                }

                for ( var i = 0, l = listeners.length; i < l; i++ ){
                    
                    listn = listeners[ i ];

                    if ( listn._bindfn_ === fn || listn === fn ){
                        listeners.splice(i, 1);
                        break;
                    }
                }

                return this;
            },

            emit: function( topic, data ){

                var topics = this._topics || (this._topics = {})
                    ,listeners = topics[ topic ]
                    ,l = listeners && listeners.length
                    ,i = 0
                    ,e = { topic: topic }
                    ;

                if ( !l ){
                    return this;
                }
                
                while ( i < l ){
                    
                    e.handler = listeners[ i ];
                    if ( e.handler ){
                        e.handler( e, data );
                    }
                    i++;
                }

                return this;
            },
            
            after: function( name, fn ){

                var dfds = this._dfds || (this._dfds = {})
                    ,dfd = (dfds[ name ] || (dfds[ name ] = when.defer()))
                    ;

                if ( fn ){
                    return dfd.promise.then( fn );
                }

                return dfd.promise;
            },

            resolve: function( name, arg ){

                var dfds = this._dfds || (this._dfds = {})
                    ,dfd = (dfds[ name ] || (dfds[ name ] = when.defer()))
                    ;
                    
                dfd.resolve( arg );
                return this;
            }
        };
    }
);