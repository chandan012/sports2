import React from 'react'
import bg1 from "../../imgs/bg1.jpg"
import "./home.css"


function home() {
  return (
    <div className="bghome"  style={{ backgroundImage: `url(${bg1})` }}>
      {/* <img src={bg1} alt=" "></img> */}
    </div>
    
  )
}

export default home