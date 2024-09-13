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

let employees = [
    { name: 'Dayce', role: 'cleaning', wage: 2000.0 }
];

do {
    do {
        console.log(`Do you want to ${'see the employees by wage'.blue} or ${'add an employee'.green}?\n`);
        answer = prompt(`Enter ${'see'.blue} to ${'see employees'.blue} or ${'add'.green} to ${'add an employee'.green}: `).toLowerCase();
        if (answer !== 'see' && answer !== 'add') {
            console.log(`That's not a valid answer! Try again. \n`.red);
        }
    } while (answer !== 'see' && answer !== 'add');

    if (answer === 'see') {
        let seethat;
        seethat = Number(promptanalyze("Enter here the wage amount and all employees with wage above it will appear: ", enter => !isNaN(enter)));
        let found = false;
        for (let employee of employees) {
            if (employee.wage >= seethat) {
                console.log(`${employee.name}: ${`${employee.role} role and a wage of ${employee.wage}`.blue}`);
                found = true;
            }
        }
        if (!found) {
            console.log('No employees found with a wage above that amount.'.red);
        }
        } else {
        let nextemployee = {};
        nextemployee.name = promptanalyze('Enter employee name: ', enter => isNaN(enter)).toLowerCase();
        nextemployee.role = promptanalyze('Enter employee role: ', enter => isNaN(enter)).toLowerCase();
        nextemployee.wage = Number(promptanalyze('Enter employee wage: ', enter => !isNaN(enter) && Number(enter) > 0));
        employees.push(nextemployee);
    }

    repeat = prompt(`Press ${'0'.magenta} to try again or any other key to end: `);
    repeat = repeat === '0'; 
    console.clear();
} while (repeat);
