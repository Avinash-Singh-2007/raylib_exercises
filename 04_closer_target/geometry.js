function square(x) {
    return x * x;
}

function squareRoot(x) {
    return x ** 0.5;
}

function cartesianDistance(x1, y1, x2, y2) {
    return squareRoot(square(x1 - x2) + square(y1 - y2));
}

module.exports = {
    cartesianDistance,
}