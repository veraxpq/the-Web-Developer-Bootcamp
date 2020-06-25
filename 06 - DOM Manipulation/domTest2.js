let c = document.querySelector("button");
let isPurple = false;

// c.addEventListener("click", function(){
//     if (isPurple) {
//         document.body.style.background = "white";
//     } else {
//         document.body.style.background = "purple";
//     }
//     isPurple = !isPurple;
// })

c.addEventListener("click", function() {
    document.body.classList.toggle("purple");
})