var grunt = require("grunt");
var exec = require('child_process').exec;
grunt.registerTask('nvm', 'Run nvm from grunt', function() {
	var cb = this.async();
	var argsString = Array.prototype.join.call(arguments, " ");
	grunt.log.writeln('Running nvm '+argsString);
  var cp = exec('sh nvm.sh '+argsString,function(err,res){
		cb();
	});
	cp.stdout.pipe(process.stdout);
	cp.stderr.pipe(process.stderr);
});