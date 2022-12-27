import React from "react";
import "./slider.css";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

let link = "http://localhost:5000/photos";

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
        {photos && photos.map((item) => <img src={item.src} alt="" />)}
      </div>
    </div>
  );
}
