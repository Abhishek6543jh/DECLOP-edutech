import React, { useState } from "react";
import { TECollapse, TERipple } from "tw-elements-react";
import Hero from "./components/Hero";
import CourseCard from "./components/CourseCard";
import StickyNavbar from "./components/Navbar";
import AboutSection from "./components/AboutSec";

export default function App() {

  return (
  <React.StrictMode>
   <AboutSection/>
    <StickyNavbar/>
    <Hero />
    
  </React.StrictMode>
   
  );
}