var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
    {name: "salmon creed", image: "https://images.unsplash.com/photo-1439074216907-51e7025705db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"},
    {name: "granit hill", image: "https://images.unsplash.com/photo-1438201743149-3cc16cd4cddd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"},
    {name: "normal camp", image: "https://images.unsplash.com/photo-1432057322224-8916b9ed202a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80"}
]

app.get("/", function(req, res){
    res.render("landing");
})

app.get("/campgrounds", function(req, res){
    
    res.render("campgrounds", {campgrounds: campgrounds});
})

app.post("/campgrounds", function(req, res){
    //get data from form and add to campgrounds array
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name:name, image:image};
    campgrounds.push(newCampground);
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
})
app.get("/campgrounds/new", function(req, res){
    res.render("new");
})

app.listen(3000, function(){
    console.log("yelpCamp has started")
})