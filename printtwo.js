const prompt = require('prompt-sync')();
const colors = require('colors');
let repeat = false;

do{
    let values = [];
    let value;
    for (let i = 1; i <= 2; i++){
        do{
            let word = i == 2 ? 'other value: ' : 'a value: ';
            value = prompt(`${i.toString().green}º Gimme ${word}`);
            value = Number(value);
            if (isNaN(value)) {
                console.log(`This is not an numeric value. \nTry again.`);
            }
        }while(isNaN(value));
        values.push(value);
    }
    values.sort((a, b) => a - b);
    console.log(`There are: `);
    for (numbers of values){ console.log(`${numbers.toString().magenta}.`);};
    console.log('\n');
    repeat = prompt(`Press ${'0'.magenta} to try again or any other key to end: `);
    repeat = repeat == 0 ? true : false;
    console.clear();
}while(repeat);
