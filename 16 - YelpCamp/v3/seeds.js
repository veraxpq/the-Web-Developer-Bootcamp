var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "cloud's rest", 
        image: "https://images.unsplash.com/photo-1584345015538-213f90f9ccbc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
        description: "abs;lkdjgl;aksd"
    },
    {
        name: "desert mesa", 
        image: "https://images.unsplash.com/photo-1470246973918-29a93221c455?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
        description: "abs;lkdjgl;aksd"
    },
    {
        name: "cannon flore", 
        image: "https://images.unsplash.com/photo-1524007769096-2dad448565c9?ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80",
        description: "abs;lkdjgl;aksd"
    }
]
function seedDB(){
    //remove all campgrounds
    Campground.deleteMany({}, function(err){
        if (err) {
            console.log(err);
        }
        console.log("removed campgrounds");
        data.forEach(function(seed){
            Campground.create(seed, function(err, campground){
                if(err){
                    console.log(err);
                } else {
                    console.log("added a new campground");
                    //create a comment
                    Comment.create({
                        text: "this place is great, but i wish there was internet",
                        author: "homer"
                    }, function(err, comment){
                        if(err){
                            console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                            console.log("new comments added");
                        } 
                    });
                }
            });
        });
    })
    //add a few campgrounds
}
module.exports = seedDB;