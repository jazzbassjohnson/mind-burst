(function() {
    'use strict';

    module.exports = function(grunt) {

        require('load-grunt-tasks')(grunt);


        grunt.initConfig({
            karma: {
                unit: {
                    configFile: 'karma.conf.js'
                }
            },
            concat: {
                options: {
                  separator: ';',
                },
                dist: {
                  src: ['app/app.js', 'app/user/user.js', 'app/user/**.js'],
                  dest: 'test/concatApp.js',
                }
            },

        });


//        grunt.loadNpmTasks('grunt-karma');
//        grunt.loadNpmTasks('grunt-contrib-concat');


        grunt.registerTask('test', ['concat', 'karma']);
        grunt.registerTask('default', ['concat']);
    };

})();