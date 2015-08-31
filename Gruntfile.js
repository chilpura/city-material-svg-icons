module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: ['svg_icons/compressed', 'svg_icons/output'], //removes old data

        svgmin: { //minimize SVG files
            options: {
                plugins: [
                    { removeViewBox: false },
                    { removeUselessStrokeAndFill: false }
                ]
            },
            dist: {
                expand: true,
                cwd: 'svg_icons/raw',
                src: ['*.svg'],
                dest: 'svg_icons/compressed',
                //ext: '.colors-light-danger-success.svg'
            }
        },

        grunticon: { //makes SVG icons into a CSS file
            myIcons: {
                files: [{
                    expand: true,
                    cwd: 'svg_icons/compressed',
                    src: ['*.svg'],
                    dest: 'svg_icons/output'
                }],
                options: {
                    cssprefix: '.logo-',
                    //defaultHeight:'16px',
                    //defaultWidth:'16px',
                    colors: {
                         light: '#ffffff',
                    //     danger: '#ed3921',
                    //     success: '#8DC63F'
                    }
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-grunticon');

    // Task(s).
    grunt.registerTask('icons', ['clean', 'svgmin', 'grunticon']);

};