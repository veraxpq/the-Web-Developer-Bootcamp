var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

var Post = require("./models/posts");
var User = require("./models/user");
//use -email, name

Post.create({
    title: "how to cook the best burger pt. 3",
    content: "blah blah blahasdfasdfasdfsdfasdf"
}, function(err, post){
    User.findOne({email: "bob@gmail.com"}, function(err, foundUser){
        if(err){
            console.log(err);
        } else {
            foundUser.posts.push(post);
            foundUser.save(function(err, data){
                if(err){
                    console.log(err);
                } else {
                    console.log(data);
                }
            })
        }
    });
});
// User.create({
//     email: "bob@gmail.com",
//     name: "bob bel"
// });

//find user

// User.findOne({email: "bob@gmail.com"}).populate("posts").exec(function(err, user){
//     if(err){
//         console.log(err);
//     } else {
//         console.log(user);
//     }
// })