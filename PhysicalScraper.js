var listings = [];
function addListing(title, description, sourceID, imageURL, contentURL, duration) {
	listings.push({
		"title" : title,
		"description" : description,
		"sourceID" : sourceID,
		"imageURL" : imageURL,
		"contentURL" : contentURL,
		"duration" : duration
	})
	console.log(listings[listings.length-1])
}

var sourceID = "physical"; //sourceID
var intervals = [5, 10, 15, 20];
var activities = {
	"running":{
		"caloriePerHour" : 899,
		"title" : "Go Jogging",
		"description" : "Why not enjoy a quick jog outside? You could have burned 225 calories in 15 minutes.",
		"contentURL" : "http://www.active.com/health/articles/6-benefits-of-running",
		"imageURL" : "/public/running.jpg",
	}, 
	"biking": {
		"caloriePerHour" : 572,
		"title" : "Go Biking",
		"description" : "The internet can wait. Go for a bike ride! You could burn 145 calories in 15 minutes.",
		"contentURL" : "http://news.discovery.com/adventure/the-top-7-health-benefits-of-cycling.htm",
		"imageURL" : "http://www.hickorywellcrafted.com/live/wp-content/uploads/2010/12/1047mountain_biking.jpg",
	},
	"swimming": {
		"caloriePerHour" : 899,
		"title" : "Go Swimming",
		"description" : "Instead of stiing on your lazy ass you could have swam for 225 minutes and burned 15 calories!",
		"contentURL" : "http://well.blogs.nytimes.com/2013/12/16/ask-well-benefits-of-swimming/?_php=true&_type=blogs&_r=0",
		"imageURL" : "http://graphics8.nytimes.com/images/2013/12/14/health/14well_swim/14well_swim-tmagArticle.jpg",
	}
}
function renderString(template, data) {
	///console.log(template)
	var new_str = '';

	var placeholders = template.match(/\{\{.*?\}\}/g);
	//console.log(placeholders)
	for (var i=0; i<placeholders.length; i++) {
		var p = placeholders[i];
		var key = p.substring(2, p.length - 2);
		var rep = String(data[key]);
		//console.log(rep);	
		new_str = template.replace(p, data[key]);		
	}
	return new_str;
}
function getDescriptionForInterval(actData, interval) {
	var hours = interval / 60
	var calories = hours * actData["caloriePerHour"];
	var str = renderString(actData["description"], {"calories": calories, "time": hours});
	return str;
}
function createAllActivities() {
	for (var i=0; i<intervals.length; i++) {
		var duration = intervals[i];
		for (var key in activities) {
			var actData = activities[key];
			var desc = actData["description"]
			addListing(actData.title, desc, sourceID, actData.imageURL, actData.contentURL, duration)
		}
	}
	//console.log(listings);
}
createAllActivities();