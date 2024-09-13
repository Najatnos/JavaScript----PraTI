const prompt = require('prompt-sync')();
const colors = require('colors');

const promptanalyze = (message, validator) => {
    let enter;
    do {
        enter = prompt(message.green);
        if (!validator(enter)) console.log('Invalid input. Try again.\n'.red);
    } while (!validator(enter));
    return enter;
};

let productsvalue = { mayonnaise: 12.0, noodle: 10.0, potato: 5.0 };
let newproductsvalue = {};
let repeat = false;

do {
    let answer;

    do {
        console.log(`Do you want to ${'make a new list of products by price'.blue} or ${'add a product to the custom list'.green}?\n`);
        answer = prompt(`Enter ${'make'.blue} to ${'make list'.blue} or ${'add'.green} to ${'add a product'.green}: `).toLowerCase();
        if (answer !== 'make' && answer !== 'add') {
            console.log(`That's not a valid answer! Try again.\n`.red);
        }
    } while (answer !== 'make' && answer !== 'add');

    if (answer === 'make') {
        let seethat = Number(promptanalyze("Enter a price threshold: ", enter => !isNaN(enter) && Number(enter) >= 0));

        
        newproductsvalue = {};
        let found = false;

        for (const product in productsvalue) {
            if (productsvalue[product] > seethat) {
                newproductsvalue[product] = productsvalue[product];
                found = true;
            }
        }

        if (found) {
            console.log(`\nHere is the new list:`.blue);
            for (const product in newproductsvalue) {
                console.log(`${product.blue}: ${newproductsvalue[product].toString().magenta}.`);
            }
        } else {
            console.log('No products found with a price above your input.'.red);
        }
    } else {
        let productname = promptanalyze('Enter product name: ', enter => isNaN(enter)).toLowerCase();
        let productprice = Number(promptanalyze('Enter product price: ', enter => !isNaN(enter) && Number(enter) >= 0));

        
        if (productsvalue.hasOwnProperty(productname)) {
            productsvalue[productname] = productprice;
            console.log(`${productname.blue} was updated with the new price: ${productprice.toString().magenta}.`);
        } else {
            productsvalue[productname] = productprice;
            console.log(`${productname.blue} was added with the price: ${productprice.toString().magenta}.`);
        }
    }

    
    repeat = prompt(`Press ${'0'.magenta} to try again or any other key to end: `) === '0'; 
    console.clear();
} while (repeat);
