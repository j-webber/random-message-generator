const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const { response } = require('express');
const express = require('express');

const app = express();

const url = 'https://parade.com/944054/parade/knock-knock-jokes/';


//generate random number between 11 and 188 - these are the locations of the p's containing knock knock jokes
const randomNum = () => {
    num = Math.floor((Math.random() * 178) + 11);
    return num;
};

const getJoke = () => {
    axios(url)
        .then(response => {
            const html = response.data;
            const $ = cheerio.load(html);
            const jokes = [];
            const num = randomNum();
            let jokesString;

            $(`div.m-detail--body > p:nth-child(${num})`, html).each(function() {
                const bodyText = $(this).text()
                jokes.push(bodyText)
            })
            //check if array is empty or starts w/ R, if so then restart function
            if (jokes.length === 0 || jokes[0].charAt(0) === 'R') {
                getJoke();
            } else {
                jokesString = jokes.toString(); // change array to string
                jokesString = jokesString.replace(/(\d+)(. )/, ''); //replace the leading numbers and '. ' with a blank space
                console.log(jokesString); 
            }
            
        })
        .catch(err => console.log(err))
}

getJoke();



app.listen(PORT); 


//document.querySelector("#main-content > section.m-component-detail > article > div > div > section > div.l-grid--content-body > div.m-detail--body > p:nth-child(106)")
//p:nth-child(11)
//p:nth-child(188)
//need to generate a random number from 11-188 to select a knock knock joke.
//once selected we need to remove '90.' and '\n'
//then we need to print string


//this program currently visits a website and grabs a random knock knock joke. 
//getJoke() returns a joke in array form. 
//you will need to figure out how to print a string with the number and '\n' removed.

