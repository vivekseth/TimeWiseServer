var http = require('http');

function request(url, callback) {
	var req = http.request(url, function(res){
		var data = '';
		res.on('data', function(chunk){
			data += chunk;
		})
		res.on('end', function(){
			callback(data);
		})
		res.on('error', function(err){
			console.log(err);
		})
	});
	req.end();
}

module.exports.request = request