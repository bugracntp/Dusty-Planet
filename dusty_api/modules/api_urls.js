const axios = require('axios');



const MARS_PHOTOS_API_URL = "https://mars-photos.herokuapp.com/api/v1/";

const MarsWeatherApi = async function() {
  return await axios.get(
    `https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json`
  );
};
const MarsRoverApi = async (endpoint) => {
  return await axios.get(`${MARS_PHOTOS_API_URL}rovers/${endpoint}`);
};
const MarsLastPhotosApi = async function() {
  return await axios.get(`${MARS_PHOTOS_API_URL}rovers/curiosity/latest_photos`);
};


module.exports = {MarsNewPhotosApi,MarsRoverApi,MarsLastPhotosApi,MarsWeatherApi};