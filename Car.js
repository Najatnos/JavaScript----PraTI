const prompt = require('prompt-sync')();
const colors = require('colors');
let repeat = false;
let answer;
const car = {
    brand: '',
    model: '',
    year: '',
    color: ''
};

do {
    do {
        console.log('Would you like to see the latest car to be registered or register a new one?\n')
        answer = prompt(`Enter ${'see'.blue} to ${'see car'.blue} or ${'add'.green} to ${'add car'.green}: `).toLowerCase();
        console.log(answer === 'see' ? `Below is the last registered car:`
            : answer === 'add' ? `Below you'll add:`
            : `That's not a valid answer! Try again. \n`);
    } while (answer !== 'see' && answer !== 'add'); // Corrigido a lógica da condição

    if (answer === 'see') {
        for (const i in car) {
            if (car.hasOwnProperty(i)) {
                console.log(`${i} : ${car[i]}`);
            }
        }
    } else {
        for (const i in car) {
            if (car.hasOwnProperty(i)) {
                car[i] = prompt(`Enter ${i.blue}: `).toLowerCase();
            }
        }
    }

    repeat = prompt(`Press ${'0'.magenta} to try again or any other key to end: `);
    repeat = repeat === '0'; // Corrigido a comparação com string '0'
    console.clear();
} while (repeat);
