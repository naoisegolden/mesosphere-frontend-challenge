'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      scripts: {
        files: ['**/*.js', '**/*.scss'],
        tasks: ['sass', 'concat', 'test'],
        options: {
          spawn: false,
          livereload: true,
        },
      },
    },
    sass: {
      dist: {
        files: {
          'assets/stylesheets/application.css': 'assets/stylesheets/application.scss'
        }
      }
    },
    jasmine: {
      test: {
        src: 'assets/javascript/application.js',
        options: {
          specs: 'spec/*-spec.js'
        }
      }
    },
    concat: {
      dist: {
        src: ['assets/javascript/mesosphere.app.js',
              'assets/javascript/mesosphere.server.js',
              'assets/javascript/mesosphere.servercanvas.js',
              'assets/javascript/mesosphere.mesosapp.js'],

        dest: 'assets/javascript/application.js',
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Custom tasks
  grunt.registerTask('default', []);
  grunt.registerTask('test', ['concat', 'jasmine']);
};
