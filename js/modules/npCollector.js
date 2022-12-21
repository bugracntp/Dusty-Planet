const { MarsNewPhotosApi } = require("../modules/api_urls");
const { insertIntoMongoDB } = require("../database/database");

async function parseData(rover, sol) {
  let { data } = await MarsNewPhotosApi(rover, sol);
  await Promise.all(
    await data.photos.map((item) => {
      insertIntoMongoDB(loadData(item), "new_photos");
    })
  );
}
function loadData(photoObject) {
  return {
    _id: photoObject.id,
    sol: photoObject.sol,
    camera: photoObject.camera,
    src: photoObject.img_src,
    date: photoObject.earth_datee,
  };
}

parseData("Opportunity", "1500");
