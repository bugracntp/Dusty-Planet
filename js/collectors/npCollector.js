import fetch from "node-fetch";
import { urls } from "./api_urls.js"

function parseData(rover, sol) {
    return fetch(urls(rover, sol).nPhoto).
    then(data=> {return data.json();}).then(data =>{
        for(var i = 0; i <= data.photos.length-1; i++)
            loadData(data.photos[i])
    })
}
function loadData(photoObject){
    let id = photoObject.id
    let sol = photoObject.sol
    let camera = photoObject.camera
    let src = photoObject.img_src
    let date = photoObject.earth_date;

    let pDatas = {id:id,
               sol:sol,
               camera:camera,
               src:src,
               date:date}
    console.log(pDatas)
}

parseData("Opportunity", "1500")