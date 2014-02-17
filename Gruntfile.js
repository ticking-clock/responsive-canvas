module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                stripBanners: true,
                banner: '/*! <%= pkg.name %> v<%= pkg.version %> */\n'
            },
            test: {
                src: ['<%= pkg.name %>.js', 'plugins/**/*.js'],
                dest: 'tests/<%= pkg.name %>.tests.js'
            },
            core: {
                src: ['<%= pkg.name %>.js'],
                dest: 'dist/<%= pkg.name %>.js'
            },
            all: {
                src: ['<%= pkg.name %>.js', 'plugins/**/*.js'],
                dest: 'dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> v<%= pkg.version %> */\n'
            },
            core: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= pkg.name %>.js']
                }
            },
            all: {
                files: {
                    'dist/<%= pkg.name %>.min.js': ['<%= pkg.name %>.js', 'plugins/**/*.js']
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
            files: ['<%= pkg.name %>.js', 'plugins/**/*.js'],
            tasks: ['concat:all', 'uglify:all']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['concat:all', 'uglify:all']);
    grunt.registerTask('all', ['concat:all', 'uglify:all']);
    grunt.registerTask('core', ['concat:core', 'uglify:core']);
    grunt.registerTask('test', ['concat:test', 'qunit']);
};
