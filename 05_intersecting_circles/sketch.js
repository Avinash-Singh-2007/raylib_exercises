const r = require("raylib");
const math = require("./math");
const geometry = require("./geometry");

const windowWidth = 800;
const windowHeight = 600;

const circle1radius = 50;
const circle1xCoordinate = 350;
const circle1yCoordinate = 200;

const circle2radius = 150;
const circle2xCoordinate = 200;
const circle2yCoordinate = 250;

let isCircleIntersecting;
let color;

function setup() {
    r.InitWindow(windowWidth, windowHeight, "Program_5");
    r.SetTargetFPS(50);
}

function isIntersecting() {
    const sumOfRadius = circle1radius + circle2radius;

    const distance = geometry.cartesianDistance(circle1xCoordinate, circle2xCoordinate, circle1yCoordinate, circle2yCoordinate);

    return sumOfRadius > distance;
}

function update() {
    isCircleIntersecting = isIntersecting();
    color = isCircleIntersecting ? r.RED : r.BLACK;
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    r.DrawCircle(
        circle1xCoordinate,
        circle1yCoordinate,
        circle1radius,
        color
    );

    r.DrawCircle(
        circle2xCoordinate,
        circle2yCoordinate,
        circle2radius,
        color
    );

    r.EndDrawing();
}

function loop() {
    while (!r.WindowShouldClose()) {
        update();
        draw();
    }
}

function main() {
    setup();
    loop();
}

main();
