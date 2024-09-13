const prompt = require('prompt-sync')();
const colors = require('colors');
let repeat = false;
let answer;

const promptanalyze = (message, validator) => {
    let enter;
    do {
        enter = prompt(message.green);
        if (!validator(enter)) console.log('Invalid input. Try again.\n'.red);
    } while (!validator(enter));
    return enter;
};

let transactions = [
    { type: 'entry', value: 200.0 }
];

do {
    do {
        console.log(`Do you want to ${'see the bank transactions'.blue} or ${'do a transaction'.green}?\n`);
        answer = prompt(`Enter ${'see'.blue} to ${'see transactions'.blue} or ${'do'.green} to ${'do a transaction'.green}: `).toLowerCase();
        if (answer !== 'see' && answer !== 'do') {
            console.log(`That's not a valid answer! Try again. \n`.red);
        }
    } while (answer !== 'see' && answer !== 'do');

    if (answer === 'see') {
        let alltransactions = 0;
        transactions.forEach((transaction, index) => {
            alltransactions += (transaction.type === 'entry') ? transaction.value : -transaction.value;
            console.log(transaction.type === 'entry' ? `${'Transaction:'.blue} an entry of ${transaction.value}$.\n`.magenta
            : `${'Transaction:'.blue} a redeem of ${transaction.value}$.\n`.magenta);
        });
        console.log(`\n${'Total transactions:'.blue} ${alltransactions}$.\n`.magenta);
    } else {
        let nexttransation = {};
        nexttransation.value = Number(promptanalyze('Enter the amount of cash you want to make an entry or a redeem: ', enter => !isNaN(enter) && Number(enter) > 0));
        console.log(`Enter ${'"entry"'.blue} to ${'enter that cash amount'.blue} or ${'"redeem"'.blue} to ${'redeem that cash amount'.blue}`);
        nexttransation.type = promptanalyze('Enter here the type of transaction: ', enter => isNaN(enter) && (enter === 'entry' || enter === 'redeem')).toLowerCase();
        transactions.push(nexttransation);
    }

    repeat = prompt(`Press ${'0'.magenta} to try again or any other key to end: `);
    repeat = repeat === '0'; 
    console.clear();
} while (repeat);
