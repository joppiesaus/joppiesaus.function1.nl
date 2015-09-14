// This is pretty cool!
module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    uglify: {
        build: {
            files: [ {
                expand: true,
                cwd: "js/",
                src: ["**/*.js"],
                dest: "build/js/",
                ext: ".js",
                extDot: "first"
            }, {
                "build/js/build.js": ["js/core.js", "js/logo.js", "js/tiles.js"]
            } ]
        }
    },
    
    /*imagemin: {
        build: {
            options: {
                optimizationLevel: 5
            }
        },
        files: [{
            expand: true,
            cwd: "img",
            src: ["img/*.{png,jpg,gif}"],
            dest: "build/img/"
        }]
    },*/
    
    cssmin: {
        build: {
            files: {
                "build/css/style.css": ["css/*.css"]
            }
        }
    },
    
    processhtml: {
        build: {
            files: {
                "build/index.html": ["new.html"]
            }
        }
    },
    
    htmlmin: {
        build: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            files: {
                "build/index.html": ["build/index.html"]
            }
        }
    },
    
    usebanner: {
        build: {
            options: {
                banner: "<!-- Hey! This code is not for humans! View it here instead: http://github.com/joppiesaus/joppiesaus.function1.nl -->"
            },
            files: {
                src: ["build/index.html"]
            }
        }
    }
    
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-banner');
  
  // Default tasks
  grunt.registerTask('default', [/*'imagemin',*/ 'uglify', 'cssmin', 'processhtml', 'htmlmin', 'usebanner']);

};