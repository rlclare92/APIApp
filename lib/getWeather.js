const request= require('request');
const fetch =  require('node-fetch');
require('dotenv').config();

const {
    promisify 
} = require('util');

const promisifedRequest = promisify(request);
/**
 * some decription here 
 * @param {String} city
 * @param {String} countryCode  ISO 1311 country code
 */

const getWeather =  async(city, countryCode) => {
   url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&units=metric&appid=${process.env.APPID}`;
   let data = await fetch(url);
   return await data.json();
}

getWeather();

const getHarryPotter = async () => {
    let data  = await promisifedRequest({
        uri: `https://www.potterapi.com/v1/sortingHat`,
        json: true
    })
    return data.body
}

getHarryPotter()

const getChuckNorris = async () => {
    let data = await promisifedRequest({
        url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
        headers: {
          'x-rapidapi-host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com',
          'x-rapidapi-key': '92c334fb2dmshf459fb11480500ap1fa0bcjsn0f9d61941fe1',
          accept: 'application/json'
        }
    })
    return data.body
}

getChuckNorris()


const getCatFacts = async () => {
    let data = await promisifedRequest({
       url: `https://cat-fact.herokuapp.com/facts`,
       json: true
    })
    return data.body
}
getCatFacts()

module.exports = {getWeather, getHarryPotter, getChuckNorris, getCatFacts}
