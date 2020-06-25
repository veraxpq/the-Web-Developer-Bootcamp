var express = require("express");
var app = express();

// "/" => "hi there"

app.get("/", function(req, res){
    res.send("hi there!");
}) 
//"/bye" => "goodbye"
app.get("/bye", function(req, res){
    res.send("goodbye!")
})
//"/dog" =? "meow!"
app.get("/dog", function(req, res){
    console.log("someone made a request ")
    res.send("meow!")
})
app.get("/r/:subredditName", function(req, res){
    var subreddit = req.params.subredditName;
    res.send("welcome to the" + subreddit + "subreddit!")
})
app.get("/r/:subredditName/comments/:id/:title", function(req, res){
    res.send("welcome to the comments page")
})
app.get("*", function(req, res){
    res.send("you are a star!")
})

// tell express to listen for requests
app.listen(3000, function(){
    console.log("server has started")
});