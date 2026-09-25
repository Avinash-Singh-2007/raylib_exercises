const math = require("./math");
const geometry = require("./geometry")

const r = require("raylib");

const windowWidth = 700;
const windowHieght = 500;

const rectangleWidth = 200;
const rectangleHeight = 150;

let rectangleCoordinateX;
let rectangleCoordinateY;

function makeRectangleInCenter(
    windowWidth,
    windowHieght,
    rectangleWidth,
    rectangleHeight,
) {
    const windowWidthHalf = math.divideInHalf(windowWidth);
    const windowHieghtHalf = math.divideInHalf(windowHieght);

    const rectangleWidthHalf = math.divideInHalf(rectangleWidth);
    const rectangleHeightHalf = math.divideInHalf(rectangleHeight);

    rectangleCoordinateX = geometry.calCoordinate(
        windowWidthHalf,
        rectangleWidthHalf,
    );
    rectangleCoordinateY = geometry.calCoordinate(
        windowHieghtHalf,
        rectangleHeightHalf,
    );
}

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(windowWidth, windowHieght, "program_1");
    r.SetTargetFPS(50);
}

function update() {
    makeRectangleInCenter(
        windowWidth,
        windowHieght,
        rectangleWidth,
        rectangleHeight,
    );
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);

    r.DrawRectangle(
        rectangleCoordinateX,
        rectangleCoordinateY,
        rectangleWidth,
        rectangleHeight,
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