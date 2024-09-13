const prompt = require('prompt-sync')();
const colors = require('colors');
let repeat = false;
let answer;
let clientlist = ['jason']
let orders = [
    {product: 'Socks', client: 'jason', quantity: 10}
]
let productsperclient = [{products: 0, clients: 0}]
do{
    do{
        console.log(`Do you want to ${'see the orders in pendency'.blue} or ${'make an order'.green}?\n`)
        answer = prompt(`Enter ${'see'.blue} to ${'see orders'.blue} or ${'make'.green} to ${'make orders'.green}: `).toLowerCase();
        console.log(answer === 'see' ? `Below is the orders: \n`
            : answer === 'make' ? `Below you'll make: \n`
            : `That's not a valid answer! Try again. \n`.red);
    }while(answer !== 'see' && answer !== 'make');
    if (answer === 'see') {
        let orderamount = [];
        orders.forEach((order, index) => {
            console.log(`${index + 1}º : ${order.client} ordered a pack with ${order.quantity} ${order.product}.`);
            orderamount.push(order.quantity);
        })
        let totalorderamount = orderamount.reduce((acc, thisorder) => acc + thisorder, 0);
        let clientlistamount = clientlist.length;
        productsperclient.forEach(ppc => {
            ppc.clients = clientlistamount;
            ppc.products = totalorderamount;
            console.log(`\nWe have ${ppc.products} products ordered by ${ppc.clients} clients.`.magenta);
        })
    } else{
        let nextorder = {};
        nextorder.client = prompt('Enter client name: '.green).toLowerCase();
        if (clientlist.includes(nextorder.client)){
            do{
                console.log(`Have you placed an order recently?`)
                answer = prompt(`Press ${'yes'.blue} to affirm or ${'no'.green} to deny: `).toLowerCase(); 
                if (answer !== 'yes' && answer !== 'no'){console.log(`That's not a valid answer! Try again. \n`.red)}
            }while(answer !== 'yes' && answer !== 'no')
            if (answer === 'no'){clientlist.push(nextorder.client)}} else {clientlist.push(nextorder.client)}
        do {
            nextorder.product = prompt(`Enter the product name: `.green).toLowerCase();
            if (!isNaN(nextorder.product)){
                console.log('Invalid enter. Try again. \n'.red);
            }
        } while (!isNaN(nextorder.product));
        do {
            nextorder.quantity = Number(prompt(`Enter the quantity amount: `.green));
            if (isNaN(nextorder.quantity) || nextorder.quantity <= 0){
                console.log('Invalid enter. Try again. \n'.red);
            }
        } while (isNaN(nextorder.quantity) || nextorder.quantity <= 0);
        orders.push(nextorder);
    }
    
    repeat = prompt(`Press ${'0'.magenta} to try again or any other key to end: `);
    repeat = repeat === '0'; 
    console.clear();
}while(repeat);
