import React from 'react'
import "./info.css";
export default function Info() {
  return (
    <div className="mars-current-weather">
        <h1 className="main-title">
            MARS HAVA DURUMU
        </h1>
        
        <div className="date">
            <h2 className="section-title section-title--date">SOL 3688</h2>
                <p className="date__day">21 Aralık</p>
        </div>
        <div className="temp">
            <h2 className="section-title">SICAKLIK</h2>
            <p className="reading">Yüksek: -15°C</p>
            <p className="reading">Düşük: -76°C</p>
        </div>
        <div className="pressure">
            <h2 className="section-title">Basınç</h2>
            <p className="reading">
                805 hPa</p>   
        </div>
        <div className="info">
            <p>Mars'da gönderilmiş ve hali hazırda Mars'ta bulunan rover araçları üzerinden NASA'nın aldığı verileri kullanan bir havadurumu sitesi.</p>
        </div>

       
    </div>
  );
}
