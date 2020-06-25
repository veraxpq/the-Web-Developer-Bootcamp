//create secret number
let secretNumber = 4;

let count = 1;
while (count < 6) {
    console.log("count is: " + count);
    count++;
}
//ask user for guess
let guess = prompt("guess a number");
//check guess
if (Number(guess) === secretNumber) {
    alert("you got it right!");
} 
else if (Number(guess) > secretNumber) {
    alert("too high, guess agian!");
}
else {
    alert("too low, guess again!");
}
let num = 1;
while (num <= 20) {
    if (num % 4 === 0) {
        console.log(num);
    }
    num++;
}
num = 5;
while (num <= 50) {
    if (num % 5 === 0 && num % 3 === 0) {
        console.log(num);
    }
    num++;
}