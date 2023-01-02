import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./photo.css";
const PhotoDetailPage = () => {
  let { rovername } = useParams();
  let link = "http://localhost:5000/rovers";
  let [rover, setRover] = useState(null);
  let [sol, setSol] = useState("");
  let [solPhotos, setSolPhotos] = useState([]);
  async function getRover() {
    let { data } = await axios.get(link);
    setRover(data.find((item) => item.name == rovername));
  }
  async function getSolPhotos() {
    let { data } = await axios.get(
      `http://mars-photos.herokuapp.com/api/v1/rovers/${rovername}/photos?sol=${sol}`
    );
    console.log(data)
    setSolPhotos(data.photos);
  }
  useEffect(() => {
    getRover();
  }, []);
  if (rover) {
    return (
      <>
        <div>
          <h1 className="title">Mars fotoğrafları</h1>

          <div className="Rover-Name">
            <h1> {rover.name} </h1>
          </div>

          <div className="filtering">
              Sol
              <input
                className="Tarih"
                value={sol}
                onChange={(e) => setSol(e.target.value)}
              />
              <button
                className="button"
                onClick={() => getSolPhotos()}
              >
                Find Photos
              </button>
          </div>
          <div className="photoarea">
            {
                solPhotos && solPhotos.map((item)=>(
                    <div>
                    <img src={item.img_src} alt="" />
                    <div>sol {item.sol} tarihinde (Dünya Tarihi: {item.earth_date}) {item.camera.name} kamerasıyla çekildi</div>
                    </div>
                ))
            }
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};

export default PhotoDetailPage;
