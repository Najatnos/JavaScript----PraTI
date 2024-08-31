const prompt = require('prompt-sync')();
const colors = require('colors');
let repeat = false;

do{
    let number;
    do{
        number = parseInt(prompt(`Enter a ${'number'.green} above negative, free from decimals and not ${'0'.green}: `));
        if (isNaN(number) || number <= 0 ){ console.log('This is not a valid enter. Try again.'.red);};
    } while (isNaN(number) || number <= 0);
    let start = 1;
    let i = number;
    while (i > 1) {
      start *= i;
      i--;
    }
    console.log(`The factorial answer of your number is: `, start);
    repeat = prompt(`Press ${'0'.magenta} to try again or any other key to end: `);
    repeat = repeat == 0 ? true : false;
    console.clear();
  
} while (repeat);
