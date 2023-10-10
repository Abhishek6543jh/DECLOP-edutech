import React, { useState } from "react";
import { TECollapse, TERipple } from "tw-elements-react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"; 
import CourseCard from "./components/CourseCard";
export default function App() {

  return (
  <React.StrictMode>
     
     <CourseCard/>
  </React.StrictMode>
   
  );
}