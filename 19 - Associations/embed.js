var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

var postSchema = new mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);

//use -email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    posts: [postSchema]
});
var User = mongoose.model("User", userSchema);

// var newUser = new User({
//     email: "vera@brown.edu",
//     name: "vera brown"
// });

// newUser.posts.push({
//     title: "hwo to bre polyjiso potions",
//     content: "just kidding"
// });

// newUser.save(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// });
// // newUser.save(function(err, user){
// //     if(err){
// //         console.log(err);
// //     } else {
// //         console.log(user);
// //     }
// // });

// var newPost = new Post({
//     title: "reflections on apples",
//     content: "they are delicious"
// });
// newPost.save(function(err, post){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

User.findOne({name: "vera brown"}, function(err, user){
    if(err){
        console.log(err);
    } else {
        user.posts.push({
            title: "three things i hate",
            content: "vera, vvvvvera, vera"
        });
        user.save(function(err, user){
            if(err){
                console.log(err);
            } else {
                console.log(user);
            }
        })
    }
});