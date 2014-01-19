var SR = require('./SimpleRequest.js');
var url = "http://www.ted.com/talks/browse.json?orderedby=inspiring&tagid=";

function process(data) 
	{
	 var parsed = JSON.parse(data);
	 return parsed;
	}

SR.request(url, function(data) {
	var parsed = process(data);
	console.log(parsed);
	for(var keys in parsed["main"])
	{
		var article = parsed["main"][keys];
		parseArticleObj(article);
	}
});

function parseArticleObj(article) {
	var title = article.tTitle;
	var description = article.blurb;
	var sourceID = "TED";
	var imageURL = article["image"];
	var contentURL = "www.ted.com" + article["talkLink"];
	var duration = 0;
	if(article.talkDuration){
	var parsedarray = article.talkDuration.split('\:');	
	var duration = Number(parsedarray[0]);
	}
	console.log(title, description, sourceID, imageURL, contentURL, duration)
}



