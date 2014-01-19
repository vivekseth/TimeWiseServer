
var mongodb = require('mongodb');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/TimeWise');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {});
var listingSchema = mongoose.Schema({
	"title" : String,
	"description" : String,
	"sourceID" : String,
	"imageURL" : String,
	"contentURL" : String,
	"duration" : Number
});
var Listing = mongoose.model('Listing', listingSchema);

function saveContentListing(title, description, sourceID, imageURL, contentURL, duration) {
	var data = {
		"title" : title,
		"description" : description,
		"sourceID" : sourceID,
		"imageURL" : imageURL,
		"contentURL" : contentURL,
		"duration" : duration,
	};
	var listing = new Listing(data);
	listing.save(function(err){
		if (err) {
			console.log(err);
			return;
		}
		mongoose.connection.close()
	});
};

saveContentListing("1232", "1232", "1232", "1232", "1232", 3);

Listing.find(function (err, kittens) {
  if (err) {}// TODO handle err
  console.log(kittens)
})

//mongoose.connection.close()