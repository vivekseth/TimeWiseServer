var SR = require('./SimpleRequest.js');
var cheerio = require('cheerio');

var sourceID = "nettuts"; //sourceID
var url = "http://net.tutsplus.com/category/tutorials/?recent=true";
var tutorials = [];

SR.request(url, function(data){
	processList(data);
})

function processList(data) {
	$ = cheerio.load(data);
	var images = $('.post_image a img'); //image url
	var article_urls = $('.post_title a'); //title, article url
	//console.log(article_urls);
	for (var i = 0; i < article_urls.length; i++) {
		var url = article_urls[i];
		var tutorial = {};
		tutorial.title = url.innerText;
		tutorial.url = url.attribs.href;
		tutorial.image_url = images[i].attribs.src;
		//console.log(url);
		SR.request(url.attribs.href, function(data){
			processArticle(data, tutorial); //description, duration
		})
	};
	processTutorials(tutorials);
}

function processArticle(data, tutorial) {
	$ = cheerio.load(data);
	var ul_text = $('.tutorial_details ul').text();
	var idString = "Estimated Completion Time";
	var idStringIndex = ul_text.indexOf(idString)
	
	var temp = ul_text.substring(idStringIndex+idString.length);

	var numString = temp.match(/\d+/)[0];
	var num = Number(numString);
	console.log(num);

	var desc = $('.post_inner_article p')[0].innerText
	tutorial.duration = num;
	tutorial.desc = desc;
}

function processTutorials(tuts) {
	for (var i = 0; i < tuts.length; i++) {
		var t = tuts[i];
		saveContentListing(t.title, t.desc, sourceID, t.image_url, t.url, t.duration);
	};
}