let age = prompt("what's your age?");
if (age < 0) {
    console.log("come back once you're out of the womb");
}
if (age === 21) {
    console.log("happy 21st birthday!");
}
if (age % 2 !== 0) {
    console.log("your age is odd!");
}
if (age % Math.sqrt(age) === 0) {
    console.log("your age is a perfect square!");
}