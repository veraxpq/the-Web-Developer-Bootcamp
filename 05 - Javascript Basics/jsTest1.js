function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function factorial(num) {
    let res = 1;
    while (num >= 1) {
        res = res * num;
        num--;
    }
    return res;
}

function kebabToSnake(str) {
     let newStr = str.replace(/-/g, "_");
     return newStr;
}