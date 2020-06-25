let numberOfSquards = 6;
let colors = [];
let pickedColor;
let squares = document.querySelectorAll(".square");
let colorDisplay = document.getElementById("colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let modeButton = document.querySelectorAll(".mode");

init();
function init() {
    //mode buttons event listener
    setupModeButton();
    setupSquares();
    reset();
}

function setupModeButton() {
    for (let i = 0; i < modeButton.length; i++) {
        modeButton[i].addEventListener("click", function() {
            modeButton[0].classList.remove("selected");
            modeButton[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numberOfSquards = 3 : numberOfSquards = 6;
            reset();
        })
    }
}

function setupSquares() {
    for (let i = 0; i < squares.length; i++) {
        //add click listeners to squares
        squares[i].addEventListener("click", function() {
            let clickColor = this.style.backgroundColor;
            if (clickColor === pickedColor) {
                messageDisplay.textContent = "Correct!"
                resetButton.textContent = "Play Again!"
                changeColors(clickColor);
                h1.style.backgroundColor = clickColor;
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again"
            }
        })
    }
}
function reset() {
    colors = generateRandomColor(numberOfSquards);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of square
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Color";
}
// easyBtn.addEventListener("click", function() {
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numberOfSquards = 3;
//     colors = generateRandomColor(numberOfSquards);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (let i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// })

// hardBtn.addEventListener("click", function() {
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numberOfSquards = 6
//     colors = generateRandomColor(numberOfSquards);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (let i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// })


resetButton.addEventListener("click", function() {
    reset();
})



function changeColors(color) {
    //loop through all squares
    for (let i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    //change each color to match given color
}

function pickColor() {
    let random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColor(num) {
    //make an array
    let arr = [];
    //add num random colors to arr
    for (let i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return that array
    return arr;
}
function randomColor() {
    //pick a red from 0 to 255
    let r = Math.floor(Math.random() * 256);
    //pick a green from 0 to 255
    let g = Math.floor(Math.random() * 256);
    //pick a blue from 0 to 255
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}