const prompt = require('prompt-sync')();
const colors = require('colors');
let repeat = false;
let answer;
const promptanalyze = (message, validator) => {
    let enter;
    do {
        enter = prompt(message.green);
        if (!validator(enter)) console.log('Invalid enter. Try again.\n'.red);
    } while (!validator(enter));
    return enter;
};
let company = {
    departments : [
        {departmentname : 'marketing', employees : [
            'Spyke Stryke', 'Zebbo Druda', 'Plulnis Ula', 'D`ohn Err', 'Nwayn Vigay'
        ]}
    ]
}
do{
do{
    console.log(`Do you want to ${'see the company departments'.blue} or ${'create a company department'.green}?\n`)
    answer = prompt(`Enter ${'see'.blue} to ${'see departments'.blue} or ${'create'.green} to ${'create a department'.green}: `).toLowerCase();
    console.log(answer === 'see' ? `Below is the departments: \n`
        : answer === 'create' ? `Below you'll create: \n`
        : `That's not a valid answer! Try again. \n`.red);
}while(answer !== 'see' && answer !== 'create');
if (answer === 'see') {
    for (let department of company.departments) {
        console.log(`${department.departmentname} department:`.blue);
        for (let i in department.employees) {
            console.log(`Employee nº${parseInt(i) + 1}: ${department.employees[i]}`.magenta);
        }
    }
} else{
    let nextdepartment = {};
        nextdepartment.departmentname = promptanalyze('Enter the department name: ', enter => isNaN(enter)).toLowerCase();
        nextdepartment.employees = [];  
        let employee;
        do {
            employee = promptanalyze('Enter the employee name or "exit" to leave: ', enter => isNaN(enter));
            if (employee.toLowerCase() !== 'exit') {
                nextdepartment.employees.push(employee);
            }
        } while (employee.toLowerCase() !== 'exit');
        company.departments.push(nextdepartment);
}

repeat = prompt(`Press ${'0'.magenta} to try again or any other key to end: `);
repeat = repeat === '0'; 
console.clear();
}while(repeat);
