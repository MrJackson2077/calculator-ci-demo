const { add } = require("./calculator");

test("adds 2+3", () => {

    expect(add(2, 3)).toBe(5);

});

test("adds 5+10", () => {

    expect(add(5, 10)).toBe(15);

});

test("adds 10+A", () => {

    expect(add(10, 15)).toBe(25);

});
