module.exports = function(grunt) {

    grunt.config.init({
        pkg: grunt.file.readJSON('package.json'),
        copyFiles: {
            options: {
                workingDirectory: 'release_build',
                manifest: ['index.html', 'stylesheets/', 'javascripts/']
            }
        }
    });

    // DELETE THE FILES
    grunt.registerTask('clean',
        'Deletes the working folder and its contents',
        function() {
            grunt.config.requires('copyFiles.options.workingDirectory');
            grunt.file.delete(grunt.config.get('copyFiles.options.workingDirectory'));
        }
    );

    
    grunt.registerTask('createFolder', 'Create the working folder', function() {
        grunt.config.requires('copyFiles.options.workingDirectory');
        grunt.file.mkdir(grunt.config.get('copyFiles.options.workingDirectory'));
    });

   

    grunt.registerTask('copyFiles','copying files', function() {
        var files, workingDirectory;
        grunt.config.requires('copyFiles.options.manifest');
        grunt.config.requires('copyFiles.options.workingDirectory');
        files = grunt.config.get('copyFiles.options.manifest');
        workingDirectory =
            grunt.config.get('copyFiles.options.workingDirectory');

        var recursiveCopy = function(source, destination) {
            if (grunt.file.isDir(source)) {
                grunt.file.recurse(source, function(file) {
                    recursiveCopy(file, destination);
                });
            } else {
                grunt.log.writeln('Copying ' + source + ' to ' + destination);
                grunt.file.copy(source, destination + '/' + source);
            }
        }

        files.forEach(function(item) {
            recursiveCopy(item, workingDirectory);
        });

    });

     grunt.registerTask('version','writing version files', function() {
        grunt.config.requires('copyFiles.options.workingDirectory');
        workingDirectory = grunt.config.get('copyFiles.options.workingDirectory');

        var content = '<%=pkg.name %> version <%= pkg.version %>';
        content = grunt.template.process(content);
        grunt.file.write(workingDirectory + '/version.txt', content);
     });

    grunt.registerTask('deploy', 'Deploys files', ['clean', 'createFolder', 'copyFiles','version']);

}