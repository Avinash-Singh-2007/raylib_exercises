const math = require("./math");
const geometry = require("./geometry");
const r = require("raylib");

const windowWidth = 700;
const windowHieght = 500;

const outerRectangleWidth = 200;
const outerRectangleHeight = 150;

const outerRectangleCoordinateX = 150;
const outerRectangleCoordinateY = 150;

const innerRectangleWidth = rectangleDimension(outerRectangleWidth, 0.5);
const innerRectangleHeight = rectangleDimension(outerRectangleHeight, 0.5);

let innerRectangleCoordinateX;
let innerRectangleCoordinateY;

let windowWidthForInnerRectangle = geometry.windowForInnerRectangle(
    outerRectangleWidth,
    outerRectangleCoordinateX,
);

let windowHeightForInnerRectangle = geometry.windowForInnerRectangle(
    outerRectangleHeight,
    outerRectangleCoordinateY,
);

function rectangleDimension(outerRectangleDimension, percentageOfDimension) {
    return outerRectangleDimension * percentageOfDimension;
}

function makeInnerRectangleInCenter(
    windowWidth,
    windowHieght,
    rectangleWidth,
    rectangleHeight,
) {
    const windowWidthHalf = math.divideInHalf(windowWidth);
    const windowHieghtHalf = math.divideInHalf(windowHieght);

    const rectangleWidthHalf = math.divideInHalf(rectangleWidth);
    const rectangleHeightHalf = math.divideInHalf(rectangleHeight);

    innerRectangleCoordinateX = geometry.calCoordinate(
        windowWidthHalf,
        rectangleWidthHalf,
    );
    innerRectangleCoordinateY = geometry.calCoordinate(
        windowHieghtHalf,
        rectangleHeightHalf,
    );
}

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(windowWidth, windowHieght, "program_2");
    r.SetTargetFPS(50);
}

function update() {
    makeInnerRectangleInCenter(
        windowWidthForInnerRectangle,
        windowHeightForInnerRectangle,
        innerRectangleWidth,
        innerRectangleHeight,
        r.RED,
    );
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);

    r.DrawRectangle(
        outerRectangleCoordinateX,
        outerRectangleCoordinateY,
        outerRectangleWidth,
        outerRectangleHeight,
        r.RED,
    );

    r.DrawRectangle(
        innerRectangleCoordinateX,
        innerRectangleCoordinateY,
        innerRectangleWidth,
        innerRectangleHeight,
        r.WHITE,
    );

    r.EndDrawing();
}

function tearDown() {
    r.CloseWindow();
}

module.exports = {
    running,
    setup,
    update,
    draw,
    tearDown,
}


