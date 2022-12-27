import React from "react";
import "./slider.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

let link = "http://localhost:5000/weathers";

export default function Slider() {
  let [photos, setphotos] = useState([]);
  async function getphotos() {
    let { data } = await axios.get(link);
    setphotos(data);
  }
  useEffect(() => {
    getphotos();
  }, []);
  return (
    <div class="Cerceve">
      <div class="galeri">
        <img
          src="http://mars.nasa.gov/mer/gallery/all/2/f/333/2F155927711EFF9946P1110R0M1-BR.JPG"
          alt=""
        />
        <img
          src="http://mars.nasa.gov/mer/gallery/all/2/f/190/2F143238746EFF7208P1203R0M1-BR.JPG"
          alt=""
        />
        <img
          src="http://mars.nasa.gov/mer/gallery/all/2/f/010/2F127262650EFF0214P1003L0M1-BR.JPG"
          alt=""
        />
        <img
          src="http://mars.nasa.gov/mer/gallery/all/1/r/012/1R129255699EFF0242P1211R0M1-BR.JPG"
          alt=""
        />
      </div>
    </div>
  );
}