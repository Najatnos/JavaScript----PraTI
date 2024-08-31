const prompt = require('prompt-sync')();
const colors = require('colors');
let repeat = false;

do{
    let num;
    let time;
    do{
        num = prompt(`Enter a ${'number'.green} to multiply to ${'ten'.green}: `);
        num = Number(num);
        if (isNaN(num)){ console.log(`This is not an numeric value. \nTry again.`); };
    } while(isNaN(num));
    for (let i = 1; i <= 10; i++){
        console.log(`${num.toString()} ${'x'.green} ${i.toString()} : `, num * i);
    } do{
        time = prompt(`If you want to add a bigger table, enter the total number of ${'times'.green} you intend to multiply ${'OR'.magenta} enter ${'0'.magenta} to don't: `);
        if (isNaN(time)){ console.log(`This is not an numeric value. \nTry again.`); };
    } while (isNaN(time));
    if (time == 0){ break;} else {
        for (i = 0; i <= time; i++){
            console.log(`${num.toString()} ${'x'.green} ${i.toString()} `, num * i);
    }} repeat = prompt(`Press ${'0'.magenta} to try again or any other key to end: `);
    repeat = repeat == 0 ? true : false;
    console.clear();
} while(repeat)
