import { MarsLastPhotosApi } from "./api_urls.js";

function parseData() {
  MarsLastPhotosApi()
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      for (var i = 0; i <= data.latest_photos.length - 10; i++)
        loadData(data.latest_photos[i]);
      console.log(data.latest_photos.length)
    });
}
function loadData(photoObject) {
  let id = photoObject.id;
  let sol = photoObject.sol;
  let camera = photoObject.camera;
  let src = photoObject.img_src;
  let date = photoObject.earth_date;
  let rover = photoObject.rover;

  let pDatas = {
    id: id,
    sol: sol,
    camera: camera,
    src: src,
    date: date,
    rover: rover,
  };
  console.log(pDatas);
}

parseData();
