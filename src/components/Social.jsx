import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa6";

function Social() {
  return (
    <>
      <div className=" container social"> 
      <div className="contact-icon it">
      <a href="https://www.instagram.com/code_book._/" className="items"><FaInstagram /> </a>
      <a href="https://www.linkedin.com/in/rashmi-gupta-781021226/"  className="items"> <FaLinkedin />
      </a>
      <a  href="https://x.com/grashmi78?t=snIy8O2I3FliA1xqfsQM9A&s=09" className="items"><FaXTwitter /></a>
      <a href="mailto:rashmi.gupta7018@gmail.com" className="items"><CgMail /></a>
      <a href="https://wa.me/9555244939"  className="items"><FaWhatsapp /></a>
      
      </div>
      </div>
    </>
  )
}

export default Social