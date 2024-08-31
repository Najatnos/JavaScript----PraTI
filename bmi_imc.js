const prompt = require('prompt-sync')();
const colors = require('colors');
let index = 1;
let persondata = { weight: 0, height: 0};
let sex;
let bmi = 1;
let info; 
let weight;
let repeat = false;

do {
    console.log('\n');
    for (let data in persondata){
        do{
            info = prompt(`${index}º Enter an ${data.green}: `);
            info = Number(info);
            if (isNaN(info)) {console.log(`This is not an ${data.red}. \nTry again.`)}
        } while (isNaN(info));
        persondata[data] = info;
        index++;
    }
    bmi = (persondata.height > 0) ? persondata.weight / (persondata.height ** 2) : 0;
    console.log(`1. Male ${'♂'.green} \n2. Female ${'♀'.green}`)
    do {
        info = prompt(`3º Enter an ${'sex'.green} based by the numbers above: `);
        info = Number(info);
        if (isNaN(info) || info != 1 && info != 2) {console.log(`${info.red} is not an ${'answer'.red}. \nTry again.`)}
        else {sex = (info == 1)};
    } while (info != 1 && info != 2);
    if (sex){
        
            if (bmi < 20){weight = 'underweight'}
            else if (bmi >= 20 && bmi < 25){weight = 'healthy weight'}
            else if (bmi >= 25 && bmi < 30){weight = 'overweight'}
            else {weight = 'obese'}
        
    } else {
        
            if (bmi < 19){weight = 'underweight'}
            else if (bmi >= 19 && bmi < 24){weight = 'healthy weight'}
            else if (bmi >= 24 && bmi < 29){weight = 'overweight'}
            else {weight = 'obese'}
        
    }
    console.log(`Your BMI of ${bmi.magenta} falls within the zone of a ${weight.magenta} person.`);
    repeat = prompt(`Press ${'0'.magenta} to try again or any other enter to end: `);
    repeat = repeat == 0 ? true : false;
    console.clear();
        } while (repeat == true );
