/**
 * Templating plugin that uses mustache.
 *
 * will return an api that provides raw text and render method.
 *
 * usage:
 *      require(['plugins/tpl!templates/path/to/template.tpl'], function(tpl){
 *          tpl.render({
 *              some: 'data'
 *          });
 *      });
 */
define(
    [
        'text',
        'dot'
    ],
    function( text, dot ){
        
        var cache = {}
            ,varname = 'it'
            ,settings = {}
            ,overrides = {
                // override dot settings
                varname: varname
            }
            ;

        for ( var name in dot.templateSettings ){

            settings[ name ] = overrides[ name ] || dot.templateSettings[ name ];
        }
        
        // cache and call callback
        function finishLoad( name, content, onLoad, config ) {
                
            cache[ name ] = content;
            
            onLoad( content );
        }
        
        
        function load( id, req, callback, config ){
            
            // do we have this cached?
            if ( id in cache ){
                
                callback( cache[id] );
                
            } else {
                // no cache. get file using text plugin
                
                text.get( req.toUrl( id ),
                    
                    function( text ){
                        
                        var content = {
                                render: dot.template( text, settings )
                            }
                            ;
                    
                        finishLoad( id, content, callback, config );
                    }
                );
            }
        }
        
        
        // for build process. write an optimized version of template... not sure if it works yet.
        function write(pluginName, moduleName, write, config) {

            if ( moduleName in cache ) {
                
                var text = cache[ moduleName ].render.toString()
                    ;
                
                write.asModule( pluginName + '!' + moduleName, 'define({ render: '+text+' });\n' );
            }
        }
    
        return {
            
            load: load
            
            // remove template compiling capability
            // write: write
        };
    }
);