const goodbye = 'Goodbye'.blue;
const readline = require('readline');
const prompt = require('prompt-sync')();
const colors = require('colors');
let coin;
let playerscore = 0;
let opponentscore = 0;
let choice;
let opponentchoice;  
let headsortails = ['Heads', 'Tails'];
let repeat = false;

do {
    console.log(`${'𝓗𝓮𝓪𝓭𝓼'.green} 𝓸𝓻 ${'𝓣𝓪𝓲𝓵𝓼'.green} 🟡`);
    console.log('\n1. Heads 🗿 \n2. Tails 🜲 \n3. Exit 🚪');
    while (isNaN(choice) || choice > 3 || choice <= 0 || choice  % 1 !== 0) {  
        choice = prompt(`Enter your ${'choice'.green} by the number and compete with ${'me'.green}: `);
    } 
    choice = Number(choice);
    switch (choice){
        case 3: console.log(goodbye); process.exit();
        default: 
            choice = headsortails[choice - 1];  
            opponentchoice = headsortails.find(wing => wing !== choice);
            console.log(`\nYou: ${choice.green}. \nMe: ${opponentchoice.green}.`); 
            let coinflip = Math.round(Math.random());
            coin = headsortails[coinflip];
            console.log(`Coin flipped: ${coin.magenta} \n`);  
            choice === coin ? playerscore++ : opponentscore++; 
            console.log(`You: ${playerscore} \nMe: ${opponentscore}`);
    }
    
    repeat = prompt(`Press ${'0'.magenta} to try again or any other enter to end: `);
    repeat = repeat == 0 ? true : false;
    console.clear();
    
} while (repeat == true );
