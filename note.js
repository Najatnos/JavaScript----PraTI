const prompt = require('prompt-sync')();
const colors = require('colors');
const jump = '\n';
let note; 
let assessmentnote;
let repeat = false;
let recovery = false;
function assessment () {
    try {
        console.log(jump);
        note = prompt(`Enter the ${'note'.green} of your assessment: `);
        note = Number(note);
        if (isNaN(note) || note > 10) {  
            throw new Error('Not an note.');
        } 
        if (note >= 0 && note <= 6.9) {
            assessmentnote = "failed";
        } else if (note >= 7 ) {
            assessmentnote = "approved";
        } 
    } catch (error) {
        console.log(error.message);
        assessment();
}}

do {
    assessment();
    if (note >= 6 && note <= 6.9) { recovery = true };
    let result = `You've established a score of ${note.toString().magenta}. You are ${assessmentnote.magenta}.`;
    console.log(result);
    if (recovery) {
                console.log(jump);
                console.log('Recovery Test.'.green);
                recovery = false;
                assessment();
                let result = `You've established a score of ${note.toString().magenta}. You are ${assessmentnote.magenta}.`;
                console.log(result);
            } 
    repeat = prompt(`Press ${'0'.magenta} to try again or any other enter to end: `);
    repeat = repeat == 0 ? true : false;
    console.clear();
} while (repeat == true );
