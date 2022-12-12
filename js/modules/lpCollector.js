const { MarsLastPhotosApi } = require("../modules/api_urls");
const { insertIntoMongoDB } = require("../database/database");

async function parseData() {
  let { data } = await MarsLastPhotosApi();
  await Promise.all(
    await data.latest_photos.map((item) => {
      insertIntoMongoDB(loadData(item), "photos");
    })
  );
}
function loadData(photoObject) {
  return {
    _id: photoObject.id,
    sol: photoObject.sol,
    camera: photoObject.camera,
    src: photoObject.img_src,
    date: photoObject.earth_date,
    rover: photoObject.rover,
  };
}

parseData();
