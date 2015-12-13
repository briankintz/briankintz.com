module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      sass: {
        files: 'src/scss/*.scss',
        tasks: ['sass', 'postcss']
      },
      js: {
        files: 'src/js/*.js',
        tasks: ['copy:js']
      }
    },
    copy: {
      js: {
        expand: true,
        cwd: 'src',
        src: 'js/*.js',
        dest: 'res'
      },
      vendor: {
        src: 'node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js',
        dest: 'res/js/bootstrap.min.js'
      }
    },
    postcss: {
      options: {
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'}),
          require('cssnano')
        ]
      },
      dist: {
        src: 'res/css/styles.css'
      }
    },
    sass: {
      dev: {
        options: {
          precision: 8
        },
        files: {
          'res/css/styles.css' : 'src/scss/styles.scss'
        }
      }
    },
    browserSync: {
      default_options: {
        bsFiles: {
          src: [
            '*.html',
            'res/css/*.css',
            'res/js/*.js'
          ]
        }
      },
      options: {
        watchTask: true,
        server: {
          baseDir: './'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy')
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['browserSync', 'watch']);
};
