module.exports = function(grunt) {
  'use strict';

  var gruntConfig = {
    pkg: grunt.file.readJSON('package.json'),

    cssmin: {
      combine: {
        files: {
          'css-print.min.css': ['css/reset.css', 'css/base.css', 'css/grid.css', 'css/fonts.css']
        }
      },

      minify : {
        files : [{
          expand : true,
          cwd : '/',
          src : ['css-print.min.css'],
          dest : 'src',
          ext : '.min.css'
        }]
      }
    }
  };

  grunt.initConfig(gruntConfig);

  // load plugins
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  // tasks
  grunt.registerTask('default', ['cssmin']);
};