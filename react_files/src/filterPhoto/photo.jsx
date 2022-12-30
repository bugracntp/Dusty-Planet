import React from 'react'

export default function photo() {
  return (
    <div>
           <h1 className="title">Mars fotoğrafları</h1>
    
    <div className="Rover-Name">
      <h1>Rover ismi </h1>
    </div>
  
  <div className="filtering">
    <form >
      Sol
      <input className="date"/>

 
  <button className="button" type="submit">Find Photos</button>
    </form>
  </div>
<div className="photoarea">
    
</div>

    </div>
    
  )
}
