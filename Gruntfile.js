module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      sass: {
        files: "src/scss/*.scss",
        tasks: ['sass']
      }  
    },
    sass: {
      dev: {
        files: {
          "res/css/styles.css" : "src/scss/styles.scss"
        }
      }
    },
    browserSync: {
      default_options: {
        bsFiles: {
          src: [
            "res/css/*.css",
            "*.html"
          ]
        }
      },
      options: {
        watchTask: true,
        server: {
          baseDir: "./"
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  
  grunt.registerTask('default', ['browserSync', 'watch']);
};
