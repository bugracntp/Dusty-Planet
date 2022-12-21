import React from 'react'
import "./slider.css"

export default function Slider() {
  return (
    <div className='slider'>
     <br /><br /> <h1>Alınan Fotoğraflar</h1>
    <div id="slider1" className="csslider">
        <input type="radio" name="slides" id="slides_1" checked />
        <input type="radio" name="slides" id="slides_2"  />
        <input type="radio" name="slides" id="slides_3" />
        <input type="radio" name="slides" id="slides_4" />
        <ul>
            <li>
              
                <img src="http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00999/opgs/edr/fcam/FRB_486178915EDR_F0481570FHAZ00206M_.JPG" />
                
            </li>
            <li>
                <img src="http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00045/opgs/edr/fcam/FRA_401490757EDR_F0042092FHAZ00306M_.JPG" />
                
            </li>
            <li>
                <img src="http://mars.jpl.nasa.gov/msl-raw-images/proj/msl/redops/ods/surface/sol/00321/opgs/edr/fcam/FRB_425982839EDR_F0060804FHAZ00327M_.JPG" />
               
            </li>
            <li >
                <img src=""></img>

            </li>
        </ul>
        
        <div className="arrows">
            <label for="slides_1"></label>
            <label for="slides_2"></label>
            <label for="slides_3"></label>
            <label for="slides_4"></label>
        </div>
        <div className="navigation">
            <div>
                <label for="slides_1"></label>
                <label for="slides_2"></label>
                <label for="slides_3"></label>
                <label for="slides_4"></label>
            </div>
        </div>
    </div>
    </div>
  )
}
