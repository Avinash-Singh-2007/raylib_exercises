const geometry = require("./geometry")
const r = require("raylib");

const screenWidth = 700;
const screenHeight = 500;

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(screenWidth, screenHeight, "center_rectangle");
    r.SetTargetFPS(50);
}

function update() { }

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.BLUE);

    const rectWidth = 200;
    const rectHeight = 150;

    const rectX = geometry.caloffset(screenWidth, rectWidth);
    const rectY = geometry.caloffset(screenHeight, rectHeight);

    r.DrawRectangle(rectX, rectY, rectWidth, rectHeight, r.WHITE,);

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