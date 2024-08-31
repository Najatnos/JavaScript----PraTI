const prompt = require('prompt-sync')();
const colors = require('colors');
let repeat = false;

do{
    let sum = [];
    let fivenumber
    for (let i = 1; i <= 5; i++){
        do{
        fivenumber = prompt(`Enter a ${i.toString().green}º number: `);
        fivenumber = Number(fivenumber);
        if ((isNaN(fivenumber))){ console.log(`This is not an numeric value. \nTry again.`); };
        } while (isNaN(fivenumber));
        sum.push(fivenumber) ;
        };
    let sum5 = sum.reduce((acc, number) => acc + number, 0);
    console.log(`Sum one by one of its iteration a we find a total of: ${sum5.toString().magenta}.`);
    repeat = prompt(`Press ${'0'.magenta} to try again or any other key to end: `);
    repeat = repeat == 0 ? true : false;
    console.clear();
    } while(repeat);
