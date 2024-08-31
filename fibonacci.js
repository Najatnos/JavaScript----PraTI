const prompt = require('prompt-sync')();
const colors = require('colors');
let repeat = false;

do {
    let yesorno;
    let fn1;
    let fn2;
    let next;
    do {
        yesorno = prompt(`Do you want to see the compilation of the ${'ten'.green} first numbers of the Fibonacci sequence? Enter ${'yes'.green} to see or ${'no'.green} to don't:  `).toUpperCase();
        
        if (yesorno !== 'YES' && yesorno !== 'NO') {
            console.log('This is not a right answer. Try again.'.red);
        }
        
    } while (yesorno !== 'YES' && yesorno !== 'NO');
    
    if (yesorno === 'YES') {
        fn1 = 0;
        fn2 = 1;
        console.log('Fibonacci Sequence:');
        for (let i = 1; i <= 10; i++) {
            console.log(fn1);
            next = fn1 + fn2;
            fn1 = fn2;
            fn2 = next;
        }
    }
   
    repeat = false;  

} while (repeat);
