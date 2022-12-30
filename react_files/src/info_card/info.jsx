import React from "react";
import "./info.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

let link = "http://localhost:5000/weathers";

export default function Info() {
  let [currentWeather, setRovers] = useState([]);
  async function getRovers() {
    let { data } = await axios.get(link);
    setRovers(data[0]);
  }
  useEffect(() => {
    getRovers();
  }, []);
  return (
    <div className="mars-current-weather">
      <h1 className="main-title">MARS HAVA DURUMU</h1>
      {currentWeather && (
        <>
          <div className="date">
            <h2 className="section-title section-title--date">
              SOL {currentWeather.Sol}
            </h2>
            <p className="date__day">{currentWeather.date}</p>
          </div>
          <div className="temp">
            <h2 className="section-title">SICAKLIK</h2>
            <p className="reading">Yüksek: {currentWeather.highC}</p>
            <p className="reading">Düşük: {currentWeather.lowC}</p>
          </div>
          <div className="pressure">
            <h2 className="section-title">Basınç</h2>
            <p className="reading">{currentWeather.per} hPa</p>
          </div>
        </>
      )}

      <div className="info">
        <ul>
          <li>
            <h3>pazartesi</h3>
            <p className="hot">sıcaklık</p>
            <p>max :</p>
            <p>min :</p>
          </li>
          <li>
            <h3>salı</h3>
            <p className="hot">sıcaklık</p>
            <p>max : </p>
            <p>min :</p>
          </li>
          <li>
            <h3>çarşamba</h3>
            <p className="hot">sıcaklık </p>
            <p>max : 12</p>
            <p>min : 3</p>
          </li>
          <li>
            <h3>perşembe</h3>
            <p className="hot">sıcaklık</p>
            <p>max : </p>
            <p>min : </p>
          </li>
          <li>
            <h3>cuma</h3>
            <p className="hot">sıcaklık  </p>
            <p>max : </p>
            <p>min : </p>
          </li>
          <li>
            <h3>cumartesi</h3>
            <p className="hot">sıcaklık  </p>
            <p>max : </p>
            <p>min : </p>
          </li>
          <li>
            <h3>pazar</h3>
            <p className="hot">sıcaklık  </p>
            <p>max : </p>
            <p>min : </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
