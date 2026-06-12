const { add } = require("./calculator");

test("adds 2+3", () => {

    expect(add(2, 3)).toBe(5);

});

test("subtracts 2-A", () => {

    expect(subtract(2, 3)).toBe(-1);

});

test("multiply 2*3", () => {

    expect(multiply(2, 3)).toBe(6);

});

test("divide 2/3", () => {

    expect(divide(2, 3)).toBe(2 / 3);

});
