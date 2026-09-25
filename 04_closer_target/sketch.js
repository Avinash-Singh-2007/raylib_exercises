const r = require("raylib");
const math = require("./math");
const geometry = require("./geometry");

const windowWidth = 900;
const windowHieght = 700;

const sourceCircleRadius = 50;
const sourceCircleCoordinateX = 100;
const sourceCircleCoordinateY = 100;

const targetCircle1Radius = 50;
const targetCircle1CoordinateX = 500;
const targetCircle1CoordinateY = 400;

const targetCircle2Radius = 50;
const targetCircle2CoordinateX = 700;
const targetCircle2CoordinateY = 100;

const lineX1 = sourceCircleCoordinateX;
const lineY1 = sourceCircleCoordinateY;
let lineX2;
let lineY2;

function isMinimumDistance(X, Y, x1, y1, x2, y2) {
    const distanceBetweentarget1 = geometry.cartesianDistance(X, Y, x1, y1);
    const distanceBetweentarget2 = geometry.cartesianDistance(X, Y, x2, y2);
    return distanceBetweentarget1 < distanceBetweentarget2;
}

function lineMakerTowardsShortestDistanceTarget(
    sourceCircleCoordinateX,
    sourceCircleCoordinateY,
    targetCircle1CoordinateX,
    targetCircle1CoordinateY,
    targetCircle2CoordinateX,
    targetCircle2CoordinateY,
) {
    const isTarget1theShortestPath = isMinimumDistance(
        sourceCircleCoordinateX,
        sourceCircleCoordinateY,
        targetCircle1CoordinateX,
        targetCircle1CoordinateY,
        targetCircle2CoordinateX,
        targetCircle2CoordinateY,
    );

    if (isTarget1theShortestPath) {
        lineX2 = targetCircle1CoordinateX;
        lineY2 = targetCircle1CoordinateY;
    } else {
        lineX2 = targetCircle2CoordinateX;
        lineY2 = targetCircle2CoordinateY;
    }
}

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    r.InitWindow(windowWidth, windowHieght, "program_4");
    r.SetTargetFPS(50);
}

function update() {
    lineMakerTowardsShortestDistanceTarget(
        sourceCircleCoordinateX,
        sourceCircleCoordinateY,
        targetCircle1CoordinateX,
        targetCircle1CoordinateY,
        targetCircle2CoordinateX,
        targetCircle2CoordinateY,
    );
}

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    r.DrawCircle(
        sourceCircleCoordinateX,
        sourceCircleCoordinateY,
        sourceCircleRadius,
        r.BLUE,
    );

    r.DrawCircle(
        targetCircle1CoordinateX,
        targetCircle1CoordinateY,
        targetCircle1Radius,
        r.RED,
    );

    r.DrawCircle(
        targetCircle2CoordinateX,
        targetCircle2CoordinateY,
        targetCircle2Radius,
        r.RED,
    );

    r.DrawLine(lineX1, lineY1, lineX2, lineY2, r.BLACK);

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

