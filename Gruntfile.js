module.exports = function(grunt) {
    
    grunt.initConfig({
        pkg: {
            appName: 'menu-and-profile',
            src: 'public/pens/<%= pkg.appName %>/',
            output: '<%= pkg.src %>'
        },
        less: {
            options: {
                compress: true
            },
            all: {
                files: {
                    '<%= pkg.output %>css/style.css': '<%= pkg.src %>less/style.less'
                }
            }
        },
        watch: {
            files: ['<%= pkg.src %>less/**/*.less'],
            tasks: ['less']
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', [
        'watch'
    ]);
    
};
