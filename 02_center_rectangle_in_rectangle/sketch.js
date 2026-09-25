const math = require("./math");
const geometry = require("./geometry");
const r = require("raylib");

const windowWidth = 700;
const windowHieght = 500;

const outerRectangleWidth = 200;
const outerRectangleheight = 150;

const outerRectangleCoordinateX = 150;
const outerRectangleCoordinateY = 150;

const innerRectanglewidth = 150;
const innerRectangleHeight = 100;

let innerRectangleCoordinateX;
let innerRectangleCoordinateY;

let windowWidthForInnerRectangle = geometry.windowForInnerRectangle(
    outerRectangleWidth,
    outerRectangleCoordinateX,
);

let windowHeightForInnerRectangle = geometry.windowForInnerRectangle(
    outerRectangleheight,
    outerRectangleCoordinateY,
);

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
        innerRectanglewidth,
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
        outerRectangleheight,
        r.RED,
    );

    r.DrawRectangle(
        innerRectangleCoordinateX,
        innerRectangleCoordinateY,
        innerRectanglewidth,
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