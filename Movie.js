const prompt = require('prompt-sync')();
const colors = require('colors');
let repeat = false;
let answer;
let movies = [
    {title: 'The Lord Of The Rings: The Fellowship of the Ring', director: 'Peter Jackson', debut_year: 2001}
]
do{
    do{
        console.log(`Do you want to ${'see the movies in catalogue'.blue} or ${'add a movie in the catalogue'.green}?\n`)
        answer = prompt(`Enter ${'see'.blue} to ${'see movies'.blue} or ${'add'.green} to ${'add movies'.green}: `).toLowerCase();
        console.log(answer === 'see' ? `Below is the catalogue: \n`
            : answer === 'add' ? `Below you'll add: \n`
            : `That's not a valid answer! Try again. \n`);
    }while(answer !== 'see' && answer !== 'add');
    if (answer === 'see') {
        let movietitles = movies.map(movie => movie.title);
        movietitles.forEach((title, index) => {
            console.log(`Movie ${index + 1}${'º'.blue}: "${title.magenta}"`);
        });
    } else{
        let nextmovie = {};
        Object.keys(movies[0]).forEach(key => {
            nextmovie[key] = prompt(`Enter ${key.blue}: `);
        });
        movies.push(nextmovie); 
    }
    
    repeat = prompt(`Press ${'0'.magenta} to try again or any other key to end: `);
    repeat = repeat === '0'; 
    console.clear();
}while(repeat);
