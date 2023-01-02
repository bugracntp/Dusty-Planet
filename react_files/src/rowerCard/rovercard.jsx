import React from "react";
import "./rovercard.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

let link = "http://localhost:5000/rovers";

export default function Rovercard() {
  let [rovers, setrovers] = useState([]);
  async function getrovers() {
    let { data } = await axios.get(link);
    console.log(data)
    setrovers(data);
  }
  useEffect(() => {
    getrovers();
  }, []);
  return (
    <div className="rover">
      <div className="container">
        {rovers &&
          rovers.map((item) => (
            <Link
              to={"/photo/"+item.name}
              className="card"
              style={{ backgroundImage: `url(${item.rover_img})` }}
            >
              <div className="content">
                <h3>{item.name}</h3>
                <p>Fırlatma tarihi : {item.launch_date} </p>
                <p>İniş tarihi : {item.landing_date} </p>
                <p>Durum : {item.status} </p>
                <p>Son sol : {item.max_sol} </p>
                <p>Bitiş Tarihi : {item.max_date} </p>
                <p>Toplam Fotoğraf : {item.total_photos} </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
}
