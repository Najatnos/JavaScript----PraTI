const prompt = require('prompt-sync')();
const colors = require('colors');
const round = Math.round;
const jump = '\n';
let numb; 
let oodoreven;
let repeat = false;

do {
    console.log(jump);
    numb = prompt(`Enter an ${'integer'.green}: `);
    try {
        numb = Number(numb);
        if (isNaN(numb)) {
            
            throw new Error('Not a number.');
        } else if (numb % 1 !== 0) {
            numb = round(numb);
        }
        if (numb % 2 === 0) {
            oodoreven = "even";
        } else {
            oodoreven = "odd";
        }
    } catch (error) {
        console.log(error.message);
        continue;
    } finally {
        
        if (isNaN(numb)) {
            console.log('There is no number to analyse.');
            console.clear();
        } else {
            console.log(`${numb.toString().magenta} is an ${oodoreven.magenta} number`);
        }
    }
    
    repeat = prompt(`Press ${'0'.magenta} to try again or any other enter to end: `);
    repeat = repeat == 0 ? true : false;
    console.clear();
    
  
} while (repeat == true );
