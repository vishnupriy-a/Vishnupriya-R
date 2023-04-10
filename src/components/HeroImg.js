import "./HeroImgStyles.css"
import React from 'react'

import IntroImg from "../assets/bck3.jpg.jpg"
import { Link } from "react-router-dom"
const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="into-img" src= {IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p><h3>Hi I'm Vishnupriya, This is my personal website </h3></p>
            <h1> </h1>
            {/* <div>
                <Link to="/project" className="btn">Projects</Link>
            </div> */}
        </div>
    </div>
  )
}

export default Heroimg