const geometry = require("./geometry");
const r = require("raylib");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const screenWidth = 700;
    const screenHeight = 500;

    r.InitWindow(screenWidth, screenHeight, "scale_and_center");
    r.SetTargetFPS(50);
}

function update() { }

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);

    const outerRectWidth = 200;
    const outerRectHeight = 150;

    const outerRectX = 400;
    const outerRectY = 150;

    const innerRectWidth = geometry.innerRectDimension(outerRectWidth, 0.5);
    const innerRectHeight = geometry.innerRectDimension(outerRectHeight, 0.5);

    const screenWidthForInnerRect = geometry.screenForInnerRect(outerRectWidth, outerRectX,);
    const screenHeightForInnerRect = geometry.screenForInnerRect(outerRectHeight, outerRectY,);

    const innerRectX = geometry.caloffset(screenWidthForInnerRect, innerRectWidth,);
    const innerRectY = geometry.caloffset(screenHeightForInnerRect, innerRectHeight,);

    r.DrawRectangle(outerRectX, outerRectY, outerRectWidth, outerRectHeight, r.RED,);

    r.DrawRectangle(innerRectX, innerRectY, innerRectWidth, innerRectHeight, r.WHITE,);

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

