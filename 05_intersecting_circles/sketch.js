const r = require("raylib");
const geometry = require("./geometry");

function setup() {
    const windowWidth = 800;
    const windowHeight = 600;

    r.InitWindow(windowWidth, windowHeight, "intersecting_circle");
    r.SetTargetFPS(50);
}

function isIntersecting(c1Radius, c2Radius, c1X, c1Y, c2X, c2Y) {
    const sumOfRadius = c1Radius + c2Radius;
    const distance = geometry.cartesianDistance(c1X, c1Y, c2X, c2Y);

    return sumOfRadius > distance;
}

function running() {
    return !r.WindowShouldClose();
}

function update() { }

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    const c1Radius = 50;
    const c1X = 250;
    const c1Y = 200;

    const c2Radius = 60;
    const c2X = 200;
    const c2Y = 250;

    const color = isIntersecting(c1Radius, c2Radius, c1X, c1Y, c2X, c2Y) ? r.RED : r.BLACK;

    r.DrawCircle(c1X, c1Y, c1Radius, color);
    r.DrawCircle(c2X, c2Y, c2Radius, color);

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