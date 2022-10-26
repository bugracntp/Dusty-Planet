import fetch from "node-fetch";

const MARS_PHOTOS_API_URL = "https://mars-photos.herokuapp.com/api/v1/";

export const MarsWeatherApi = function () {
  return fetch(
    `https://mars.nasa.gov/rss/api/?feed=weather&category=msl&feedtype=json`
  );
};
export const MarsRoverApi = (endpoint) =>
  fetch(`${MARS_PHOTOS_API_URL}manifests/${endpoint}`);
export const MarsLastPhotosApi = function () {
  return fetch(`${MARS_PHOTOS_API_URL}rovers/curiosity/latest_photos`);
};
export const MarsNewPhotosApi = (endpoint1, endpoint2) =>
  fetch(`${MARS_PHOTOS_API_URL}rovers/${endpoint1}/photos?sol=${endpoint2}`);
