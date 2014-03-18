/**
 * Config options at: http://requirejs.org/docs/api.html#config
 */
require.config({

    config: {
        // module specific configuration
    },
    
    shim: {
        // Add shims for things here
    },

    paths: {
        //
        //  This is where you can add paths to any plugins or vendor scripts.
        //

        // Plugins
        'text': 'plugins/text',
        'json': 'plugins/json',
        'tpl' : 'plugins/tpl',
        'async' : 'plugins/async',

        // Templating
        'dot' : 'vendor/doT',

        // MVC
        'stapes': 'vendor/stapes',
        'moddef': 'util/module',
        
        // jQuery
        'jquery': 'vendor/jquery'
    },

    packages: [
        { name: 'when', location: 'vendor/when', main: 'when' }
    ],

    map: {
        
        '*' : {
            'jquery': 'modules/adapters/jquery', // jQuery noconflict adapter
            'site-config': 'config/site-config.json'
        },

        'modules/adapters/jquery': {
            'jquery': 'jquery'
        }
    }
});
