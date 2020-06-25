var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    Campground = require("./models/campground")
    seedDB = require("./seeds")

mongoose.connect("mongodb://localhost:27017/yelp_camp_v3", {useNewUrlParser: true})
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
seedDB(); 

app.get("/", function(req, res){
    res.render("landing");
})
//index - show all campgrounds
app.get("/campgrounds", function(req, res){
    //get all campgrounds from db
    Campground.find({}, function(err, allCampgrounds){
        if (err) {
            console.log(err);
        } else {
            res.render("index", {campgrounds : allCampgrounds});
        }
    });
    // res.render("campgrounds", {campgrounds: campgrounds});
});
// create - add new campground to db
app.post("/campgrounds", function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name:name, image:image, description: desc};
    //create a new campground and save to db
    Campground.create(newCampground, function(err, newlyCreated){
        if (err) {
            console.log(err);
        } else {
            res.redirect("/campgrounds");            
        }
    });
    //redirect back to campgrounds page
});
//new - show form to create new campground
app.get("/campgrounds/new", function(req, res){
    res.render("new");
})

app.get("/campgrounds/:id", function(req, res){
    //find the campground with provided id
    Campground.findById(req.params.id).populate("comments").exec(function(err, foundCampground){
        if(err) {
            console.log(err);
        } else {
            console.log(foundCampground);
            res.render("show", {campground: foundCampground});
        }
    });
    //render show template 
})

app.listen(3000, function(){
    console.log("yelpCamp has started")
})