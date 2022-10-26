import fetch from "node-fetch";
import { urls } from "./api_urls.js"

function fetchRoverManifest(rover) {
    return fetch(urls(rover).rInfo)
        .then((response) => response.ok ? response.json() : console.log(response.status))
        .then((responseJSON) => {
            loadData(responseJSON.photo_manifest);
        });
}

function loadData(roverObject){
    let name = roverObject.name;
    let landing_date = roverObject.landing_date;
    let launch_date = roverObject.launch_date;
    let status = roverObject.status;
    let max_sol = roverObject.max_sol;
    let max_date = roverObject.max_date;
    let tphotos = roverObject.total_photos;
    let photo = roverObject.photos[0];

    
    let veriler ={
        name:name,
        launch_date: launch_date,
        landing_date: landing_date,
        status:status,
        max_sol:max_sol,
        max_date:max_date,
        total_photos:tphotos}
    console.log(veriler)

}



fetchRoverManifest("Opportunity")