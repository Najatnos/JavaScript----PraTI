const prompt = require('prompt-sync')();
const colors = require('colors');
let repeat = false;
let answer;
const promptanalyze = (message, validator) => {
    let enter;
    do {
        enter = prompt(message.green);
        if (!validator(enter)) console.log('Invalid enter. Try again.\n'.red);
    } while (!validator(enter));
    return enter;
};
let kart = {
    itens : [
        {name : 'soap', quantity : 3, unnitaryprice : 5.0}
    ]
}
do{
do{
    console.log(`Do you want to ${'see the shopping'.blue} or ${'make an shopping'.green}?\n`)
    answer = prompt(`Enter ${'see'.blue} to ${'see shopping'.blue} or ${'make'.green} to ${'make shopping'.green}: `).toLowerCase();
    console.log(answer === 'see' ? `Below is the shopping: \n`
        : answer === 'make' ? `Below you'll make: \n`
        : `That's not a valid answer! Try again. \n`.red);
}while(answer !== 'see' && answer !== 'make');
if (answer === 'see') {
    let shopcost = [];
    kart.itens.forEach((iten, index) => {
        let cost = iten.quantity*iten.unnitaryprice;
        console.log(`Shopping nº${index + 1}:  ${iten.quantity} unit(s) of ${iten.name}.`.blue);
        console.log(`Cost: ${cost}$ \n`.magenta);
        shopcost.push(cost)
    })
    let totalshopcost = shopcost.reduce((acc, totalcost) => acc + totalcost, 0);
    console.log(`\nYour shopping costed ${totalshopcost}$.`.magenta);
} else{
    let nextshop = {
        name: promptanalyze('Enter the product name: ', enter => isNaN(enter)).toLowerCase(),
        quantity: Number(promptanalyze('Enter the quantity amount: ', enter => !isNaN(enter) && enter > 0)),
        unnitaryprice: Number(promptanalyze('Enter the unitary price: ', enter => !isNaN(enter) && enter > 0))
    };
    kart.itens.push(nextshop);
}

repeat = prompt(`Press ${'0'.magenta} to try again or any other key to end: `);
repeat = repeat === '0'; 
console.clear();
}while(repeat);
