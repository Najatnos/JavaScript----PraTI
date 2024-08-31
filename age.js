const prompt = require('prompt-sync')();
const colors = require('colors');
const round = Math.round;
const jump = '\n';
let age; 
let agerange;
let repeat = false;

do {
    console.log(jump);
    age = prompt(`Enter an ${'age'.green}: `);
    try {
        age = Number(age);
        if (isNaN(age)) {  
            throw new Error('Not an age.');
        } else if (age % 1 !== 0) {
            age = round(age);
            console.log(`For cases like float, your age has been rounded to ${age.toString().green}.`)
        }
        if (age >= 0 && age <= 12) {
            agerange = "child";
        } else if (age >= 13 && age <= 17 ) {
            agerange = "teenager";
        } else if (age >= 18 && age <= 64 ) {
            agerange = "adult";
        } else {
            agerange = "elder";
        }
    } catch (error) {
        console.log(error.message);
        continue;
    } finally {
        
        if (isNaN(age)) {
            console.log('No age, no work.');
            console.clear();
        } else {
            console.log(`${age.toString().magenta} is an age living like a ${agerange.magenta}.`);
        }
    }
    
    repeat = prompt(`Press ${'0'.magenta} to try again or any other enter to end: `);
    repeat = repeat == 0 ? true : false;
    console.clear();
    
  
} while (repeat == true );
