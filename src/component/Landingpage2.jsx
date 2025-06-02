
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
 

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Fallback image if Heroimg1.png fails to load
const fallbackImage = "/assets/feaaturesimg.png";

const CreativeButton = () => {
  return (
    <motion.a
      href="https://calendly.com/poornima220500/30min"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book a meeting with Poornima"
      className="relative inline-flex items-center gap-2 px-8 py-3 text-white font-poppins font-semibold text-lg rounded-full overflow-hidden group animate-on-scroll"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10 flex items-center gap-2">
        <CalendarDays className="w-5 h-5" />
        Book a Meeting
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-100 group-hover:opacity-80 transition-opacity z-0"></span>
      <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-40 transition-opacity z-0"></span>
      <span className="absolute inset-0 flex items-center justify-center z-0">
        <span className="w-0 h-0 bg-white opacity-20 rounded-full group-hover:w-64 group-hover:h-64 transition-all duration-500 ease-out"></span>
      </span>
      <span className="absolute inset-0 border-2 border-purple-400 rounded-full animate-pulse z-0"></span>
    </motion.a>
  );
};

const LandingPage2 = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax for particles
      gsap.utils.toArray(".particle").forEach((element) => {
        gsap.to(element, {
          y: -150,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            scrub: true,
            start: "top bottom",
            end: "bottom top",
          },
        });
      });

      // Parallax for background
      gsap.to(".background-image", {
        y: 100,
        ease: "none",
        scrollTrigger: {
          trigger: ".background-image",
          scrub: true,
          start: "top bottom",
          end: "bottom top",
        },
      });

      // Dynamic gradient animation
      gsap.to(".animated-gradient", {
        backgroundPosition: "200% 50%",
        ease: "none",
        scrollTrigger: {
          trigger: ".animated-gradient",
          scrub: true,
          start: "top bottom",
          end: "bottom top",
        },
      });

      // Staggered text animation for heading
      gsap.utils.toArray(".content-container h1 span").forEach((char, i) => {
        gsap.from(char, {
          opacity: 0,
          x: i % 2 === 0 ? -20 : 20,
          delay: i * 0.05,
          scrollTrigger: {
            trigger: char,
            start: "top 90%",
          },
        });
      });
    });

    return () => ctx.revert();
  }, []);

  const handleImageError = (e) => {
    console.warn("Background image failed to load, using fallback");
    e.target.style.backgroundImage = `url(${fallbackImage})`;
  };

  return (
    <>
      <style>
        {`
          @keyframes particle-float {
            0% { transform: translateY(0); opacity: 0.6; }
            100% { transform: translateY(-100vh); opacity: 0; }
          }
          @keyframes starry-twinkle {
            0% { opacity: 0.5; }
            50% { opacity: 1; }
            100% { opacity: 0.5; }
          }
          @keyframes gradientLoop {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .background-image {
            background-image: url(/assets/Heroimg.png);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            filter: blur(10px);
          }
          .particle {
            position: absolute;
            width: 3px;
            height: 3px;
            background: rgba(255, 255, 255, 0.6);
            border-radius: 50%;
            animation: particle-float 10s linear infinite;
            pointer-events: none;
            z-index: 2;
          }
          .star {
            position: absolute;
            width: 2px;
            height: 2px;
            background: white;
            border-radius: 50%;
            animation: starry-twinkle 2s infinite;
            pointer-events: none;
            z-index: 2;
          }
          .content-container {
            position: relative;
            z-index: 3;
          }
          .animated-gradient {
            // background: linear-gradient(35deg, #190b40, #74599e, #0f1647, #0a1224);
               background: linear-gradient(35deg, #030c26, #000000 ,#020203, #030c26 );
            background-size: 200% 100%;
            animation: gradientLoop 8s ease-in-out infinite;
          }
          .font-poppins {
            font-family: 'Poppins', sans-serif;
          }
        `}
      </style>

      <div className="relative min-h-screen w-full overflow-hidden flex items-center justify-center animated-gradient">
        <div className="background-image  parallax" onError={handleImageError}></div>
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="particle parallax"
            style={{
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${8 + Math.random() * 6}s`,
            }}
          />
        ))}
        {[...Array(50)].map((_, i) => (
          <div
            key={`star-${i}`}
            className="star"
            style={{
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
        <div className="content-container text-center flex flex-col justify-center items-center px-4 max-w-7xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-purple-400 drop-shadow-lg animate-on-scroll"
          >
            {"Weepek".split("").map((char, i) => (
              <span key={i}>{char}</span>
            ))}{" "}
            <span className="text-white text-wrap">Your Web Development Partner</span>
          </motion.h1>
          <p className="text-lg md:text-2xl font-poppins text-gray-200 mt-8 leading-relaxed px-2 animate-on-scroll">
            For Digital Success - Branding, Websites, Apps, and research solutions.
          </p>
          <div className="mt-10 animate-on-scroll">
            <CreativeButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage2;