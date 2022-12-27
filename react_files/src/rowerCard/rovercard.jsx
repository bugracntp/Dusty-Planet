import React from "react";
import "./rovercard.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

let link = "http://localhost:5000/rovers";

export default function Rovercard() {
  let [rovers, setrovers] = useState([]);
  async function getrovers() {
    let { data } = await axios.get(link);
    setrovers(data);
  }
  useEffect(() => {
    getrovers();
  }, []);
  return (
    <div className="rover">
      <div className="container">
        {rovers && rovers.map((item) => (
            <div className="card" style={{ backgroundImage: `url(${item.rover_img})` }}>
                <div className="content">
                  <h3>{item.name}</h3>
                  <p>Fırlatma tarihi : {item.launch_date} </p>
                  <p>İniş tarihi : {item.landing_date} </p>
                  <p>Durum : {item.status} </p>
                  <p>Son sol : {item.max_sol} </p>
                  <p>Bitiş Tarihi : {item.max_date} </p>
                  <p>Toplam Fotoğraf : {item.total_photos} </p>
                </div>
              </div>
          ))}
      </div>
    </div>
  );
}
