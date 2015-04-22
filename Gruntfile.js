var grunt = require("grunt");
grunt.loadNpmTasks('grunt-release');
grunt.initConfig({
  release: {
    options: {
      bump: true,
      npm: true,
      npmTag: "<%= version %>"
    }
  }
});