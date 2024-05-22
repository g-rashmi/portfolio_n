import React, { useEffect, useRef } from 'react';
import pdf from "../components/pdf/resume.rashmi.pdf";
import Typed from "typed.js";
import hero from "../components/data/hero.json";
import Social from "./Social";

function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Competitive Programmer", "MERN Developer", "Content Creator"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <div className="container home" >
        <div className="left home-items">
          <h1 >
            <span ref={el}></span>
          </h1>
          <a
            href={pdf}
            download="resume.rashmi.pdf"
            className="btn resume"
          >
            DOWNLOAD RESUME
          </a>
          <Social />
        </div>
        <div className="right">
          <div className="img-mine">
            <img src={`assets/${hero.imgSrc}`} alt="Hero" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
