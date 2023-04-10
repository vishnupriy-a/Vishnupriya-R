import "./FooterStyles.css"
import React from 'react'
//import {FaEnvelope, FaFacebook, FaGithub, FaHome, FaInstagramSquare, FaLinkedin, FaTelegram, FaTwitter, FaWhatsapp} from "react-icons/fa";
import { FaPhone} from "react-icons/fa";
import {FaHome} from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFacebook,faTwitter,faInstagram, faGithub, faWhatsapp, faLinkedin, faTelegram} from "@fortawesome/free-brands-svg-icons";

const Footer  = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                {/* <div className="location">
                    <FaHome size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <div>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                </div> */}
                {/* <div className="phone">
                    <div>
                    <FaPhone size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <a href="tel:0000000">+91-00000000</a>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </div>                    
                </div> */}
                <div className="email">
                    <h4>
                    <FaMailBulk size={20} style={{color:"#fff", marginRight:"2rem"}}/>
                    <a href="mailto:vishnupriya232002@gmail.com">vishnupriya232002@gmail.com</a>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </h4>                   
                </div>

            </div>

             <div className="right">
                <h4>About Me</h4>
                <p>This is Vishnupriya R.
                 I'm a developer currently pursuing my Masters at <a href="https://www.cet.ac.in/">College of Engineering Thiruvanandhapuram</a>
                 </p>
                {/* <div className="social">
                 <FaFacebook size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                 <FaTwitter size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                 <FaLinkedin size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                 <FaInstagramSquare size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                 <FaWhatsapp size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                 <FaEnvelope size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                 <FaGithub size={30} style={{color:"#fff", marginRight:"1rem"}}/>
                 <FaTelegram size={30} style={{color:"#fff", marginRight:"1rem"}} />             
                 
                 </div> */}

                 <div class="social-container">
                    <h3> </h3>
                    {/* <a href="https://www.facebook.com/vishnupriya.rajeevan"
        className="facebook social">
        <FontAwesomeIcon icon={faFacebook} size="2x" style={{marginRight:'1rem'}}/>
      </a> */}
      <a href='https://instagram.com/vishnu_priy_a?igshid=YmMyMTA2M2Y='
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="2x" style={{marginRight:'1rem'}}/>
      </a>
      {/* <a href="https://twitter.com/nikhiljp6?t=LooC615CePucbi_3naY66g&s=09" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" style={{marginRight:'1rem'}}/>
      </a> */}
      <a href="https://github.com/vishnu-priy-a"
        className="github social">
        <FontAwesomeIcon icon={faGithub} size="2x" style={{marginRight:'1rem'}}/>
      </a>
      
      {/* <a href="https://wa.me/0000000000?Hey!"
        className="whatsapp social">
        <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{marginRight:'1rem'}}/>
      </a> */}
      <a href="https://www.linkedin.com/"
        className="linkedin social">
        <FontAwesomeIcon icon={faLinkedin} size="2x" style={{marginRight:'1rem'}}/>
      </a>
      {/* <a href="href='t.me/@vishnupriy-a"
        className="telegram social">
        <FontAwesomeIcon icon={faTelegram} size="2x" style={{marginRight:'1rem'}}/>
      </a> */}
</div>
            </div> 
        </div>
    </div>
  )
}

export default Footer 
