let todo = [];
let input = prompt("what would you like to do?");
while (input !== "quit") {
if (input === "list") {
    todo.forEach(function(t, index) {

        console.log(index + ": " + t);
    })
} else if (input === "new") {
    todo.push(prompt("enter new todo"));
    console("added todo")
} else if (input === "delete") {
    let index = prompt("enter index of todo to delete")
    todo.splice(index, 1);
    console.log("deleged todo")
}
input = prompt("what would you like to do?");
} 
console.log("ok, you quit the app");

function printReverse(c) {
    for (let i = c.length - 1; i >= 0; i--) {
        console.log(c[i]);
    }
}
function isUniform(c) {
    let temp = c[0];
    for (let i = 1; i < c.length; i++) {
        if (c[i] !== temp) {
            return false;
        }
    }
    return true;
} 
function sumArray(nums) {
    let res = 0;
    nums.forEach(function(n) {
        res += n;
    }) 
    return res;
}
function max(nums) {
    let max = nums[0];
    nums.forEach(function(n) {
        if (n > max) {
            max = n;
        }
    })
    return max;
}