const prompt = require('prompt-sync')();
const colors = require('colors');
let repeat = false

do {
    let sideA, sideB, sideC, triangle;

    do {
        sideA = parseFloat(prompt(`Enter side ${'A'.green} of the triangle: `));
        sideB = parseFloat(prompt(`Enter side ${'B'.green} of the triangle: `));
        sideC = parseFloat(prompt(`Enter side ${'C'.green} of the triangle: `));

        if ([sideA, sideB, sideC].some(isNaN)) {
            console.log('This is not a valid entry. Try again.'.red);
            triangle = null;
        } else if (sideA >= sideB + sideC || sideB >= sideA + sideC || sideC >= sideA + sideB) {
            console.log('This is not a triangle. Try again.'.red);
            triangle = null;
        } else if (sideA === sideB && sideB === sideC) {
            triangle = 'equilateral';
        } else if (sideA === sideB || sideB === sideC || sideC === sideA) {
            triangle = 'isosceles';
        } else {
            triangle = 'scalene';
        }
    } while (!triangle);

    console.log(`The triangle is:  ${triangle.magenta}.`);

    repeat = prompt(`Press ${'0'.magenta} to try again or any other key to end: `);
    repeat = repeat == 0 ? true : false;
    console.clear();

} while (repeat);
