define(
    [
        'util/events'
    ],
    function(
        events
    ){
        var hasOwn = ({}).hasOwnProperty;

        // mixins registry
        var _mixins = {
            events: events
        };

        var isFunction = function isFunction( fn ){
            return typeof fn === 'function';
        };

        var isArray = Array.isArray;

        // Copyright 2013 jQuery Foundation and other contributors
        var isPlainObject = function( obj ){
            // Not plain objects:
            // - Any object or value whose internal [[Class]] property is not "[object Object]"
            // - DOM nodes
            // - window
            if ( ( typeof obj ) !== "object" || obj.nodeType || ( obj === window ) ) {
                return false;
            }

            // Support: Firefox <20
            // The try/catch suppresses exceptions thrown when attempting to access
            // the "constructor" property of certain host objects, ie. |window.location|
            // https://bugzilla.mozilla.org/show_bug.cgi?id=814622
            try {
                if ( obj.constructor &&
                       !hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
                    return false;
                }
            } catch ( e ) {
                return false;
            }

            // If the function hasn't returned already, we're confident that
            // |obj| is a plain object, created by {} or constructed with new Object
            return true;
        };

        // extend helper from jquery
        // Copyright 2013 jQuery Foundation and other contributors
        var extend = function extend() {
            var options, name, src, copy, copyIsArray, clone,
                target = arguments[0] || {},
                i = 1,
                length = arguments.length,
                deep = false;

            // Handle a deep copy situation
            if ( typeof target === "boolean" ) {
                deep = target;

                // skip the boolean and the target
                target = arguments[ i ] || {};
                i++;
            }

            // Handle case when target is a string or something (possible in deep copy)
            if ( typeof target !== "object" && !isFunction(target) ) {
                target = {};
            }

            // do nothing
            if ( i === length ) {
                return target;
            }

            for ( ; i < length; i++ ) {
                // Only deal with non-null/undefined values
                if ( (options = arguments[ i ]) != null ) {
                    // Extend the base object
                    for ( name in options ) {
                        src = target[ name ];
                        copy = options[ name ];

                        // Prevent never-ending loop
                        if ( target === copy ) {
                            continue;
                        }

                        // Recurse if we're merging plain objects or arrays
                        if ( deep && copy && ( isPlainObject(copy) || (copyIsArray = isArray(copy)) ) ) {
                            if ( copyIsArray ) {
                                copyIsArray = false;
                                clone = src && isArray(src) ? src : [];

                            } else {
                                clone = src && isPlainObject(src) ? src : {};
                            }

                            // Never move original objects, clone them
                            target[ name ] = extend( deep, clone, copy );

                        // Don't bring in undefined values
                        } else if ( copy !== undefined ) {
                            target[ name ] = copy;
                        }
                    }
                }
            }

            // Return the modified object
            return target;
        };

        // main util
        var Module = function Module( spec, mixins ){

            var Cls = function Cls( cfg ){
                if (!(this instanceof Cls)){
                    return new Cls( cfg );
                }

                if (this.constructor){
                    this.constructor( cfg );
                }
            };

            Cls.prototype = spec;

            if (mixins){
                var mix;
                while ( mix = mixins.pop() ){
                    Cls.prototype = extend( Cls.prototype, _mixins[ mix ] );
                }
            }

            return Cls;
        };

        return Module;
    }
);