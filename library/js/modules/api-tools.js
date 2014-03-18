define(
    [
        'jquery',
        'json!site-config'
    ],
    function(
        $,
        config
    ){
        'use strict';

        config = config.api;

        var routeReg = /\(?:([\w]+)\)?/g
            ,uriTplReg = /\{([+]?)([\w]+)\}/g
            ,trailingSlashReg = /\/$/
            ;

        /**
         * Prepare a config object for use with $.ajax to send to specified api endpoint
         *
         * @function pathParams
         * @param  {String} method (Optional) The http verb for this request (IE: get, post, put, etc... default: get)
         * @param  {String} rule   The api service identifier. IE: "<apiCfgNamespace>.<serviceName>"
         * @param  {Object} data   Data to use to build the query
         * @param  {Object} req    Default values to pass on to the returned object (properties "type", "url", and "data" will be overridden)
         * @return {Object}        Object fit for use directly inside $.ajax()
         */
        function prepare( method, rule, data, req ){

            var scope
                ,service
                ,path
                ;

            if ( !rule || typeof rule !== 'string' ){
                // no method specified, so assume GET
                req = data;
                data = rule;
                rule = method;
                method = 'GET';
            }

            req = req || {};

            // parse rules
            rule = rule.split('.');

            if ( rule.length < 2 ){
                throw 'Malformed api rule parameter "'+ rule.join('.') + '". Must be of form "<scope>.<service>"';
            }

            scope = config[ rule[0] ];
            // find rule in api config
            service = scope.services[ rule[1] ];

            // change to object config
            if ( typeof service === 'string' ){
                service = { path: service, params: {} };
            }

            // prepare call
            req.type = method;
            req.dataType = req.dataType || scope.dataType || 'json';

            // prepare url
            path = uriTemplate(service.path, data).replace(trailingSlashReg, '');
            req.url = (scope.base || '') + path;

            // prepare data
            req.data = $.extend( {}, service.params, data );

            while (path = (uriTplReg.exec(service.path) && RegExp.$2)){

                // console.log(path)

                // if it's a path parameter, but not an expected data parameter, 
                // don't pass it in with request data
                // or remove it if it's null
                if ( (service.params && service.params[ path ] === undefined) || req.data[ path ] === null ){

                    delete req.data[ path ];
                }
            }

            return req;
        }

        /**
         * Prepare a templated path string
         *
         * @function pathParams
         * @param {string} str The templated string. eg: 'google.com/:foo/:bar/(:optional)'
         * @param {Mixed} param1,param2,... If named parameters are used in the templated string, specify an object hash. Otherwise, use numbered names (eg: ":0") and specify an array of values, or multiple arguments.
         * @return {string} The prepared url with escaped parameters
         */
        function pathParams( str, params ){

            var type = typeof params
                ,isObj
                ;

            if ( type === 'string' || arguments.length > 2 ){
                params = Array.prototype.slice.call(arguments);
                params.shift();
            }

            isObj = (type === 'object');

            return str.replace(routeReg, function( match, name, pos, str ){

                var optional = match.charAt(0) === '('
                    ,val = isObj ? params[ name ] : params[ ~~name ]
                    ;

                if ( val === undefined && !optional ){
                    throw 'Non-optional path parameter ' + match + ' not specified.';
                }

                return (val || val === 0) ? encodeURIComponent(val) : '';
            });
        }

        /**
         * Render a uriTemplate
         * @param  {String} str    Template string
         * @param  {Object} params Data to use for rendering
         * @return {String}        The rendered template
         */
        function uriTemplate( str, params ){

            var type = typeof params
                ;

            if ( type === 'string' || arguments.length > 2 ){
                params = Array.prototype.slice.call(arguments);
                params.shift();
            }

            return str.replace(uriTplReg, function( match, mod, name, pos, str ){

                var val = params[ name ]
                    ;

                switch (mod){

                    // allow some unencoded characters
                    case '+':
                        val = val.replace(/\s/g, '%20');
                    break;

                    default:
                        val = encodeURIComponent(val);
                }

                return (val || val === 0) ? val : '';
            });
        }

        /**
         * Convert a type to a string for hashing purposes
         *
         * @function toStr
         * @param  {mixed} obj Mixed type to be converted into a string
         * @return {String}     The hashed version of argument
         */
        function toStr( obj ){
            if (typeof obj === 'object' || $.isArray(obj)){
                return JSON.stringify( obj );
            }

            return obj.toString();
        }

        var dfdCache = {};
        /**
         * Create a deferred promise that will optionally cache itself by specified cacheKey
         * If this function is called with the same cacheKey before the deferred has completed
         * the same deferred promise will be returned.
         *
         * @function publicDfd
         * @param  {Function} factory  The callback function to run on 
         * @param  {Mixed} cacheKey Object or string to use for cacheing
         * @return {$.Deferred.promise}
         */
        function publicDfd( factory, cacheKey ){

            var dfd
                ,key = cacheKey && toStr( cacheKey )
                ;

            // return promise if in cache
            if ( key && (dfd = dfdCache[ key ]) ){

                return dfd;
            }

            dfd = $.Deferred( factory );
            dfd.always(function(){

                // remove from cache when finished
                delete dfdCache[ key ];

            });

            return ( dfdCache[ key ] = dfd.promise() );
        }

        /**
         * Take a jQuery ajax error callback and format information into an error object
         *
         * @function formatError
         * @param  {object} xhr    The jquery JqXhr
         * @param  {string} status Text description of error
         * @param  {string} err    Text http status
         * @return {object} The formatted error object
         */
        function formatError( xhr, status, err ){

            var error;

            if (status !== 'parsererror'){
                try {

                    error = $.parseJSON(xhr.responseText).meta.error;

                } catch (e){
                    
                    error = {};
                }
            } else {

                error = {
                    code: 0,
                    message: 'Parse error'
                };
            }

            return {
                code: error.code || xhr.status,
                message: error.message,
                type: error.type,
                httpStatus: err,
                httpCode: xhr.status
            };
        }

        return {

            prepare: prepare,
            pathParams: pathParams,
            uriTemplate: uriTemplate,
            publicDfd: publicDfd,
            formatError: formatError
        };
    }
);