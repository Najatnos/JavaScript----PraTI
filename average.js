const prompt = require('prompt-sync')();
const colors = require('colors');
let repeat = false;

do {
    let average = [];
    let enter;
    let changesentence;
    let showotheroption;

    do {
        changesentence = average.length == 1 ? 'another number' : 'a number';
        showotheroption = average.length >= 2 ? `to add on the average list or enter ${'0'.green} to finish and do the average: ` : 'to add on the average list: ';
        enter = prompt(`Enter ${changesentence} ${showotheroption}`);
        enter = Number(enter);

        if (isNaN(enter)) { 
            console.log(`This is not a numeric value. Try again.`); 
        } else if (enter !== 0) {
            average.push(enter);
        }
    } while (enter !== 0 || average.length < 2);

    let sum = average.reduce((acc, number) => acc + number, 0);
    let media = sum / average.length;
    console.log(`Behold the average of all the numbers you entered: ${media}`);
    
    repeat = prompt(`Press ${'0'.magenta} to try again or any other key to end: `);
    repeat = repeat == 0 ? true : false;
    console.clear();

} while (repeat);
