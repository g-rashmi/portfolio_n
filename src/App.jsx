
import './components/Particle.js';

import anime from 'animejs/lib/anime.es.js';

import Navbar from "../src/components/Navbar";
import Home from "../src/components/Home";
import Experience from "./components/Experience";
import Skill from "./components/Skill";
import Contact from "./components/Contact";
import Project from "./components/Project";
import Footer from "./components/Footer";
import { useEffect } from 'react';

const App = () => {   // Load particles.js configuration
    
   

    // Apply anime.js animation
    anime({
      targets: 'div',
      translateX: 2,
      rotate: '1turn',
    
      duration: 800, 
      
    }); 
   
    
   
     anime({
      targets: '.socialll', 
 translateX: function(el) {
        return el.getAttribute('data-x');
      },
      translateY: function(el, i) {
        return 50 + (-50 * i);
      },
      scale: function(el, i, l) {
        return (l - i) + .25;
      },
      rotate: function() { return anime.random(-360, 360); },
      borderRadius: function() { return ['50%', anime.random(10, 35) + '%']; },
      duration: function() { return anime.random(1200, 1800); },
      delay: function() { return anime.random(0, 400); },
      direction: 'alternate',
      loop: true
    });
    anime({
    targets: '.mineee', 
 translateX: function(el) {
        return el.getAttribute('data-x');
      },
      translateY: function(el, i) {
        return 50 + (-50 * i);
      },
      scale: function(el, i, l) {
        return (l - i) + .25;
      },
      rotate: function() { return anime.random(-360, 360); },
      borderRadius: function() { return ['50%', anime.random(10, 35) + '%']; },
      duration: function() { return anime.random(1200, 1800); },
      delay: function() { return anime.random(0, 400); },
      direction: 'alternate',
      loop: true
    });
    anime({
      targets: '.ex',
      keyframes: [
        {translateY: -40},
        {translateX: 250},
        {translateY: 40},
        {translateX: 0},
        {translateY: 0}
      ],
      duration: 4000,
      easing: 'easeOutElastic(1, .8)',
      loop: true
    });  
    
  return (
    <div id='particles-js'>
      <Navbar id='exxx'/>
      <Home />
      <Experience />
      <Project />
      <Skill />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
