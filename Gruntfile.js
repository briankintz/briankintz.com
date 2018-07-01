module.exports = function(grunt) {
  grunt.initConfig({
    clean: {
      dist: [ 'dist' ]
    },

    sass: {
      options: {
        implementation: require('node-sass'),
        sourceMap: true,
        includePaths: [ 'node_modules' ]
      },

      dist: {
        files: {
          'src/css/styles.css': 'src/scss/styles.scss'
        }
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
            'src/js/main.js'
          ]
        }
      }
    },

    copy: {
      dist: {
        files: [
          { src: 'index.html', dest: 'dist/' },
          { src: 'res/**', dest: 'dist/' }
        ]
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
        'res/**'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-postcss');

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ['browserSync', 'watch']);
  grunt.registerTask('build', [ 'clean', 'sass', 'postcss', 'uglify', 'copy'])
};
