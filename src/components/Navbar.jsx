import  { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import hamburger and close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track menu visibility

  // Function to toggle menu visibility
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container nav_bar" id="homei">
      <div className="left nav_items"> 
        Portfolio 
      </div>
      <div className="right">
        {/* Hamburger icon */}
        <div className="menu-toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
        {/* Menu items */}
        <div className={`menu-items ${isOpen ? 'open' : ''}`}>
          <a href="#homei" className="nav_items">Home</a>
          <a href="#experiencei" className="nav_items">Experience</a>
          <a href="#skilli" className="nav_items">Skills</a>
          <a href="#projecti" className="nav_items">Projects</a>
          <a href="#contacti" className="nav_items">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
