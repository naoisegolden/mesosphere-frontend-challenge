'use strict';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      scripts: {
        files: ['**/*.js', '**/*.scss'],
        tasks: ['sass', 'test'],
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
        src: 'assets/javascript/**/*.js',
        options: {
          specs: 'spec/*-spec.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Custom tasks
  grunt.registerTask('default', []);
  grunt.registerTask('test', ['jasmine']);
};
