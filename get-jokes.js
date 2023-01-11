//get list of jokes from url, save them as an array, then print to console

const PORT = 8000;
const axios = require('axios');
const cheerio = require('cheerio');
const { response } = require('express');
const express = require('express');
const util = require('util');

const app = express();

const url = 'https://parade.com/944054/parade/knock-knock-jokes/';

const getJoke = () => {
    axios(url)
        .then(response => {
            const html = response.data;
            const $ = cheerio.load(html);
            let jokes = [];
            const fileName = "jokesArray.js";
            
            for (let num = 11; num <= 218; num++) { 
            $(`div.m-detail--body > p:nth-child(${num})`, html).each(function() {
                const bodyText = $(this).text()
                jokes.push(bodyText)
            })
            };
            
            console.log(util.inspect(jokes, { maxArrayLength: null }))
        })
        .catch(err => console.log(err))
}

getJoke();



app.listen(PORT); 