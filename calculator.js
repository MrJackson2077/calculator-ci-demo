function add(a, b) {

    return a + b;

}

function subtract(a, b) {

    return a - b;

}

function multiply(a, b) {

    return a * b;

}

function divide(a, b) {

    return a / b;

}

function square(a) {

    return a * a;

}

function cube(a) {

    return a * a * a;

}


function squareRoot(a) {

    return Math.sqrt(a);

}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { add, subtract, multiply, divide, square, cube, squareRoot };
}
