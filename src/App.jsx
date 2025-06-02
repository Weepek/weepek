 import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Service from "./component/service";
import Car from "./component/Carscard";
import LandingPage2 from "./component/Landingpage2";
import Features from "./component/Features";
import Project from "./component/Project";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

// Home component with sections for hash-based navigation
const Home = () => (
  <main>
    <section id="home" className="scroll-mt-20">
      <LandingPage2 />
    </section>
    <section id="about" className="scroll-mt-20">
      <Service />
    </section>
    <section id="features" className="scroll-mt-20">
      <Features />
    </section>
    <section id="project" className="scroll-mt-20">
      <Project />
    </section>
    <section id="Contact" className="scroll-mt-20">
      <Contact />
    </section>
  </main>
);

function App() {
  return (
    <Router>
      <div className="relative bg-black min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/carscard" element={<Car />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

