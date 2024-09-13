const prompt = require('prompt-sync')();
const colors = require('colors');
let repeat = false;
let answer;
const book = {
    title: '',
    author: '',
    debut: '',
    genre: ''
};

do{
    if('publisher' in book) { book.publisher = '';}
    do{
        console.log('Would you like to see the latest book to be registered or register a new one?\n')
        answer = prompt(`Enter ${'see'.blue} to ${'see book'.blue} or ${'add'.green} to ${'add book'.green}: `).toLowerCase();
        console.log(answer === 'see' ? `Below is the last registered book:`
            : answer === 'add' ? `Below you'll add:`
            : `That's not a valid answer! Try again. \n`);
    }while(answer !== 'see' && answer !== 'add');
    if (answer === 'see') {
        for (const i in book) {
            if (book.hasOwnProperty(i)) {
                console.log(`${i} : ${book[i]}`);
            }
        }
    } else {
        for (const i in book) {
            if (book.hasOwnProperty(i)) {
                book[i] = prompt(`Enter ${i.blue}: `).toLowerCase();
            }
        }
    }

    repeat = prompt(`Press ${'0'.magenta} to try again or any other key to end: `);
    repeat = repeat === '0'; // Corrigido a comparação com string '0'
    console.clear();
}while(repeat)
