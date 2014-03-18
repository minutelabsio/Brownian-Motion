/* 
 * build profile
 * All config options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
 * node r.js -o ./require.build.js 
 */
module.exports = ({
    // Target directory to build into. Create a temporary directory.
    // all source will be copied here first
    dir: '<%= config.compressedDir %>',
    // Relative path to the source directory.
    // The "dir" directory will mirror this directory
    appDir: '<%= config.sourceDir %>',
    // The baseUrl of our javascript
    // all require calls are relative to this path
    baseUrl: 'js/',

    // use optimize: none to get concatenation without optimization for debugging
    // optimize: 'none',
    optimize: 'uglify',
    optimizeCss: 'none',

    // exclude any hidden files (.filename) and any node.js libraries
    fileExclusionRegExp: /^\.|node_modules/,

    // don't include resources loaded by plugins into the 
    // javascript. Let modules load them asynchronously from CMS
    optimizeAllPluginResources: false,

    // If set to true, any files that were combined into a build layer will be
    // removed from the output folder.
    removeCombined: true,

    // uncomment to include conditionally loaded modules
    // findNestedDependencies: true,
    
    // Include configurations from our require-config file
    // so r.js knows where to look for resources
    mainConfigFile: '<%= config.sourceDir %>/js/config/require-config.js',

    // Define our build layers...
    modules: [
        // require-config will become a globally
        // included layer containing dependencies
        // that are needed on every page
        // this will include things like 
        // jquery, stapes, globals mediator, etc...
        {
            name: 'config/require-config',

            include: [
                
            ]
        },
        // page level dependencies.
        {
            name: 'page-boilerplate',
            // this usually is used for creating
            // modules that don't exist in the optimized
            // source yet. Instead, we're using it to
            // "reset" the order of inclusion.
            // eg: we need the home mediator
            // to be defined in the build layer
            // _before_ page-home.js
            create: true,

            // things to include in build layer.
            // Dependencies of these modules are
            // included also.
            // 
            // Including page-home so it gets defined
            // at the bottom. Used in conjunction with
            // create: true as described above.
            include: [
                'mediators/boilerplate',
                'page-boilerplate'
            ],

            // Exclude anything already included
            // in the require-config build layer
            exclude: [
                'config/require-config'
            ]
        }
    ]
});