const prompt = require('prompt-sync')();
const colors = require('colors');
let repeat = false;
let answer;
let students = [
    {name: 'Maege', first: 7.0, last: 6.0}
]
do{
    do{
        console.log(`Choose between ${'see student media'.blue} or ${'add student media'.green}.\n`)
        answer = prompt(`Enter ${'see'.blue} to ${'see media'.blue} or ${'add'.green} to ${'add media'.green}: `).toLowerCase();
        console.log(answer === 'see' ? `Below is the students list: \n`
            : answer === 'add' ? `Below you'll add: \n`
            : `That's not a valid answer! Try again. \n`);
    }while(answer !== 'see' && answer !== 'add');
    if (answer === 'see') {
        for (let i = 0; i < students.length; i++) {
            let student = students[i];
            let media = (student.first + student.last) / 2;
            console.log(`${i + 1}º ${student.name} - ${'media of: '.blue} ${media}.`);
            console.log(media >= 6.5 ? 'Student approved in the semester \n'.magenta
                : 'Student disapproved in the semester \n'.red);
        }
    } else{
        let nextstudent = {};
        nextstudent.name = prompt('Enter student name: ');
        do {
            nextstudent.first = parseFloat(prompt(`\nEnter the first note ${'(0-10)'.blue}: `));
            if (isNaN(nextstudent.first) || nextstudent.first < 0 || nextstudent.first > 10){
                console.log('Invalid enter. Try again. \n'.red)
            }
        } while (isNaN(nextstudent.first) || nextstudent.first < 0 || nextstudent.first > 10);
        do {
            nextstudent.last = parseFloat(prompt(`\nEnter the last note ${'(0-10)'.blue}: \n`));
            if (isNaN(nextstudent.last) || nextstudent.last < 0 || nextstudent.last > 10){
                console.log('Invalid enter. Try again. \n'.red)
            }
        } while (isNaN(nextstudent.last) || nextstudent.last < 0 || nextstudent.last > 10);
        students.push(nextstudent);
        };
    repeat = prompt(`Press ${'0'.magenta} to try again or any other key to end: `);
    repeat = repeat === '0'; 
    console.clear();
}while(repeat);
