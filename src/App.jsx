// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./component/Navbar";
// import Service from "./component/service";
// import LandingPage2 from "./component/Landingpage2";
// import Features from "./component/Features";
// import Project from "./component/Project";
// import Contact from "./component/Contact";
// import Footer from "./component/Footer";
// import gsap from "gsap";
// import Faq from "./component/Faq";
// import Servicenewpage from "./component/servicenewpage";
// import ScrollToTop from "./component/ScrollToTop";
// import WhatsAppButton from "./component/WhatsAppButton";
// import Signup from "./component/Signup";
// import Login from "./component/Login";
// import Account from './component/Account'
// import ForgotPassword from "./component/ForgetPassword";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Home = () => (
//   <main>
//     <section id="home" className="scroll-mt-20 z-0">
//       <LandingPage2 />
//     </section>
//     {/*<section id="Faq" className="scroll-mt-20">*/}
//     {/*    <Service />*/}
//     {/*  </section>*/}
//     <section id="project" className="scroll-mt-20 z-20">
//       <Project />
//     </section>
//     <section id="about" className="scroll-mt-20">
//       <Servicenewpage />
//     </section>
//     <section id="Faq" className="scroll-mt-20">
//       <Faq />
//     </section>
//   </main>
// );

// function App() {
//   return (
//     <Router>
//       <ScrollToTop />
//       <div className="relative bg-black min-h-screen">
//         <Navbar />
//         <Routes>
//           <Route path="/weepek" element={<Home />} />
//           <Route path="/weepek/Contact" element={<Contact />} />
//           <Route path="/weepek/About" element={<Features />} />
//           <Route path="/weepek/Signup" element={<Signup />} />
//           <Route path="/weepek/Login" element={<Login />} />
//            <Route path="/weepek/Account" element={<Account />} />
//           <Route path="/weepek/ForgetPassword" element={<ForgotPassword />} />
//         </Routes>

//         <Footer />
//         <WhatsAppButton />
//       </div>
//     </Router>
//   );
// }

// export default App;
import React, { useLayoutEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Service from "./component/service";
import LandingPage2 from "./component/Landingpage2";
import Features from "./component/Features";
import Project from "./component/Project";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Faq from "./component/Faq";
import Servicenewpage from "./component/servicenewpage";
import ScrollToTop from "./component/ScrollToTop";
import WhatsAppButton from "./component/WhatsAppButton";
import Signup from "./component/Signup";
import Login from "./component/Login";
import Account from "./component/Account";
import ForgotPassword from "./component/ForgetPassword";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Home = () => (
  <main>
    <section id="home" className="scroll-mt-20 z-0">
      <LandingPage2 />
    </section>
    <section id="project" className="scroll-mt-20 z-20">
      <Project />
    </section>
    <section id="about" className="scroll-mt-20">
      <Servicenewpage />
    </section>
    <section id="Faq" className="scroll-mt-20">
      <Faq />
    </section>
  </main>
);

function App() {
  const smootherRef = useRef(null);

  useLayoutEffect(() => {
    smootherRef.current = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5, // increase for more smoothing
      effects: true,
    });

    return () => {
      if (smootherRef.current) smootherRef.current.kill();
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div id="smooth-wrapper" className="bg-black min-h-screen">
        <div id="smooth-content">
          <Navbar />
          <Routes>
            <Route path="/weepek" element={<Home />} />
            <Route path="/weepek/Contact" element={<Contact />} />
            <Route path="/weepek/About" element={<Features />} />
            <Route path="/weepek/Signup" element={<Signup />} />
            <Route path="/weepek/Login" element={<Login />} />
            <Route path="/weepek/Account" element={<Account />} />
            <Route path="/weepek/ForgetPassword" element={<ForgotPassword />} />
          </Routes>
          <Footer />
          <WhatsAppButton />
        </div>
      </div>
    </Router>
  );
}

export default App;
