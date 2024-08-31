const prompt = require('prompt-sync')();
const colors = require('colors');
let persondata = { weight: 0, height: 0 };
let sex;
let bmi;
let info; 
let weight;
let repeat = false;

do {
    console.log('\n');
    let index = 1;
    
    for (let data in persondata) {
        do {
            info = prompt(`${index}º Enter a ${data.green}: `);
            info = Number(info);
            if (isNaN(info)) {
                console.log(`This is not an ${data.red}. \nTry again.`);
            }
        } while (isNaN(info));
        persondata[data] = info;
        index++;
    }

    if (persondata.height > 10) {
        persondata.height = persondata.height / 100;
    }

    
    if (persondata.height > 0) {
        bmi = persondata.weight / (persondata.height ** 2);
        bmi = Math.round(bmi * 100) / 100;
    } else {
        bmi = NaN; 
    }

    
    

    
    bmi = (persondata.height > 0) ? persondata.weight / (persondata.height ** 2) : 0;
    console.log(`1 - Male ${'♂'.green} \n2 - Female ${'♀'.green}`)
    do {
        info = prompt(`3º Enter an ${'sex'.green} based by the numbers above: `);
        info = Number(info);
        if (isNaN(info) || info != 1 && info != 2) {console.log(`This is not an ${'answer'.red}. \nTry again.`)}
        else {sex = (info == 1)};
    } while (info != 1 && info != 2);
    
    
    if (!isNaN(bmi)) {
        if (sex) {
            weight = (bmi < 20) ? 'underweight' :
                     (bmi >= 20 && bmi < 25) ? 'healthy weight' :
                     (bmi >= 25 && bmi < 30) ? 'overweight' : 'obese';
        } else {
            weight = (bmi < 19) ? 'underweight' :
                     (bmi >= 19 && bmi < 24) ? 'healthy weight' :
                     (bmi >= 24 && bmi < 29) ? 'overweight' : 'obese';
        }
        console.log(`Your BMI of ${String(bmi).magenta} falls within the zone of a ${weight.magenta} person.`);
    } else {
        console.log(`Invalid BMI calculation. Please check the height and weight.`);
    }

    repeat = prompt(`Press ${'0'.magenta} to try again or any other key to end: `);
    repeat = repeat == 0 ? true : false;
    console.clear();
} while (repeat);
