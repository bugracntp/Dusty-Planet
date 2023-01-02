import React from "react";
import "./info.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

let link = "http://localhost:5000/weathers";

export default function Info() {
  let [currentWeather, setcurrentWeather] = useState([]);

  async function getcurrentWeather() {
    let { data } = await axios.get(link);
    setcurrentWeather(data);
  }

  useEffect(() => {
    getcurrentWeather();
  }, []);
  return (
    <div className="mars-current-weather">
      <h1 className="main-title">MARS HAVA DURUMU</h1>
      {currentWeather &&
        currentWeather.slice(0, 7).map((item,index) => {
          if(index==0){
          return (
            <>
              <div className="date">
                <h2 className="section-title section-title--date">
                  SOL {item.Sol}
                </h2>
                <p className="date__day">{item.date}</p>
              </div>
              <div className="temp">
                <h2 className="section-title">SICAKLIK</h2>
                <p className="reading">Yüksek: {item.highC}</p>
                <p className="reading">Düşük: {item.lowC}</p>
              </div>
              <div className="pressure">
                <h2 className="section-title">Basınç</h2>
                <p className="reading">{item.per} hPa</p>
              </div>

             
            </>
          );
          }else{
           return(
         
           <ul >
            <li>
              <h2 className="baslık">{item.Sol}</h2>
              <p className="hot">Sıcaklık</p>
              <p>max : {item.highC}</p>
              <p>min : {item.lowC}</p>
            </li>
          </ul>
         
           )
          }
        })}

      <div className="info"></div>
    </div>
  );
}
