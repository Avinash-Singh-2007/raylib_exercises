function calCoordinate(windowHalf, rectangleHalf) {
    return windowHalf - rectangleHalf;
}

function windowForInnerRectangle(
    outerRectangleDimension,
    outerRectangleCoordinate,
) {
    return outerRectangleDimension + outerRectangleCoordinate * 2;
}

module.exports = {
    calCoordinate,
    windowForInnerRectangle,
}