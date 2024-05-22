import Navbar from "../src/components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../src/components/Home";
import Experience from "./components/Experience";
import Skill from "./components/Skill"
import Contact from "./components/Contact"
import Project from "./components/Project"
const App = () => {
  return (
    <>
    <Navbar/>
     <Home />
       <Experience/>
       <Project/>

   
     <Skill/>
     <Contact/>
      
    
    </>
  );
};

export default App;
