import React from 'react'
import"./rovercard.css"
import VanillaTilt from 'vanilla-tilt';


const element= document.querySelectorAll(".card") 
VanillaTilt.init(element, {
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
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia enim maxime soluta qui sint quam!
                    Iusto, blanditiis, error provident, neque ut voluptates
                    numquam adipisci enim atque possimus ea in explicabo!
                </p>


            </div>
        </div>
        <div className="card Spirit">
            <div className="content">
                <h3>Spirit</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia enim maxime soluta qui sint quam!
                    Iusto, blanditiis, error provident, neque ut voluptates
                    numquam adipisci enim atque possimus ea in explicabo!
                </p>


            </div>
        </div>
        <div className="card Opportunity">
            <div className="content">
                <h3>Opportunity</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia enim maxime soluta qui sint quam!
                    Iusto, blanditiis, error provident, neque ut voluptates
                    numquam adipisci enim atque possimus ea in explicabo!
                </p>


            </div>
        </div>
        <div className="card Perseverance">
            <div className="content">

                <h3>Perseverance</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia enim maxime soluta qui sint quam!
                    Iusto, blanditiis, error provident, neque ut voluptates
                    numquam adipisci enim atque possimus ea in explicabo!
                </p>


            </div>
        </div>
    </div>
    </div>
  )
}
