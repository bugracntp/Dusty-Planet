import React from 'react'
import "./info.css";
export default function Info() {
  return (
    <div className="mars-current-weather">
        <h1 className="main-title">
            MARS HAVA DURUMU
        </h1>
        
        <div className="date">
            <h2 className="section-title section-title--date">SOL 377</h2>
                <p className="date__day">07 Kasım</p>
        </div>
        <div className="temp">
            <h2 className="section-title">SICAKLIK</h2>
            <p className="reading">Yüksek: -20°C</p>
            <p className="reading">Düşük: -120°C</p>
        </div>
        <div className="pressure">
            <h2 className="section-title">Basınç</h2>
            <p className="reading">
                1018 hPa</p>
                
        </div>
        <div className="info">
            <p>Mars'da gönderilmiş ve hali hazırda Mars'ta bulunan rover araçları üzerinden NASA'nın aldığı verileri kullanan bir havadurumu sitesi.</p>
        </div>

       
    </div>
  );
}
