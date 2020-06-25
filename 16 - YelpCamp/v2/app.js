var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/yelp_camp_v2", {useNewUrlParser: true})
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//schema steup
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//     {
//         name: "salmon creed", 
//         image: "https://images.unsplash.com/photo-1439074216907-51e7025705db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80",
//         description: "this is a huge granit hill, no bathroom."
// },function(err, campground){
//     if (err){
//         console.log(err);
//     } else {
//         console.log("newly created campground: ");
//         console.log(campground);
//     }
// });
// var campgrounds = [
//     {name: "salmon creed", image: "https://images.unsplash.com/photo-1439074216907-51e7025705db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"},
//     {name: "granit hill", image: "https://images.unsplash.com/photo-1438201743149-3cc16cd4cddd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"},
//     {name: "normal camp", image: "https://images.unsplash.com/photo-1432057322224-8916b9ed202a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"}
// ]

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
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err) {
            console.log(err);
        } else {
            res.render("show", {campground: foundCampground});
        }
    });
    //render show template 
})

app.listen(3000, function(){
    console.log("yelpCamp has started")
})