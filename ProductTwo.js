const prompt = require('prompt-sync')();
const colors = require('colors');
let repeat = false;
let answer;
let products = [
    {name: 'bean', price: 7.2, discount: 10}
];

do {
    do {
        console.log(`Choose between ${'see products and their discount'.blue} or ${'add products and their discount'.green} in the market list.\n`);
        answer = prompt(`Enter ${'see'.blue} to ${'see discount'.blue} or ${'add'.green} to ${'add discount'.green}: `).toLowerCase();
        console.log(answer === 'see' ? `Below is the discount list: \n`
            : answer === 'add' ? `Below you'll add: \n`
            : `That's not a valid answer! Try again. \n`);
    } while (answer !== 'see' && answer !== 'add');

    if (answer === 'see') {
        products.forEach((product, index) => {
            let appdiscount = (product.price * product.discount) / 100; 
            let lastprice = product.price - appdiscount;
            console.log(`${index + 1}º ${product.name} - ${product.price.toString().blue} ${'with a discount of: '.blue} ${product.discount}${'%'.blue}.`);
            console.log(`Now ${product.name} costs ${lastprice.toFixed(2)}.`.magenta); // Usando toFixed(2) para 2 casas decimais
        });
    } else {
        let nextproduct = {};
        nextproduct.name = prompt('Enter product name: ');

        do {
            console.log('\n');
            nextproduct.price = parseFloat(prompt(`Enter the ${'price'.blue}: `));
            if (isNaN(nextproduct.price) || nextproduct.price === 0) {
                console.log('Invalid enter. Try again. \n'.red);
            }
        } while (isNaN(nextproduct.price) || nextproduct.price === 0);

        do {
            console.log('\n');
            nextproduct.discount = Number(prompt(`Enter the ${'discount percentage'.blue}: `));
            if (isNaN(nextproduct.discount) || nextproduct.discount === 0) {
                console.log('Invalid enter. Try again. \n'.red);
            }
        } while (isNaN(nextproduct.discount) || nextproduct.discount === 0);

        products.push(nextproduct);
        console.log(`To check the discount value in the product price, select ${'see'.green} in the next iteration. \n`);
    }

    repeat = prompt(`Press ${'0'.magenta} to try again or any other key to end: `);
    repeat = repeat === '0';
    console.clear();
} while (repeat);
