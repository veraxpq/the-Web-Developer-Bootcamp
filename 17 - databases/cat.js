var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// adding a new cat to the DB
// var george = new Cat({
//     name: "george",
//     age: 11,
//     temperament: "grouchy"
// });

// george.save(function(err, cat){
//     if(err) {
//         console.log("something went wrong");
//     } else {
//         console.log("we just save a cat to the db");
//         console.log(cat);
//     }
// });
Cat.create({
    name: "snow white",
    age: 17,
    temperament: "bland"
}, function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
});
// //retrieve all cats from the DB
Cat.find({}, function(err, cats){
    if (err) {
        console.log("oh no, error");
        console.log(err);
    } else {
        console.log("all the cats...");
        console.log(cats);
    }
});