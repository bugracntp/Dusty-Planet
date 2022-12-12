const { MarsRoverApi } = require("../modules/api_urls");
const { insertIntoMongoDB } = require("../database/database");

function loadData(roverObject) {
  return {
    _id:roverObject.id,
    name: roverObject.name,
    launch_date: roverObject.landing_date,
    landing_date: roverObject.launch_date,
    status: roverObject.status,
    max_sol: roverObject.max_sol.toString(),
    max_date: roverObject.max_date,
    total_photos: roverObject.total_photos.toString(),
  };
}

let saveData = async () => {
 let {data} = await MarsRoverApi("Perseverance")
  insertIntoMongoDB(loadData(data.rover), "rovers")
};
saveData();

