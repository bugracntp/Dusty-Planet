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
        <p>
          Mars'da gönderilmiş ve hali hazırda Mars'ta bulunan rover araçları
          üzerinden NASA'nın aldığı verileri kullanan bir havadurumu sitesi.
        </p>
      </div>
    </div>
  );
}
