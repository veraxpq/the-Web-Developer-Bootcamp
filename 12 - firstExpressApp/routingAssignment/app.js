var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("hi there, welcome to my assignment!");
});
app.get("/speak/:animal", function(req, res){
    var animal = req.params.animal.toLowerCase();
    // var sound = "";
    var sounds = {
        pig: "oink",
        cow: "moo",
        dog: "woof!",
        cat: "I hate you human",
        goldfish: "...."
    }
    var sound = sounds[animal];
    // if (animal == "pig"){
    //     sound = "oink"
    // } else if (animal == "cow") {
    //     sound = "moo";
    // } else if (animal == "dog") {
    //     sound = "woof"
    // }
    res.send("the "+ animal + " says " + sound);
});
// app.get("/speak/cow", function(req, res){
//     res.send("the dog says 'worf worf!");
// });
app.get("/repeat/:message/:times", function(req, res){
    var words = req.params.message;
    var times = Number(req.params.times);
    var result = "";
    for (var i = 0; i < times; i++) {
        result = result + " " + words;
    }
    res.send(result);
})
app.get("*", function(req, res){
    res.send("sorry, page not found... what are you doing with your life?");
})

app.listen(3000, function() {
    console.log("server begins");
})