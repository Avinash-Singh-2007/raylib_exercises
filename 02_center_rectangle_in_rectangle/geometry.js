function screenForInnerRect(outerRectDimension, outerRectCoordinate,) {
    return outerRectDimension + outerRectCoordinate * 2;
}

function caloffset(outer, inner) {
    return (outer / 2) - (inner / 2);
}

module.exports = {
    caloffset,
    screenForInnerRect,
}