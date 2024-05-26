import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaGithub } from "react-icons/fa6";

function Social() {
  return (
    <>
      <div className=" container social"> 
      <div className="contact-icon it">
      <a href="https://www.instagram.com/rashmie_gupta?igsh=dDgxNXphZzNrc3Y1" className="items"><FaInstagram /> </a>
      <a href="https://www.linkedin.com/in/rashmi-gupta-781021226/"  className="items"> <FaLinkedin />
      </a>
      <a  href="https://github.com/g-rashmi" className="items"><FaGithub /></a>
      <a href="mailto:rashmi.gupta7018@gmail.com" className="items"><CgMail /></a>
     
      
      </div>
      </div>
    </>
  )
}

export default Social
