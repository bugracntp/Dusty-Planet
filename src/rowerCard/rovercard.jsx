import React from 'react'
import"./rovercard.css"
import VanillaTilt from 'vanilla-tilt';



VanillaTilt.init(document.querySelectorAll(".card") , {
                max: 25,
                speed: 400,
                glare: true,
                "max-glare": 1,
            });
export default function Rovercard() {
  return ( 
    <div className="rover">
       <div className="container">
       <div className="card Curiosity">
            <div className="content">
                <h3>Curiosity</h3>
                <br/>
                    <p>Fırlatma tarihi : 2012-08-06 </p>
                    <p>İniş tarihi 2011-11-26 </p>
                    <p>Durum : Aktif </p>
                    <p>Son sol : 3678 </p>
                    <p>Bitiş Tarihi : Günümüz </p>
                    <p>Toplam Fotoğraf : 616210 </p>
            </div>
        </div>
        <div className="card Spirit">
            <div className="content">
                <h3>Spirit</h3>
                <br/>
                    <p>Fırlatma tarihi : 2004-01-04 </p>
                    <p>İniş tarihi : 2003-06-10 </p>
                    <p>Durum : Tamamlanmış </p>
                    <p>Son sol : 2208 </p>
                    <p>Bitiş Tarihi : 2010-03-21 </p>
                    <p>Toplam Fotoğraf : 124550 </p>
            </div>
        </div>
        <div className="card Opportunity">
            <div className="content">
                <h3>Opportunity</h3>
                <br/>
                    <p>Fırlatma tarihi : 2004-01-25 </p>
                    <p>İniş tarihi 2003-07-07 </p>
                    <p>Durum : Tamamlanmış </p>
                    <p>Son sol : 5111 </p>
                    <p>Bitiş Tarihi : 2018-06-11 </p>
                    <p>Toplam Fotoğraf : 198439 </p>
            </div>
        </div>
        <div className="card Perseverance">
            <div className="content">
            <h3>Perseverance</h3>
                <br/>
                    <p>Fırlatma tarihi : 2021-02-18</p>
                    <p>İniş tarihi 2020-07-30 </p>
                    <p>Durum : Aktif </p>
                    <p>Son sol : 643 </p>
                    <p>Bitiş Tarihi : Günümüz </p>
                    <p>Toplam Fotoğraf : 120147 </p>
            </div>
        </div>
    </div>
    </div>
  )
}
