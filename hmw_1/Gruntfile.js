module.exports = function(grunt) {

  grunt.initConfig({
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'scss',
          src: ['main.scss'],
          dest: 'css',
          ext: '.css'
        }]
      }
},
concat: {
    options: {
      separator: '',
    },
    dist: {
      src: ['scss/style.scss', 'scss/reset.scss'],
      dest: 'scss/main.scss',
    },
  },
  watch: {
    files: ['scss/reset.scss', 'scss/style.scss'],
    tasks: ['concat','sass','cssmin']
  },
  cssmin: {
    target: {
      files: [{
        expand: true,
        cwd: 'css',
        src: ['main.css'],
        dest: 'css',
        ext: '.min.css'
    }]
  }
},
uglify: {
   my_target: {
     files: {
       'js/main.min.js': ['js/main.js']
     }
   }
 }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['watch']);

};
