import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Nav from "./nav/Nav.js";
import Home from "./home/Home.js";
import About from "./about/About.js";
import Skills from "./skills/Skills.js";
import Projects from "./projects/Projects.js";
import Contact from "./contact/Contact.js";
import "./styles/app.css";
import Background from "./background/Background.js";
import UserData from './userData/UserData.js'

const App=()=> {
  return (
    <>
    <Router>
    <Nav/>
    <Background/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/skills" element={<Skills/>} />
      <Route path="/projects" element={<Projects/>} />
      <Route path="/contact" element={<Contact/>} />
    </Routes>
    <UserData/>
    </Router>
    </>
  );
}

export default App;
