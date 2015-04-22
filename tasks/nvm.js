var grunt = require("grunt");
var exec = require('child_process').exec;
grunt.registerTask('nvm', 'Run nvm from grunt', function() {
	var cb = this.async();
	var argsString = Array.prototype.join.call(arguments, " ");
	grunt.verbose.writeln('Running nvm '+argsString);
  var cp = exec('sh ./node_modules/grunt-nvm/tasks/nvm.sh '+argsString,function(err,res){
    if(err){
      grunt.warn(err);
    }
		cb();
	});
	cp.stdout.pipe(process.stdout);
	cp.stderr.pipe(process.stderr);
});