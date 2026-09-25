const geometry = require("./geometry")
function divideInHalf(number) {
    return number / 2;
}

function square(x) {
    return x * x;
}

function squareRoot(x) {
    return x ** 0.5;
}



module.exports = {
    divideInHalf,
    square,
    squareRoot,
}

