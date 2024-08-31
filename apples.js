const prompt = require('prompt-sync')();
const colors = require('colors');
let repeat = false;


do{
    let apple = 0.30
    let buy;
    console.log('\n')
    console.log(`An apple costs costs ${apple.toString().green}. \nBut will cost ${'0,25'.green} if you buy more than or equal to a dozen. \n`);
    do{
        buy = prompt('How much you wanna buy?');
        buy = Number(buy);
        if (isNaN(buy)) {
            console.log(`This is not an price. \nTry again.`);
        }
    }while (isNaN(buy));
    apple = buy >= 12 ? 0.25 : 0.30;
    buy = buy * apple;
    console.log(`Total value of purchasing apples: ${buy.toString().magenta}. \n`);
    repeat = prompt(`Press ${'0'.magenta} to try again or any other key to end: `);
    repeat = repeat == 0 ? true : false;
    console.clear();
}while (repeat);
