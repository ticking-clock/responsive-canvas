module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> v<%= pkg.version %> */\n'
            },
            core: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['src/<%= pkg.name %>.js']
                }
            },
            kinetic: {
                files: {
                    'dist/<%= pkg.name %>.kinetic.min.js': ['src/<%= pkg.name %>.js', 'src/plugins/**/KineticJS*.js']
                }
            },
            test: {
                files: {
                    'tests/<%= pkg.name %>.tests.min.js': ['src/<%= pkg.name %>.js', 'src/plugins/**/*.js']
                }
            }
        },
        qunit: {
            xsmall_320_480: {
                options: {
                    urls: [ 'tests/tests.html?width=320&height=480' ],
                    page: {
                        viewportSize: { width: 320, height: 480 }
                    }
                }
            },
            xsmall_320_568: {
                options: {
                    urls: [ 'tests/tests.html?width=320&height=568' ],
                    page: {
                        viewportSize: { width: 320, height: 568 }
                    }
                }
            },
            xsmall_320_640: {
                options: {
                    urls: [ 'tests/tests.html?width=320&height=640' ],
                    page: {
                        viewportSize: { width: 320, height: 640 }
                    }
                }
            },
            small_600_963: {
                options: {
                    urls: [ 'tests/tests.html?width=600&height=963' ],
                    page: {
                        viewportSize: { width: 600, height: 963 }
                    }
                }
            },
            medium_768_1024: {
                options: {
                    urls: [ 'tests/tests.html?width=768&height=1024' ],
                    page: {
                        viewportSize: { width: 768, height: 1024 }
                    }
                }
            },
            large_1200_1920: {
                options: {
                    urls: [ 'tests/tests.html?width=1200&height=1920' ],
                    page: {
                        viewportSize: { width: 1200, height: 1920 }
                    }
                }
            },
            large_1280_1024: {
                options: {
                    urls: [ 'tests/tests.html?width=1280&height=1024' ],
                    page: {
                        viewportSize: { width: 1280, height: 1024 }
                    }
                }
            },
            large_1600_1200: {
                options: {
                    urls: [ 'tests/tests.html?width=1600&height=1200' ],
                    page: {
                        viewportSize: { width: 1600, height: 1200 }
                    }
                }
            },
            xlarge_1920_1080: {
                options: {
                    urls: [ 'tests/tests.html?width=1920&height=1080' ],
                    page: {
                        viewportSize: { width: 1920, height: 1080 }
                    }
                }
            }
        },
        watch: {
            files: ['responsive-canvas.js', 'plugins/**/*.js'],
            tasks: ['uglify']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['uglify:core', 'uglify:kinetic']);
    grunt.registerTask('test', ['uglify:test', 'qunit']);
};
