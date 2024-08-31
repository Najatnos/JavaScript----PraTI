const prompt = require('prompt-sync')();
const colors = require('colors');
let repeat = false;

do{
    for(let i = 10; i >= 1; i--){
        console.log(`${i.toString().green} \n`)
    }
    repeat = prompt(`Press ${'0'.magenta} to try again or any other key to end: `);
    repeat = repeat == 0 ? true : false;
    console.clear();
}while(repeat);
