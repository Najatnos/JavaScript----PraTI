const prompt = require('prompt-sync')();
const colors = require('colors');
let repeat = false;
let answer;
let sales = [
    {product: 'Socks', stock: 34, value: 10}
]
do{
    do{
        console.log(`Do you want to ${'see the total amount of sales'.blue} or ${'add a sale'.green}?\n`)
        answer = prompt(`Enter ${'see'.blue} to ${'see sales'.blue} or ${'add'.green} to ${'add sales'.green}: `).toLowerCase();
        console.log(answer === 'see' ? `Below is the sales: \n`
            : answer === 'add' ? `Below you'll add: \n`
            : `That's not a valid answer! Try again. \n`);
    }while(answer !== 'see' && answer !== 'add');
    if (answer === 'see') {
        let eachsale = [];
        sales.forEach((sale, index) => {
            let thatsale = sale.stock * sale.value;
            eachsale.push(thatsale);
            console.log(`${index + 1}º : ${sale.product} had an amount of ${thatsale.toString().magenta} sales in total value.`);
        })
        let allsale = eachsale.reduce((acc, thissale) => acc + thissale, 0);
        console.log(`\nThe total amount of sales in value is: ${allsale.toString()}`.magenta);
    } else{
        let nextsale = {};
        nextsale.product = prompt('Enter product name: '.green);
        do {
            nextsale.stock = parseFloat(prompt(`Enter the stock amount: `.green));
            if (isNaN(nextsale.stock) || nextsale.stock <= 0){
                console.log('Invalid enter. Try again. \n'.red);
            }
        } while (isNaN(nextsale.stock) || nextsale.stock <= 0);
        do {
            nextsale.value = parseFloat(prompt(`Enter the value amount: `.green));
            if (isNaN(nextsale.value) || nextsale.value <= 0){
                console.log('Invalid enter. Try again. \n'.red);
            }
        } while (isNaN(nextsale.value) || nextsale.value <= 0);
        sales.push(nextsale);
    }
    
    repeat = prompt(`Press ${'0'.magenta} to try again or any other key to end: `);
    repeat = repeat === '0'; 
    console.clear();
}while(repeat);
