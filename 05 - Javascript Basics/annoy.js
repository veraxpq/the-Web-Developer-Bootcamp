// let answer = prompt("Are we there yet?");
// while (answer !== "yes" && answer !== "yeah") {
//     answer = prompt("are we there yet?");
// }
// alert("YAY!");



let answer = prompt("are we there yet?");
while (answer.indexOf("yes") === -1) {
    answer = prompt("are we there yet?")
}
alert("YAY!")
