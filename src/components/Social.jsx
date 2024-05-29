import React from 'react'
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { FaGithub } from "react-icons/fa6";

function Social() {
  return (
    <>
      <div className=" container social"> 
      <div className="contact-icon it">
      <a href="https://www.instagram.com/rashmie_gupta?igsh=dDgxNXphZzNrc3Y1" className="items socialll"><FaInstagram /> </a>
      <a href="https://www.linkedin.com/in/rashmi-gupta-781021226/"  className="items socialll"> <FaLinkedin />
      </a>
      <a  href="https://github.com/g-rashmi" className="items socialll"><FaGithub /></a>
      <a href="https://youtube.com/@genie7866?si=HaZhrE-tFWHyFQWU" className="items socialll"><FaYoutube /></a>
     
      
      </div>
      </div>
    </>
  )
}

export default Social
