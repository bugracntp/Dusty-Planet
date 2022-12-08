import { MarsRoverApi } from "./api_urls.js";

function fetchRoverManifest(rover) {
  MarsRoverApi(rover)
    .then((response) =>
      response.ok ? response.json() : console.log(response.status)
    )
    .then((responseJSON) => {
      arr.push(loadData(responseJSON.photo_manifest));
    });
}

function loadData(roverObject) {
  let name = roverObject.name;
  let landing_date = roverObject.landing_date;
  let launch_date = roverObject.launch_date;
  let status = roverObject.status;
  let max_sol = roverObject.max_sol;
  let max_date = roverObject.max_date;
  let tphotos = roverObject.total_photos;

  const rDatas = {
    name: name,
    launch_date: launch_date,
    landing_date: landing_date,
    status: status,
    max_sol: max_sol.toString(),
    max_date: max_date,
    total_photos: tphotos.toString(),
  };
  console.log(rDatas);
}

fetchRoverManifest("Opportunity");
