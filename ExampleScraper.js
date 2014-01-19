var SR = require('./SimpleRequest.js');
var url = "http://www.ted.com/talks/browse.json?orderedby=newest&tagid=20";
SR.request(url, function(data){
	console.log(data);
})