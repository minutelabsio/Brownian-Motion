/**
 * Grunt build file
 * @author Jasper Palfree
 */

'use strict';

module.exports = function(grunt) {

    var path = require('path');
    var pkg, config;

    pkg = grunt.file.readJSON('package.json');

    config = {
        
        sourceDir: 'library',
        compressedDir: 'library-build',
        utils: '', // Any utils can go here 

        pkg : pkg
    };

    // Project configuration.
    grunt.initConfig({
        pkg: config.pkg,
        config: config,

        jshint : {
            options : {
                jshintrc : 'jshint.json'
            },
            source: [
                '<%= config.sourceDir %>/js/{.,modules,mediators}/*.js'
            ]
        },
        bgShell: {
            _defaults: {
                bg: false
            },

            watchCompass: {
                cmd: 'compass watch',
                bg: true
            },

            httpserver: {
                cmd: 'jekyll server --watch',
                bg: false
            },

            cleanCompass: {
                cmd: 'compass clean --config <%= compass.dist.options.config %>',
                options: {
                    stdout: true,
                    stderr: true,
                    failOnError: true
                }
            },
        },
        clean: [
            '<%= config.compressedDir %>'
        ],
        compass: {
            dist: {
                options: {
                    config: 'config.rb',
                    force: true
                }
            }
        },
        img: {
            app: {
                src: '<%= config.compressedDir %>'
            }
        },
        // r.js optimization task
        requirejs: {
            app: {
                options: require('./build/require-build')
            }
        }
    });

    // Load plugins
    grunt.loadNpmTasks('grunt-bg-shell');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-img');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-compass');
    
    // Tasks
    grunt.registerTask('compress-only', ['compass', 'requirejs:app']);
    grunt.registerTask('server', ['bgShell:httpserver']);

    // Primary tasks
    grunt.registerTask('cleanup', ['clean', 'bgShell:cleanCompass']);
    grunt.registerTask('dev', [ 'bgShell:watchCompass', 'bgShell:httpserver' ]);
    grunt.registerTask('build', ['cleanup', 'jshint:source', 'compress-only', 'img:app']);
    
    // Default task(s).
    grunt.registerTask('default', ['build']);

};
