const prompt = require('prompt-sync')();
const colors = require('colors');
let repeat = false;
let answer;

const promptanalyze = (message, validator) => {
    let enter;
    do {
        enter = prompt(message.green);
        if (!validator(enter)) console.log('Invalid input. Try again.\n'.red);
    } while (!validator(enter));
    return enter;
};

let clients = [
    { name: 'Dayce', age: 31, city: 'Sheffield' }
];

do {
    do {
        console.log(`Do you want to ${'see the clients by age'.blue} or ${'add an client'.green}?\n`);
        answer = prompt(`Enter ${'see'.blue} to ${'see clients'.blue} or ${'add'.green} to ${'add an client'.green}: `).toLowerCase();
        if (answer !== 'see' && answer !== 'add') {
            console.log(`That's not a valid answer! Try again. \n`.red);
        }
    } while (answer !== 'see' && answer !== 'add');

    if (answer === 'see') {
        let seethat;
        seethat = Number(promptanalyze("Enter here the age and all clients with age above it will appear: ", enter => !isNaN(enter) && Number(enter) >= 0));
        let found = false;
        clients.forEach((client, index) => {
            if (client.age >= seethat) {
                found = true; 
                console.log(`${`${index + 1}º Client ${client.name}: `.blue} has ${client.age} years and lives in ${client.city}.`);
            }
        });
        if (!found) {
            console.log('No clients found with a age above your input.'.red);
        };
        } else {
        let nextclient = {};
        nextclient.name = promptanalyze('Enter client name: ', enter => isNaN(enter)).toLowerCase();
        nextclient.city = promptanalyze('Enter client city: ', enter => isNaN(enter)).toLowerCase();
        nextclient.age = Number(promptanalyze('Enter client age: ', enter => !isNaN(enter) && Number(enter) >= 0));
        clients.push(nextclient);
    }

    repeat = prompt(`Press ${'0'.magenta} to try again or any other key to end: `);
    repeat = repeat === '0'; 
    console.clear();
} while (repeat);
