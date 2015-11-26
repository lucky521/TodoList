var path = require('path');
var fs = require('fs');

// read json file in config folder
var local_config = 'development';
var json_path = path.join(__dirname, '../config', local_config + '.json');
var config = JSON.parse(fs.readFileSync(json_path)); // local config object
// choose env
var env = process.env['DOCKER_ENV'] || 'development'; // env flog
var docker_env = {};
if (env != 'development') // use docker env config
{	
	for (value in config)
	{
		docker_env[value] = process.env[value];	
	}
	config = docker_env;
}

// export config var 
console.log(config);
config.env = env;
module.exports = config;
