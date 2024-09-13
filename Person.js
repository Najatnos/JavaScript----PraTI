const prompt = require('prompt-sync')();
const colors = require('colors');
let repeat = false;
let answer;
let range = 0;
let persons = [
    {name: 'Daryn', age: 19, city: 'Sheffield'}
]

do{
    do{
        console.log(`Would you like to see the persons that registered in our system or register a new one?\n`)
        answer = prompt(`Enter ${'see'.blue} to ${'see person'.blue} or ${'add'.green} to ${'add person'.green}: `).toLowerCase();
        console.log(answer === 'see' ? `Below is the last registered person:`
            : answer === 'add' ? `Below you'll add:`
            : `That's not a valid answer! Try again. \n`);
    }while(answer !== 'see' && answer !== 'add');
    if (answer === 'see') {
        for (const person of persons) {
            console.log(`${range+1}º: ${person.name} has ${person.age} years and live in the city of ${person.city}.`);
            range++;
        }
    } else {
        let nextperson = {};
        persons.forEach(person => {
            Object.keys(person).forEach(key => {
                nextperson[key] = prompt(`Enter ${key.blue}: `);
            });
            persons.push(nextperson);
        });
    }

    repeat = prompt(`Press ${'0'.magenta} to try again or any other key to end: `);
    repeat = repeat === '0'; // Corrigido a comparação com string '0'
    console.clear();
}while(repeat);
