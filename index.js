//const jokesArray = require('./jokesArray');
//const $ = jokesArray.jokes;
const $ = jokes;
const len = $.length;

//generate random number between 0 and the length of jokes array
const randomNum = () => {
    num = Math.floor((Math.random() * len));
    return num;
};

const getJoke = () => {
    const x = randomNum();
    const joke = $[x];
    if (joke.length === 0 || joke[0].charAt(0) === 'R') {
        getJoke();
    } else {
        jokesString = joke.toString(); // change array to string
        jokesString = jokesString.replace(/(\d+)(. )/, ''); //replace the leading numbers and '. ' with a blank space
        //console.log(jokesString); 
        if (jokesString === undefined) {
            getJoke();
        } else {
            return jokesString;
        };
    };
};

const btn = document.getElementById('clickBtn');
const jokeDiv = document.getElementById('joke');

const addJoke = () => {
    jokeDiv.innerText = getJoke();
}

btn.addEventListener('click', addJoke);




