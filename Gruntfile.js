module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      all: {
        options: {
          sourceMap: false,
          includePaths: [ 'node_modules/bootstrap-sass/assets/stylesheets' ]
        },

        src: 'src/scss/styles.scss',
        dest: 'src/css/styles.css'
      }
    },

    postcss: {
      autoprefix: {
        options: {
          processors: [ require('autoprefixer')({ browsers: 'last 2 versions' }) ]
        },
        src: 'src/css/styles.css'
      },

      minify: {
        options: {
          processors: [ require('cssnano') ]
        },
        src: 'src/css/styles.css',
        dest: 'res/css/styles.min.css'
      }
    },

    uglify: {
      all: {
        files: {
          'res/js/main.min.js': [
            'node_modules/bootstrap-sass/assets/javascripts/bootstrap/affix.js',
            'src/js/main.js'
          ]
        }
      }
    },

    watch: {
      sass: {
        files: 'src/scss/*.scss',
        tasks: ['sass', 'postcss']
      },
      js: {
        files: 'src/js/*.js',
        tasks: ['uglify']
      }
    },

    browserSync: {
      options: {
        watchTask: true,
        server: {
          baseDir: './'
        }
      },
      src: [
        '*.html',
        'res/css/*.css',
        'res/js/*.js'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-postcss');

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['browserSync', 'watch']);
  grunt.registerTask('build', ['sass', 'postcss', 'uglify'])
};
