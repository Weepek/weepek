
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Features from "./Components/Features";
import Services from "./Components/Services";
import Contact from "./Components/Contactus";
import Project from './Components/Project';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <main>
              
              <section id="home" className="scroll-mt-20">
                <Hero />
              </section>
              <section id="about" className="scroll-mt-20">
                <Services />
              </section>
              <section id="projects" className="scroll-mt-20">
                <Features />
              </section>
              <section id="project" className="scroll-mt-20">
                <Project />
              </section>
              <section id="contact" className="scroll-mt-20">
                <Contact />
              </section>
             
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
  