const r = require("raylib");
const geometry = require("./geometry");

function running() {
    return !r.WindowShouldClose();
}

function setup() {
    const screenWidth = 900;
    const screenHeight = 700;

    r.InitWindow(screenWidth, screenHeight, "closest_target");
    r.SetTargetFPS(50);
}

function update() { }

function draw() {
    r.BeginDrawing();
    r.ClearBackground(r.WHITE);

    const sourceRadius = 50;
    const sourceX = 100;
    const sourceY = 100;

    const firstTargetRadius = 50;
    const firstTargetX = 500;
    const firstTargetY = 400;

    const secondTargetRadius = 50;
    const secondTargetX = 700;
    const secondTargetY = 100;

    const distance1 = geometry.cartesianDistance(sourceX, sourceY, firstTargetX, firstTargetY);
    const distance2 = geometry.cartesianDistance(sourceX, sourceY, secondTargetX, secondTargetY);

    let targetX = firstTargetX;
    let targetY = firstTargetY;

    if (distance1 > distance2) {
        targetX = secondTargetX;
        targetY = secondTargetY;
    }

    r.DrawCircle(sourceX, sourceY, sourceRadius, r.BLUE,);
    r.DrawCircle(firstTargetX, firstTargetY, firstTargetRadius, r.RED);
    r.DrawCircle(secondTargetX, secondTargetY, secondTargetRadius, r.RED);

    r.DrawLine(sourceX, sourceY, targetX, targetY, r.BLACK);

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

