import axios from "axios";
import fetch from "node-fetch";


const api_url = 'https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json';

/*function parseData(){
    return fetch(api_url).
    then(data=> {return data.json();}).then(data =>{
        for(var i = 5; i >= 0; i--){
            loadWeather(data.soles[i]);
        }
    })
}	

function loadWeather(solObject){
    console.log(solObject)
}

parseData()*/

async function handler(){
    let array = []
    return await axios.get(api_url);
}


console.log(handler())