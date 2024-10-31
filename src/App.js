import React from "react";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/contact";
import Footer from "./Footer";
function App() {
  return (
   <nav className="bg-gray-900 text-gray-400 body-font">
    <Navbar></Navbar>
    <About></About>
    <Project></Project>
    <Skills></Skills>
    <Testimonials></Testimonials>
    <Contact></Contact>
    <Footer></Footer>
   
   </nav>
  );
}

export default App;
