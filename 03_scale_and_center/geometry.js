function screenForInnerRect(outerRectDimension, outerRectCoordinate,) {
    return outerRectDimension + outerRectCoordinate * 2;
}

function caloffset(outer, inner) {
    return (outer / 2) - (inner / 2);
}

function innerRectDimension(outerRectDimension, percentageOfDimension) {
    return outerRectDimension * percentageOfDimension;
}

module.exports = {
    caloffset,
    screenForInnerRect,
    innerRectDimension,
}