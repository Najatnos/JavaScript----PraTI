const prompt = require('prompt-sync')();
const colors = require('colors');
let repeat = false;
let answer;
let stocks = [
    {product: 'Ball', quantity: 34, minimum: 10}
]
do{
do{
    console.log(`Do you want to ${'see the stocks in basement'.blue} or ${'make an stock'.green}?\n`)
    answer = prompt(`Enter ${'see'.blue} to ${'see stocks'.blue} or ${'make'.green} to ${'make stocks'.green}: `).toLowerCase();
    console.log(answer === 'see' ? `Below is the stocks: \n`
        : answer === 'make' ? `Below you'll make: \n`
        : `That's not a valid answer! Try again. \n`.red);
}while(answer !== 'see' && answer !== 'make');
if (answer === 'see') {
    let stockamount = [];
    stocks.forEach((stock, index) => {
        if (stock.quantity < stock.minimum){
            do{
                stock.quantity += stock.quantity;
            }while(stock.quantity < stock.minimum)
        }
        console.log(`${index + 1}º basement: a stock of ${stock.quantity} ${stock.product}.`.blue);
    })
} else{
    let nextstock = {};
    do {
        nextstock.product = prompt(`Enter the product name: `.green).toLowerCase();
        if (!isNaN(nextstock.product)){
            console.log('Invalid enter. Try again. \n'.red);
        }
    } while (!isNaN(nextstock.product));
    do {
        nextstock.quantity = Number(prompt(`Enter the quantity amount: `.green));
        if (isNaN(nextstock.quantity) || nextstock.quantity <= 0){
            console.log('Invalid enter. Try again. \n'.red);
        }
    } while (isNaN(nextstock.quantity) || nextstock.quantity <= 0);
    do {
        nextstock.minimum = Number(prompt(`Enter the minimum amount: `.green));
        if (isNaN(nextstock.minimum)){
            console.log('Invalid enter. Try again. \n'.red);
        }
    } while (isNaN(nextstock.minimum));
    stocks.push(nextstock);
}

repeat = prompt(`Press ${'0'.magenta} to try again or any other key to end: `);
repeat = repeat === '0'; 
console.clear();
}while(repeat);
