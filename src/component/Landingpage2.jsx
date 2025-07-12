// import React, { useEffect, useRef, useCallback, memo, useMemo } from "react";
// import { motion } from "framer-motion";
// import { CalendarDays } from "lucide-react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { CALENDLY_URL, HERO_IMAGE, FALLBACK_IMAGE } from "./constants";
// import "./LandingPage2.css";

// import SplitText from "gsap/SplitText";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger, SplitText);

// const useCalendly = () => {
//   const scriptLoaded = useRef(false);

//   const loadCalendly = useCallback(() => {
//     return new Promise((resolve, reject) => {
//       if (scriptLoaded.current) return resolve();
//       const script = document.createElement("script");
//       script.src = "https://assets.calendly.com/assets/external/widget.js";
//       script.async = true;
//       script.onload = () => {
//         scriptLoaded.current = true;
//         resolve();
//       };
//       script.onerror = reject;
//       document.body.appendChild(script);

//       const link = document.createElement("link");
//       link.href = "https://assets.calendly.com/assets/external/widget.css";
//       link.rel = "stylesheet";
//       document.head.appendChild(link);
//     });
//   }, []);

//   const openCalendlyPopup = useCallback(async () => {
//     try {
//       await loadCalendly();
//       window.Calendly.initPopupWidget({ url: CALENDLY_URL });
//     } catch {
//       window.open(CALENDLY_URL, "_blank");
//     }
//   }, [loadCalendly]);

//   return { openCalendlyPopup };
// };

// const CreativeButton = memo(() => {
//   const { openCalendlyPopup } = useCalendly();

//   return (
//     <motion.button
//       onClick={openCalendlyPopup}
//       aria-label="Book a meeting"
//       className="relative inline-flex items-center gap-2 px-6 py-3 text-white font-semibold text-base sm:text-lg rounded-full overflow-hidden group focus:outline focus:outline-purple-400 mt-5"
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//     >
//       <span className="relative z-10 flex items-center gap-2">
//         <CalendarDays className="w-5 h-5" />
//         Book a Meeting
//       </span>
//       <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-100 group-hover:opacity-80 transition-opacity z-0"></span>
//       <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-40 transition-opacity z-0"></span>
//       <span className="absolute inset-0 flex items-center justify-center z-0">
//         <span className="w-0 h-0 bg-white opacity-20 rounded-full group-hover:w-64 group-hover:h-64 transition-all duration-500 ease-out"></span>
//       </span>
//       <span className="absolute inset-0 border-2 border-purple-400 rounded-full animate-pulse z-0"></span>
//     </motion.button>
//   );
// });

// const Particle = memo(({ type, count }) => {
//   const particles = useMemo(() => {
//     return Array.from({ length: count }).map((_, i) => ({
//       id: `${type}-${i}`,
//       left: `${Math.random() * 100}vw`,
//       top: `${Math.random() * 100}vh`,
//       animationDelay: `${Math.random() * (type === "star" ? 1.5 : 4)}s`,
//       animationDuration: `${type === "star" ? 2 : 6 + Math.random() * 4}s`
//     }));
//   }, [type, count]);

//   return particles.map(
//     ({ id, left, top, animationDelay, animationDuration }) => (
//       <div
//         key={id}
//         className={type}
//         style={{
//           left,
//           top,
//           animationDelay,
//           animationDuration,
//           position: "absolute"
//         }}
//       />
//     )
//   );
// });

// const LandingPage = () => {
//   const containerRef = useRef(null);

//   useGSAP(() => {
//     // Creative animation for the title text
//     const titleSplit = new SplitText(".landing-hero-title", {
//       type: "chars,words",
//       charsClass: "char",
//       wordsClass: "word"
//     });

//     // Set initial state for title characters
//     gsap.set(titleSplit.chars, {
//       opacity: 0,
//       y: 100,
//       rotationX: -90,
//       transformOrigin: "0% 50% -50"
//     });

//     // Create a timeline for title animation
//     const titleTl = gsap.timeline();

//     // Animate title characters with a creative 3D effect
//     titleTl.to(titleSplit.chars, {
//       duration: 0.8,
//       opacity: 1,
//       y: 0,
//       rotationX: 0,
//       stagger: 0.03,
//       ease: "back.out(0.1)",
//       onComplete: () => {
        
//         gsap.to(".char", {
//           duration: 0,
//           backgroundImage: "linear-gradient(45deg, #a5c4f0 ,#f1eff7, #5813f3)",
//           color: "transparent",
//           backgroundClip: "text",
//           "-webkit-background-clip": "text",
//           stagger: {
//             each: 0.1,
//             from: "center",
//             repeat: 2,
//             yoyo: true
//           },
//           ease: "sine.inOut"
//         });
//       }
//     });

//     // Creative animation for the paragraph text
//     const paragraphSplit = new SplitText(".landing-sub-title", {
//       type: "words",
//       wordsClass: "p-word"
//     });

//     // Set initial state for paragraph words
//     gsap.set(paragraphSplit.words, {
//       opacity: 0,
//       y: 30,
//       scale: 0.9
//     });

//     // Animate paragraph words with a staggered fade-in effect
//     titleTl.to(
//       paragraphSplit.words,
//       {
//         duration: 0.7,
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         stagger: 0.04,
//         ease: "power2.out"
//       },
//       "-=0.5"
//     );

//     // Hero container animation (keep this part from the original)
//     const herotl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".hero-container",
//         start: "50% top",
//         end: "90% bottom",
//         markers: false,
//         scrub: true,
//         stagger: 0.9
//       }
//     });

//     herotl.to(".hero-container", {
//       ease: "power2.inOut",
//       scale: 1.1,
//       duration: 1.5,
//       stagger: 0.5,
//       opacity: 1,
//       pin: true
//     });

//     herotl.to(".hero-content", {
//       y: 0,
//       opacity: 1,
//       ease: "power2.inOut",
//       duration: 1.5,
//       stagger: 0.5
//     });

//     // Particles animation
//     gsap.to(".particles", {
//       ease: "none",
//       opacity: 1,
//       scrollTrigger: {
//         trigger: ".particles",
//         scrub: true,
//         start: "50% top",
//         end: "bottom bottom",
//         markers: true
//       }
//     });

//     // Background parallax effect
//     gsap.to(".background-image", {
//       y: 80,
//       ease: "none",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         scrub: true,
//         start: "top bottom",
//         end: "bottom top"
//       }
//     });

//     // Animated gradient effect
//     gsap.to(".animated-gradient", {
//       backgroundPosition: "200% 50%",
//       ease: "none",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         scrub: true,
//         start: "top bottom",
//         end: "bottom bottom",
//         markers: false
//       }
//     });
//   });
//   const handleImageError = useCallback((e) => {
//     e.target.style.backgroundImage = `url(${FALLBACK_IMAGE})`;
//   }, []);

//   return (
//     <div className="relative min-h-screen w-full z-0 overflow-hidden flex items-center justify-center animated-gradient hero-container">
//       <div
//         className="background-image absolute inset-0 bg-cover bg-center z-0"
//         style={{ backgroundImage: `url(${HERO_IMAGE})` }}
//         onError={handleImageError}
//       />

//       <Particle id="particles" type="particle" count={12} />
//       <Particle type="star" count={20} />

//       <div className="content-container relative z-10 text-center flex flex-col justify-center items-center px-4 sm:px-6 max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-5xl hero-content">
//         <h1 className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-purple-300 drop-shadow-md transition-all duration-300 landing-hero-title ">
//           <span>Weepek </span>Your Web{" "}
//           <span className="block">Development Partner</span>
//         </h1>
//         <div className="flex justify-center my-4">
//           <div className="w-[40px] h-[2px] bg-gradient-to-r from-blue-200 to-purple-400 rounded-3xl"></div>
//         </div>

//         <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-xl font-poppins text-gray-100 m-2 mt-6 md:mt-8 px-3 md:px-1 landing-sub-title">
//           A creative digital studio crafting websites, apps, and branding with
//           purpose. Built for businesses of every scale, powered by research, and
//           driven by design excellence.
//         </p>

//         <div className="mt-6 sm:mt-8">
//           <CreativeButton />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;

 


// import React, { useEffect, useRef, useCallback, memo, useMemo } from "react";
// import { motion } from "framer-motion";
// import { CalendarDays } from "lucide-react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { CALENDLY_URL, HERO_IMAGE, FALLBACK_IMAGE } from "./constants";
// import "./LandingPage2.css";

// import SplitText from "gsap/SplitText";
// import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger, SplitText);

// const useCalendly = () => {
//   const scriptLoaded = useRef(false);

//   const loadCalendly = useCallback(() => {
//     return new Promise((resolve, reject) => {
//       if (scriptLoaded.current) return resolve();
//       const script = document.createElement("script");
//       script.src = "https://assets.calendly.com/assets/external/widget.js";
//       script.async = true;
//       script.onload = () => {
//         scriptLoaded.current = true;
//         resolve();
//       };
//       script.onerror = reject;
//       document.body.appendChild(script);

//       const link = document.createElement("link");
//       link.href = "https://assets.calendly.com/assets/external/widget.css";
//       link.rel = "stylesheet";
//       document.head.appendChild(link);
//     });
//   }, []);

//   const openCalendlyPopup = useCallback(async () => {
//     try {
//       await loadCalendly();
//       window.Calendly.initPopupWidget({ url: CALENDLY_URL });
//     } catch {
//       window.open(CALENDLY_URL, "_blank");
//     }
//   }, [loadCalendly]);

//   return { openCalendlyPopup };
// };

// const CreativeButton = memo(() => {
//   const { openCalendlyPopup } = useCalendly();

//   return (
//     <motion.button
//       onClick={openCalendlyPopup}
//       aria-label="Book a meeting"
//       className="relative inline-flex items-center gap-2 px-3 md:px-6 py-3 text-white font-semibold text-base sm:text-lg rounded-full overflow-hidden group focus:outline focus:outline-purple-400 mt-5"
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//     >
//       <span className="relative z-10 flex items-center gap-2">
//         <CalendarDays className="w-3 h-3 md:w-5 md:h-5" />
//         Book a Meeting
//       </span>
//       <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-100 group-hover:opacity-80 transition-opacity z-0"></span>
//       <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-40 transition-opacity z-0"></span>
//       <span className="absolute inset-0 flex items-center justify-center z-0">
//         <span className="w-0 h-0 bg-white opacity-20 rounded-full group-hover:w-64 group-hover:h-64 transition-all duration-500 ease-out"></span>
//       </span>
//       <span className="absolute inset-0 border-2 border-purple-400 rounded-full animate-pulse z-0"></span>
//     </motion.button>
//   );
// });

// const Particle = memo(({ type, count }) => {
//   const particles = useMemo(() => {
//     return Array.from({ length: count }).map((_, i) => ({
//       id: `${type}-${i}`,
//       left: `${Math.random() * 100}vw`,
//       top: `${Math.random() * 100}vh`,
//       animationDelay: `${Math.random() * (type === "star" ? 1.5 : 4)}s`,
//       animationDuration: `${type === "star" ? 2 : 6 + Math.random() * 4}s`
//     }));
//   }, [type, count]);

//   return particles.map(
//     ({ id, left, top, animationDelay, animationDuration }) => (
//       <div
//         key={id}
//         className={type}
//         style={{
//           left,
//           top,
//           animationDelay,
//           animationDuration,
//           position: "absolute"
//         }}
//       />
//     )
//   );
// });

// const LandingPage = () => {
//   const containerRef = useRef(null);
//   const titleCharsRef = useRef([]);
//   const titleContainerRef = useRef(null);

//   // Setup hover animations for each character
//   const setupHoverAnimations = useCallback(() => {
//     titleCharsRef.current.forEach((char, index) => {
//       const charElement = char;
      
//       // Create a timeline for each character's hover animation
//       const hoverTl = gsap.timeline({ paused: true });
      
//       hoverTl.to(charElement, {
//         y: -15,
//         scale: 1.2,
//         color: "#a5c4f0",
//         duration: 0.2,
//         ease: "power2.out"
//       })
//       .to(charElement, {
//         y: 0,
//         scale: 1,
//         color: "#5813f3",
//         duration: 0.3,
//         ease: "bounce.out"
//       })
//       .to(charElement, {
//         color: "transparent",
//         backgroundImage: "linear-gradient(305deg, #a5c4f0, #f1eff7, #5813f3)",
//         backgroundClip: "text",
//         duration: 0.4
//       }, ">")
//       .to(charElement, {
//         color: "transparent",
//         backgroundImage: "none",
//         duration: 0.3
//       }, "0.2");

//       // Add event listeners
//       charElement.addEventListener("mouseenter", () => {
//         hoverTl.restart();
//       });

//       // Reset to initial state on mouse leave
//       charElement.addEventListener("mouseleave", () => {
//         gsap.to(charElement, {
//           y: 0,
//           scale: 1,
//           color: "transparent",
//           backgroundImage: "none",
//           backgroundClip: "initial",
//           duration: 0.3
//         });
//       });
//     });
//   }, []);

//   useGSAP(() => {
//     // Creative animation for the title text
//     const titleSplit = new SplitText(".landing-hero-title", {
//       type: "chars,words",
//       charsClass: "char",
//       wordsClass: "word"
//     });

//     // Store references to all character elements
//     titleCharsRef.current = gsap.utils.toArray(".char");

//     // Set initial state for title characters
//     gsap.set(titleCharsRef.current, {
//       opacity: 0,
//       y: 100,
//       rotationX: -90,
//       transformOrigin: "0% 50% -50"
//     });

//     // Create a timeline for title animation
//     const titleTl = gsap.timeline({
//       onComplete: () => {
//         // Setup hover animations after initial animation completes
//         setupHoverAnimations();
        
//         // Initial gradient effect
//         gsap.to(".char", {
//           duration: 0,
//           backgroundImage: "linear-gradient(305deg, #a5c4f0 ,#f1eff7, #5813f3)",
//           color: "transparent",
//           backgroundClip: "text",
//           "-webkit-background-clip": "text",
//           stagger: {
//             each: 0.1,
//             from: "center",
//             repeat: 2,
//             yoyo: true
//           },
//           ease: "sine.inOut"
//         });
//       }
//     });

//     // Animate title characters with a creative 3D effect
//     titleTl.to(titleCharsRef.current, {
//       duration: 0.3,
//       opacity: 1,
//       y: 0,
//       rotationX: 0,
//       stagger: 0.03,
//       ease: "back.out(0.1)"
//     });

//     // Creative animation for the paragraph text
//     const paragraphSplit = new SplitText(".landing-sub-title", {
//       type: "words",
//       wordsClass: "p-word"
//     });

//     // Set initial state for paragraph words
//     gsap.set(paragraphSplit.words, {
//       opacity: 0,
//       y: 100,
//       scale: 0.9
//     });

//     // Animate paragraph words with a staggered fade-in effect
//     titleTl.to(
//       paragraphSplit.words,
//       {
//         duration: 0.7,
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         stagger: 0.06,
//         ease: "power2.out"
//       },
//       "-=0.5"
//     );

//     // Hero container animation
//     const herotl = gsap.timeline({
//       scrollTrigger: {
//         trigger: ".hero-container",
//         start: "50% top",
//         end: "90% bottom",
//         markers: false,
//         scrub: true,
//         stagger: 0.9
//       }
//     });

//     herotl.to(".hero-container", {
//       ease: "power2.inOut",
//       scale: 0.9,
//       duration: 1.5,
//       stagger: 0.5,
//       opacity: 1,
//       pin: true
//     });

//     herotl.to(".hero-content", {
//       y: 0,
//       scale: 1.1,
//       opacity: 1,
//       ease: "power2.inOut",
//       duration: 1.5,
//       stagger: 0.5
//     });

//     // Particles animation
//     gsap.to(".particles", {
//       ease: "none",
//       opacity: 1,
//       scrollTrigger: {
//         trigger: ".particles",
//         scrub: true,
//         start: "50% top",
//         end: "bottom bottom",
//         markers: true
//       }
//     });

//     // Background parallax effect
//     gsap.to(".background-image", {
//       y: 80,
//       ease: "none",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         scrub: true,
//         start: "top bottom",
//         end: "bottom top"
//       }
//     });

//     // Animated gradient effect
//     gsap.to(".animated-gradient", {
//       backgroundPosition: "200% 50%",
//       ease: "none",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         scrub: true,
//         start: "top bottom",
//         end: "bottom bottom",
//         markers: false
//       }
//     });
//   }, { scope: containerRef });

//   const handleImageError = useCallback((e) => {
//     e.target.style.backgroundImage = `url(${FALLBACK_IMAGE})`;
//   }, []);

//   return (
//     <div 
//       ref={containerRef}
//       className="relative min-h-screen w-full z-0 overflow-hidden flex items-center justify-center animated-gradient hero-container"
//     >
//       <div
//         className="background-image absolute inset-0 bg-cover bg-center z-0"
//         style={{ backgroundImage: `url(${HERO_IMAGE})` }}
//         onError={handleImageError}
//       />

//       <Particle id="particles" type="particle" count={12} />
//       <Particle type="star" count={20} />

//       <div className="content-container relative z-10 text-center flex flex-col justify-center items-center px-4 sm:px-6 max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-5xl hero-content">
//         <h1 
//           ref={titleContainerRef}
//           className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-purple-300 drop-shadow-md transition-all duration-300 landing-hero-title cursor-default"
//         >
//           <span>Weepek </span>Your Web{" "}
//           <span className="block">Development Partner</span>
//         </h1>
//         <div className="flex justify-center my-4">
//           <div className="w-[40px] h-[2px] bg-gradient-to-r from-blue-200 to-purple-400 rounded-3xl"></div>
//         </div>

//         <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-xl font-poppins text-gray-100 m-2 mt-6 md:mt-8 px-3 md:px-1 landing-sub-title">
//           A creative digital studio crafting websites, apps, and branding with
//           purpose. Built for businesses of every scale, powered by research, and
//           driven by design excellence.
//         </p>

//         <div className="mt-6 sm:mt-8">
//           <CreativeButton />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;


//working 

import React, { useEffect, useRef, useCallback, memo, useMemo } from "react";
import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CALENDLY_URL, HERO_IMAGE, FALLBACK_IMAGE } from "./constants";
import "./LandingPage2.css";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const useCalendly = () => {
  const scriptLoaded = useRef(false);

  const loadCalendly = useCallback(() => {
    return new Promise((resolve, reject) => {
      if (scriptLoaded.current) return resolve();
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      script.onload = () => {
        scriptLoaded.current = true;
        resolve();
      };
      script.onerror = reject;
      document.body.appendChild(script);

      const link = document.createElement("link");
      link.href = "https://assets.calendly.com/assets/external/widget.css";
      link.rel = "stylesheet";
      document.head.appendChild(link);
    });
  }, []);

  const openCalendlyPopup = useCallback(async () => {
    try {
      await loadCalendly();
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } catch {
      window.open(CALENDLY_URL, "_blank");
    }
  }, [loadCalendly]);

  return { openCalendlyPopup };
};

const CreativeButton = memo(() => {
  const { openCalendlyPopup } = useCalendly();

  return (
    <motion.button
      onClick={openCalendlyPopup}
      aria-label="Book a meeting"
      className="relative inline-flex items-center gap-2 px-3 md:px-6 py-3 text-white font-semibold text-base sm:text-lg rounded-full overflow-hidden group focus:outline focus:outline-purple-400 mt-5"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10 flex items-center gap-2">
        <CalendarDays className="w-3 h-3 md:w-5 md:h-5" />
        Book a Meeting
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-100 group-hover:opacity-80 transition-opacity z-0"></span>
      <span className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-40 transition-opacity z-0"></span>
      <span className="absolute inset-0 flex items-center justify-center z-0">
        <span className="w-0 h-0 bg-white opacity-20 rounded-full group-hover:w-64 group-hover:h-64 transition-all duration-500 ease-out"></span>
      </span>
      <span className="absolute inset-0 border-2 border-purple-400 rounded-full animate-pulse z-0"></span>
    </motion.button>
  );
});

const Particle = memo(({ type, count }) => {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: `${type}-${i}`,
      left: `${Math.random() * 100}vw`,
      top: `${Math.random() * 100}vh`,
      animationDelay: `${Math.random() * (type === "star" ? 1.5 : 4)}s`,
      animationDuration: `${type === "star" ? 2 : 6 + Math.random() * 4}s`
    }));
  }, [type, count]);

  return particles.map(
    ({ id, left, top, animationDelay, animationDuration }) => (
      <div
        key={id}
        className={type}
        style={{
          left,
          top,
          animationDelay,
          animationDuration,
          position: "absolute"
        }}
      />
    )
  );
});

const LandingPage = () => {
  const containerRef = useRef(null);
  const titleCharsRef = useRef([]);
  const titleContainerRef = useRef(null);

  const setupHoverAnimations = useCallback(() => {
    titleCharsRef.current.forEach((char) => {
      const hoverTl = gsap.timeline({ paused: true });
      hoverTl
        .to(char, {
          y: -15,
          scale: 1.2,
          color: "#a5c4f0",
          duration: 0.2,
          ease: "power2.out"
        })
        .to(char, {
          y: 0,
          scale: 1,
          color: "#5813f3",
          duration: 0.3,
          ease: "bounce.out"
        })
        .to(
          char,
          {
            color: "transparent",
            backgroundImage:
              "linear-gradient(305deg, #a5c4f0, #f1eff7, #5813f3)",
            backgroundClip: "text",
            duration: 0.4
          },
          ">"
        )
        .to(
          char,
          {
            color: "transparent",
            backgroundImage: "none",
            duration: 0.3
          },
          "0.2"
        );

      char.addEventListener("mouseenter", () => hoverTl.restart());
      char.addEventListener("mouseleave", () => {
        gsap.to(char, {
          y: 0,
          scale: 1,
          color: "transparent",
          backgroundImage: "none",
          backgroundClip: "initial",
          duration: 0.3
        });
      });
    });
  }, []);

  useGSAP(() => {
    const titleSplit = new SplitText(".landing-hero-title", {
      type: "chars,words",
      charsClass: "char",
      wordsClass: "word"
    });

    titleCharsRef.current = gsap.utils.toArray(".char");

    gsap.set(titleCharsRef.current, {
      opacity: 0,
      y: 100,
      rotationX: -90,
      transformOrigin: "0% 50% -50"
    });

    const titleTl = gsap.timeline({
      onComplete: () => {
        setupHoverAnimations();
        gsap.to(".char", {
          duration: 0,
          backgroundImage:
            "linear-gradient(305deg, #a5c4f0 ,#f1eff7, #5813f3)",
          color: "transparent",
          backgroundClip: "text",
          "-webkit-background-clip": "text",
          stagger: {
            each: 0.1,
            from: "center",
            repeat: 2,
            yoyo: true
          },
          ease: "sine.inOut"
        });
      }
    });

    // Title animation - fast and smooth
    titleTl.to(titleCharsRef.current, {
      duration: 0.2,
      opacity: 1,
      y: 0,
      rotationX: 0,
      stagger: 0.025,
      ease: "back.out(1.2)"
    });

    const paragraphSplit = new SplitText(".landing-sub-title", {
      type: "words",
      wordsClass: "p-word"
    });

    gsap.set(paragraphSplit.words, {
      opacity: 0,
      y: 100,
      scale: 0.9
    });

    // Animate paragraph AFTER title completes
    titleTl.to(paragraphSplit.words, {
      duration: 0.5,
      opacity: 1,
      y: 0,
      scale: 1,
      stagger: 0.04,
      ease: "power2.out",
      delay: 0.2
    });

    const herotl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-container",
        start: "50% top",
        end: "90% bottom",
        scrub: true,
        stagger: 0.9
      }
    });

    herotl.to(".hero-container", {
      ease: "power2.inOut",
      scale: 0.9,
      duration: 1.5,
      stagger: 0.5,
      opacity: 1,
      pin: true
    });

    herotl.to(".hero-content", {
      y: 0,
      scale: 1.1,
      opacity: 1,
      ease: "power2.inOut",
      duration: 1.5,
      stagger: 0.5
    });

    gsap.to(".particles", {
      ease: "none",
      opacity: 1,
      scrollTrigger: {
        trigger: ".particles",
        scrub: true,
        start: "50% top",
        end: "bottom bottom"
      }
    });

    gsap.to(".background-image", {
      y: 80,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: true,
        start: "top bottom",
        end: "bottom top"
      }
    });

    gsap.to(".animated-gradient", {
      backgroundPosition: "200% 50%",
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        scrub: true,
        start: "top bottom",
        end: "bottom bottom"
      }
    });
  }, { scope: containerRef });

  const handleImageError = useCallback((e) => {
    e.target.style.backgroundImage = `url(${FALLBACK_IMAGE})`;
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen w-full z-0 overflow-hidden flex items-center justify-center animated-gradient hero-container"
    >
      <div
        className="background-image absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
        onError={handleImageError}
      />

      <Particle id="particles" type="particle" count={12} />
      <Particle type="star" count={20} />

      <div className="content-container relative z-10 text-center flex flex-col justify-center items-center px-4 sm:px-6 max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl 2xl:max-w-5xl hero-content">
        <h1
          ref={titleContainerRef}
          className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-6xl font-bold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-blue-100 to-purple-300 drop-shadow-md transition-all duration-300 landing-hero-title cursor-default"
        >
          <span>Weepek </span>Your Web{" "}
          <span className="block">Development Partner</span>
        </h1>
        <div className="flex justify-center my-4">
          <div className="w-[40px] h-[2px] bg-gradient-to-r from-blue-200 to-purple-400 rounded-3xl"></div>
        </div>

        <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-xl font-poppins text-gray-100 m-2 mt-6 md:mt-8 px-3 md:px-1 landing-sub-title">
          A creative digital studio crafting websites, apps, and branding with
          purpose. Built for businesses of every scale, powered by research, and
          driven by design excellence.
        </p>

        <div className="mt-6 sm:mt-8">
          <CreativeButton />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
