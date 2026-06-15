// Importing All Functions From The Calculator File
const { add } = require("./calculator");
const { subtract } = require("./calculator");
const { multiply } = require("./calculator");
const { divide } = require("./calculator");
const { square } = require("./calculator");
const { cube } = require("./calculator");

test("adds 2+3", () => {

    expect(add(2, 3)).toBe(5);
    expect(add(-1, -2)).toBe(-3);
    expect(add(10, 5)).toBe(15);

});

test("subtracts 5-2", () => {

    expect(subtract(5, 2)).toBe(3);
    expect(subtract(-1, -2)).toBe(1);
    expect(subtract(10, 5)).toBe(5);

});

test("multiplies 4*4", () => {

    expect(multiply(4, 4)).toBe(16);
    expect(multiply(-1, -2)).toBe(2);
    expect(multiply(10, 5)).toBe(50);

});

test("divides 10/2", () => {

    expect(divide(10, 2)).toBe(5);
    expect(divide(-1, -2)).toBe(0.5);
    expect(divide(10, 5)).toBe(2);

});

test("squares 5", () => {

    expect(square(5)).toBe(25);
    expect(square(-1)).toBe(1);
    expect(square(10)).toBe(100);
    expect(square(4)).toBe(16);

});

test("cubes 5", () => {

    expect(cube(5)).toBe(125);
    expect(cube(-1)).toBe(-1);
    expect(cube(10)).toBe(1000);
    expect(cube(3)).toBe(27);

});
