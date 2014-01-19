var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('hello world');
})
app.get('/activities/read', function(req, res){

	var arr = [
	{ title: 'Go Jogging',
	  description: 'Why not enjoy a quick jog outside? You could have burned {{calories}} calories in 0.3333333333333333 minutes.',
	  sourceID: 'physical',
	  imageURL: '/public/running.jpg',
	  contentURL: 'http://www.active.com/health/articles/6-benefits-of-running',
	  duration: 20 },
	{ title: 'Go Biking',
	  description: 'The internet can wait. Go for a bike ride! You could burn {{calories}} calories in 0.3333333333333333 minutes.',
	  sourceID: 'physical',
	  imageURL: 'http://www.hickorywellcrafted.com/live/wp-content/uploads/2010/12/1047mountain_biking.jpg',
	  contentURL: 'http://news.discovery.com/adventure/the-top-7-health-benefits-of-cycling.htm',
	  duration: 20 },
	{ title: 'Go Swimming',
	  description: 'Instead of stiing on your lazy ass you could have swam for {{time}} minutes and burned 299.66666666666663 calories!',
	  sourceID: 'physical',
	  imageURL: 'http://graphics8.nytimes.com/images/2013/12/14/health/14well_swim/14well_swim-tmagArticle.jpg',
	  contentURL: 'http://well.blogs.nytimes.com/2013/12/16/ask-well-benefits-of-swimming/?_php=true&_type=blogs&_r=0',
	  duration: 20 }
	]

	var responseString = "var json = ";
	responseString += JSON.stringify(arr);
	responseString += ";jsonHandler(json)";
	res.send(responseString);	
})

app.listen(5000)