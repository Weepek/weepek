
// import React, { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const cardData = [
//   {
//     img: "https://img.icons8.com/clouds/100/web.png",
//     alt: "Website",
//     title: "Custom Website",
//     desc: "Fast, secure, mobile-friendly websites tailored to your brand.",
//     color: "from-purple-500/20 to-purple-800/10",
//     accent: "purple-400"
//   },
//   {
//     img: "https://img.icons8.com/clouds/100/android.png",
//     alt: "App",
//     title: "Mobile App",
//     desc: "Feature-rich Android & iOS apps with smooth user experience.",
//     color: "from-[#6190E8] to-[#A7BFE8]",
//     accent: ""
//   },
//   {
//     img: "https://img.icons8.com/clouds/100/adobe-after-effects.png",
//     alt: "Logo",
//     title: "Logo Design",
//     desc: "Unique logos and brand identities ready for all platforms.",
//     color: "from-[#090979] to-[#00D4FF]",
//     accent: "text-[#090979]"
//   },
//   {
//     img: "https://img.icons8.com/clouds/100/bullish.png",
//     alt: "SEO",
//     title: "SEO Optimization",
//     desc: "Improve Google ranking with complete SEO strategies.",
//     color: "from-[#097970] to-[#00D4FF]",
//     accent: "emerald-400"
//   },
//   {
//     img: "https://img.icons8.com/clouds/100/commercial.png",
//     alt: "Marketing",
//     title: "Digital Marketing",
//     desc: "Drive growth with targeted ads and social media campaigns.",
//     color: "from-[#20002c] to-[#cbb4d4]",
//     accent: "fuchsia-400"
//   },
//   {
//     img: "https://img.icons8.com/clouds/100/robot.png",
//     alt: "RPA",
//     title: "Robotic Process",
//     desc: "Automate tasks using UiPath for speed and accuracy.",
//     color: "from-[#C33764] to-[#1D2671]",
//     accent: "indigo-400"
//   },
// ];

// const VerticalHoverCard = () => {
//   const cardsRef = useRef([]);
//   const containerRef = useRef(null);

//   useEffect(() => {
//     // Animate each card individually with GSAP
//     cardsRef.current.forEach((card, index) => {
//       gsap.fromTo(
//         card,
//         { 
//           opacity: 0,
//           y: 50,
//           rotateX: -30
//         },
//         {
//           opacity: 1,
//           y: 0,
//           rotateX: 0,
//           duration: 0.8,
//           delay: index * 0.1,
//           ease: "back.out(1.7)",
//           scrollTrigger: {
//             trigger: card,
//             start: "top 85%",
//             toggleActions: "play none none none"
//           }
//         }
//       );
//     });

//     // Background animation
//     gsap.to(".gradient-bg", {
//       backgroundPosition: "100% 0%",
//       duration: 20,
//       repeat: -1,
//       ease: "linear",
//       yoyo: true
//     });
//   }, []);

//   return (
//     <section
//       ref={containerRef}
//       className="relative overflow-hidden min-h-screen w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8"
//       id="service-container"
//     >
//       {/* Animated gradient background */}
//       <div className="gradient-bg absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 bg-[length:300%_300%]"></div>
      
//       {/* Floating particles */}
//       <div className="absolute inset-0 overflow-hidden">
//         {[...Array(20)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full bg-white/5"
//             initial={{
//               x: Math.random() * 100,
//               y: Math.random() * 100,
//               width: Math.random() * 10 + 2,
//               height: Math.random() * 10 + 2,
//               opacity: Math.random() * 0.5 + 0.1
//             }}
//             animate={{
//               x: Math.random() * 100,
//               y: Math.random() * 100,
//               transition: {
//                 duration: Math.random() * 10 + 10,
//                 repeat: Infinity,
//                 repeatType: "reverse"
//               }
//             }}
//           />
//         ))}
//       </div>

//       {/* Section content */}
//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Section Heading */}
//         <motion.div
//           className="text-center mb-16 lg:mb-24"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true, margin: "-100px" }}
//         >
//           <motion.p 
//             className="text-sm md:text-base font-medium text-purple-400 mb-3"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.2 }}
//             viewport={{ once: true }}
//           >
//             WHAT WE OFFER
//           </motion.p>
//           <motion.h2
//             className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             viewport={{ once: true }}
//           >
//             Comprehensive <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">Digital Solutions</span>
//           </motion.h2>
//           <motion.p
//             className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ delay: 0.4 }}
//             viewport={{ once: true }}
//           >
//             We deliver end-to-end digital experiences that drive growth, enhance engagement, and transform businesses.
//           </motion.p>
//         </motion.div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//           {cardData.map((card, index) => (
//             <motion.div
//               key={index}
//               ref={(el) => (cardsRef.current[index] = el)}
//               className={`group relative h-full bg-gradient-to-br ${card.color} border border-white/10 rounded-2xl overflow-hidden p-8 flex flex-col items-center text-center transition-all duration-500 hover:shadow-lg hover:shadow-${card.accent}/20`}
//               whileHover={{ 
//                 y: -10,
//                 scale: 1.02,
//                 boxShadow: `0 25px 50px -12px rgba(var(--color-${card.accent.replace('-', '-')}), 0.25)`
//               }}
//             >
//               {/* Glow effect */}
//               <div className={`absolute -inset-0.5 bg-gradient-to-r from-${card.accent} to-pink-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>
              
//               {/* Card content */}
//               <div className="relative z-10 w-full h-full flex flex-col items-center">
//                 <div className={`w-20 h-20 rounded-xl bg-gradient-to-br from-${card.accent} to-${card.accent}/70 p-3 mb-6 flex items-center justify-center shadow-md`}>
//                   <img
//                     src={card.img}
//                     alt={card.alt}
//                     className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
//                   />
//                 </div>
//                 <h3 className={`text-2xl font-bold text-${card.accent} mb-4`}>
//                   {card.title}
//                 </h3>
//                 <p className="text-gray-300 mb-6 leading-relaxed">
//                   {card.desc}
//                 </p>
//                 <button 
//                   className={`mt-auto text-sm font-medium text-${card.accent} hover:text-white px-4 py-2 rounded-lg border border-${card.accent}/50 hover:bg-${card.accent}/10 transition-colors duration-300 flex items-center`}
//                 >
//                   Learn more
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </button>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <motion.div 
//           className="mt-24 text-center"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           viewport={{ once: true }}
//         >
//           <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
//             Ready to transform your digital presence?
//           </h3>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <motion.button 
//               className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Get a free consultation
//             </motion.button>
//             <motion.button 
//               className="px-8 py-3.5 bg-transparent border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-all duration-300"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               View all services
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default VerticalHoverCard;


// ideaa 2

// import React, { useEffect, useRef, useState } from "react";
// import { motion, useAnimation } from "framer-motion";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Sphere } from "@react-three/drei";

// gsap.registerPlugin(ScrollTrigger);

// const cardData = [
//   {
//     img: "https://img.icons8.com/clouds/100/web.png",
//     alt: "Website",
//     title: "Custom Website",
//     desc: "Fast, secure, mobile-friendly websites tailored to your brand.",
//     color: "from-purple-500/20 to-purple-800/10",
//     gradient: "bg-gradient-to-r from-purple-400 to-pink-500",
//     textColor: "text-purple-300",
//     borderColor: "border-purple-400/50",
//     hoverColor: "hover:bg-purple-400/10"
//   },
//   {
//     img: "https://img.icons8.com/clouds/100/android.png",
//     alt: "App",
//     title: "Mobile App",
//     desc: "Feature-rich Android & iOS apps with smooth user experience.",
//     color: "from-[#6190E8]/20 to-[#A7BFE8]/10",
//     gradient: "bg-gradient-to-r from-[#6190E8] to-[#A7BFE8]",
//     textColor: "text-[#8ab0ff]",
//     borderColor: "border-[#6190E8]/50",
//     hoverColor: "hover:bg-[#6190E8]/10"
//   },
//   {
//     img: "https://img.icons8.com/clouds/100/adobe-after-effects.png",
//     alt: "Logo",
//     title: "Logo Design",
//     desc: "Unique logos and brand identities ready for all platforms.",
//     color: "from-[#090979]/20 to-[#00D4FF]/10",
//     gradient: "bg-gradient-to-r from-[#090979] to-[#00D4FF]",
//     textColor: "text-[#00D4FF]",
//     borderColor: "border-[#00D4FF]/50",
//     hoverColor: "hover:bg-[#00D4FF]/10"
//   },
//   {
//     img: "https://img.icons8.com/clouds/100/bullish.png",
//     alt: "SEO",
//     title: "SEO Optimization",
//     desc: "Improve Google ranking with complete SEO strategies.",
//     color: "from-[#097970]/20 to-[#00D4FF]/10",
//     gradient: "bg-gradient-to-r from-[#097970] to-[#00D4FF]",
//     textColor: "text-emerald-300",
//     borderColor: "border-emerald-400/50",
//     hoverColor: "hover:bg-emerald-400/10"
//   },
//   {
//     img: "https://img.icons8.com/clouds/100/commercial.png",
//     alt: "Marketing",
//     title: "Digital Marketing",
//     desc: "Drive growth with targeted ads and social media campaigns.",
//     color: "from-[#20002c]/20 to-[#cbb4d4]/10",
//     gradient: "bg-gradient-to-r from-[#20002c] to-[#cbb4d4]",
//     textColor: "text-fuchsia-300",
//     borderColor: "border-fuchsia-400/50",
//     hoverColor: "hover:bg-fuchsia-400/10"
//   },
//   {
//     img: "https://img.icons8.com/clouds/100/robot.png",
//     alt: "RPA",
//     title: "Robotic Process",
//     desc: "Automate tasks using UiPath for speed and accuracy.",
//     color: "from-[#C33764]/20 to-[#1D2671]/10",
//     gradient: "bg-gradient-to-r from-[#C33764] to-[#1D2671]",
//     textColor: "text-indigo-300",
//     borderColor: "border-indigo-400/50",
//     hoverColor: "hover:bg-indigo-400/10"
//   },
// ];

// // 3D Floating Orb Component
// const FloatingOrb = ({ position, color }) => {
//   const meshRef = useRef();
//   const [hovered, setHover] = useState(false);
  
//   useFrame((state, delta) => {
//     meshRef.current.rotation.x += delta * 0.2;
//     meshRef.current.rotation.y += delta * 0.1;
//     meshRef.current.position.y += Math.sin(state.clock.elapsedTime) * 0.01;
//   });

//   return (
//     <Sphere 
//       ref={meshRef}
//       position={position}
//       onPointerOver={() => setHover(true)}
//       onPointerOut={() => setHover(false)}
//     >
//       <meshStandardMaterial 
//         color={color} 
//         emissive={color}
//         emissiveIntensity={hovered ? 0.5 : 0.2}
//         roughness={0.3}
//         metalness={0.7}
//       />
//     </Sphere>
//   );
// };

// // 3D Scene Background
// const ThreeDScene = () => {
//   return (
//     <Canvas camera={{ position: [0, 0, 10], fov: 25 }}>
//       <ambientLight intensity={0.5} />
//       <pointLight position={[10, 10, 10]} intensity={0.8} />
//       <FloatingOrb position={[-3, 1, 0]} color="#8a2be2" />
//       <FloatingOrb position={[3, -1, 0]} color="#1e90ff" />
//       <FloatingOrb position={[0, 2, -5]} color="#ff6347" />
//       <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
//     </Canvas>
//   );
// };

// const VerticalHoverCard = () => {
//   const cardsRef = useRef([]);
//   const containerRef = useRef(null);
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const controls = useAnimation();

//   useEffect(() => {
//     // Animate title section
//     gsap.from(".section-title", {
//       opacity: 0,
//       y: 40,
//       duration: 1,
//       stagger: 0.15,
//       ease: "power3.out",
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top 80%",
//         toggleActions: "play none none none",
//       },
//     });

//     // Animate cards with 3D tilt effect
//     cardsRef.current.forEach((card, index) => {
//       gsap.fromTo(
//         card,
//         {
//           opacity: 0,
//           y: 80,
//           rotationX: -15,
//           transformOrigin: "center bottom",
//         },
//         {
//           opacity: 1,
//           y: 0,
//           rotationX: 0,
//           delay: index * 0.15,
//           duration: 1,
//           ease: "back.out(1.7)",
//           scrollTrigger: {
//             trigger: card,
//             start: "top 85%",
//             toggleActions: "play none none none",
//           },
//         }
//       );
//     });

//     // Background animation
//     gsap.to(".gradient-bg", {
//       backgroundPosition: "100% 0%",
//       duration: 30,
//       repeat: -1,
//       ease: "linear",
//       yoyo: true,
//     });

//     // Interactive cursor effect
//     const cursor = document.querySelector(".custom-cursor");
//     document.addEventListener("mousemove", (e) => {
//       gsap.to(cursor, {
//         x: e.clientX,
//         y: e.clientY,
//         duration: 0.3,
//         ease: "power2.out",
//       });
//     });

//     return () => {
//       document.removeEventListener("mousemove", () => {});
//     };
//   }, []);

//   // Update background when card is hovered
//   useEffect(() => {
//     if (hoveredCard !== null) {
//       controls.start({
//         background: `radial-gradient(circle at center, ${cardData[hoveredCard].textColor.replace('text-', '')}20 0%, transparent 70%)`,
//         transition: { duration: 0.5 }
//       });
//     } else {
//       controls.start({
//         background: "transparent",
//         transition: { duration: 0.5 }
//       });
//     }
//   }, [hoveredCard, controls]);

//   return (
//     <section
//       ref={containerRef}
//       className="relative overflow-hidden min-h-screen w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8"
//       id="service-container"
//     >
//       {/* 3D Background Scene */}
//       <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
//         <ThreeDScene />
//       </div>

//       {/* Gradient background */}
//       <div className="gradient-bg absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 bg-[length:300%_300%]"></div>

//       {/* Custom cursor */}
//       <div className="custom-cursor fixed w-8 h-8 rounded-full border-2 border-white/50 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50 mix-blend-difference backdrop-filter backdrop-blur-sm"></div>

//       {/* Floating particles */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(30)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full bg-white/5"
//             style={{
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               width: `${Math.random() * 10 + 2}px`,
//               height: `${Math.random() * 10 + 2}px`,
//               opacity: Math.random() * 0.5 + 0.1,
//             }}
//             animate={{
//               x: ["0%", `${Math.random() * 100 - 50}%`],
//               y: ["0%", `${Math.random() * 100 - 50}%`],
//               rotate: [0, 360],
//             }}
//             transition={{
//               duration: 30 + Math.random() * 30,
//               repeat: Infinity,
//               repeatType: "reverse",
//               ease: "linear",
//             }}
//           />
//         ))}
//       </div>

//       {/* Section content */}
//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Title */}
//         <div className="text-center mb-16 lg:mb-24">
//           <motion.h4
//             className="section-title text-sm md:text-base font-medium text-purple-400 mb-3"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true, amount: 0.4 }}
//           >
//             WHAT WE OFFER
//           </motion.h4>

//           <motion.h2
//             className="section-title text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.1 }}
//             viewport={{ once: true, amount: 0.4 }}
//           >
//             Comprehensive{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
//               Digital Solutions
//             </span>
//           </motion.h2>

//           <motion.p
//             className="section-title text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
//             initial={{ opacity: 0, y: 40 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true, amount: 0.4 }}
//           >
//             We deliver end-to-end digital experiences that drive growth, enhance engagement, and transform businesses.
//           </motion.p>
//         </div>

//         {/* Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
//           {cardData.map((card, index) => (
//             <motion.div
//               key={index}
//               ref={(el) => (cardsRef.current[index] = el)}
//               className={`group relative h-full bg-gradient-to-br ${card.color} border ${card.borderColor} rounded-2xl overflow-hidden p-8 flex flex-col items-center text-center backdrop-blur-sm`}
//               whileHover={{
//                 y: -15,
//                 scale: 1.03,
//                 rotateX: 5,
//                 rotateY: 5,
//                 boxShadow: `0 25px 50px -12px ${card.textColor.replace('text-', '')}30`,
//                 transition: {
//                   type: "spring",
//                   stiffness: 300,
//                   damping: 15,
//                 },
//               }}
//               onHoverStart={() => setHoveredCard(index)}
//               onHoverEnd={() => setHoveredCard(null)}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//               viewport={{ once: true, amount: 0.2 }}
//             >
//               {/* Hover glow effect */}
//               <motion.div
//                 className={`absolute -inset-0.5 ${card.gradient} rounded-lg blur opacity-0 group-hover:opacity-20`}
//                 animate={index === hoveredCard ? { opacity: 0.2 } : { opacity: 0 }}
//                 transition={{ duration: 0.3 }}
//               />
              
//               <div className="relative z-10 w-full h-full flex flex-col items-center">
//                 {/* 3D inspired icon container */}
//                 <motion.div 
//                   className={`w-20 h-20 rounded-xl ${card.gradient} p-3 mb-6 flex items-center justify-center shadow-lg`}
//                   whileHover={{ 
//                     scale: 1.1,
//                     rotateY: 180,
//                     transition: { duration: 0.6 }
//                   }}
//                 >
//                   <img
//                     src={card.img}
//                     alt={card.alt}
//                     className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
//                   />
//                 </motion.div>
                
//                 <h3 className={`text-2xl font-bold ${card.textColor} mb-4`}>
//                   {card.title}
//                 </h3>
                
//                 <p className="text-gray-200 mb-6 leading-relaxed">
//                   {card.desc}
//                 </p>
                
//                 <motion.button 
//                   className={`mt-auto text-sm font-medium ${card.textColor} hover:text-white px-4 py-2 rounded-lg border ${card.borderColor} ${card.hoverColor} transition-colors duration-300 flex items-center`}
//                   whileHover={{ 
//                     scale: 1.05,
//                     boxShadow: `0 0 15px ${card.textColor.replace('text-', '')}50`,
//                     transition: { duration: 0.2 }
//                   }}
//                   whileTap={{ scale: 0.95 }}
//                 >
//                   Learn more
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </motion.button>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* CTA */}
//         <motion.div
//           className="mt-24 text-center"
//           initial={{ opacity: 0, y: 40 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           viewport={{ once: true, amount: 0.4 }}
//         >
//           <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
//             Ready to transform your digital presence?
//           </h3>
//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <motion.button
//               className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg relative overflow-hidden group"
//               whileHover={{ 
//                 scale: 1.05,
//                 boxShadow: "0 0 25px rgba(192, 132, 252, 0.5)"
//               }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span className="relative z-10">Get a free consultation</span>
//               <motion.span 
//                 className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100"
//                 initial={{ x: "-100%" }}
//                 whileHover={{ x: "0%" }}
//                 transition={{ duration: 0.6 }}
//               />
//             </motion.button>
            
//             <motion.button
//               className="px-8 py-3.5 bg-transparent border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-all duration-300 relative overflow-hidden group"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span className="relative z-10">View all services</span>
//               <motion.span 
//                 className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100"
//                 initial={{ width: "0%" }}
//                 whileHover={{ width: "100%" }}
//                 transition={{ duration: 0.4 }}
//               />
//             </motion.button>
//           </div>
//         </motion.div>
//       </div>

//       {/* Interactive background highlight */}
//       <motion.div 
//         className="absolute inset-0 pointer-events-none"
//         animate={controls}
//         style={{
//           background: "transparent",
//         }}
//       />
//     </section>
//   );
// };

// export default VerticalHoverCard;



import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere } from "@react-three/drei";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Hide scrollbar globally
const hideScrollbar = `
  body::-webkit-scrollbar {
    display: none;
  }
  body {
    -ms-overflow-style: none;
    scrollbar-width: none;
    overflow-x: hidden;
  }
`;

const cardData = [
  {
    img: "https://img.icons8.com/clouds/100/web.png",
    alt: "Website",
    title: "Custom Website",
    desc: "Fast, secure, mobile-friendly websites tailored to your brand.",
    color: "from-purple-500/20 to-purple-800/10",
    gradient: "bg-gradient-to-r from-purple-400 to-pink-500",
    textColor: "text-purple-300",
    borderColor: "border-purple-400/50",
    hoverColor: "hover:bg-purple-400/10"
  },
  {
    img: "https://img.icons8.com/clouds/100/android.png",
    alt: "App",
    title: "Mobile App",
    desc: "Feature-rich Android & iOS apps with smooth user experience.",
    color: "from-[#6190E8]/20 to-[#A7BFE8]/10",
    gradient: "bg-gradient-to-r from-[#6190E8] to-[#A7BFE8]",
    textColor: "text-[#8ab0ff]",
    borderColor: "border-[#6190E8]/50",
    hoverColor: "hover:bg-[#6190E8]/10"
  },
  {
    img: "https://img.icons8.com/clouds/100/adobe-after-effects.png",
    alt: "Logo",
    title: "Logo Design",
    desc: "Unique logos and brand identities ready for all platforms.",
    color: "from-[#090979]/20 to-[#00D4FF]/10",
    gradient: "bg-gradient-to-r from-[#090979] to-[#00D4FF]",
    textColor: "text-[#00D4FF]",
    borderColor: "border-[#00D4FF]/50",
    hoverColor: "hover:bg-[#00D4FF]/10"
  },
  {
    img: "https://img.icons8.com/clouds/100/bullish.png",
    alt: "SEO",
    title: "SEO Optimization",
    desc: "Improve Google ranking with complete SEO strategies.",
    color: "from-[#097970]/20 to-[#00D4FF]/10",
    gradient: "bg-gradient-to-r from-[#097970] to-[#00D4FF]",
    textColor: "text-emerald-300",
    borderColor: "border-emerald-400/50",
    hoverColor: "hover:bg-emerald-400/10"
  },
  {
    img: "https://img.icons8.com/clouds/100/commercial.png",
    alt: "Marketing",
    title: "Digital Marketing",
    desc: "Drive growth with targeted ads and social media campaigns.",
    color: "from-[#20002c]/20 to-[#cbb4d4]/10",
    gradient: "bg-gradient-to-r from-[#20002c] to-[#cbb4d4]",
    textColor: "text-fuchsia-300",
    borderColor: "border-fuchsia-400/50",
    hoverColor: "hover:bg-fuchsia-400/10"
  },
  {
    img: "https://img.icons8.com/clouds/100/robot.png",
    alt: "RPA",
    title: "Robotic Process",
    desc: "Automate tasks using UiPath for speed and accuracy.",
    color: "from-[#C33764]/20 to-[#1D2671]/10",
    gradient: "bg-gradient-to-r from-[#C33764] to-[#1D2671]",
    textColor: "text-indigo-300",
    borderColor: "border-indigo-400/50",
    hoverColor: "hover:bg-indigo-400/10"
  },
];

// 3D Floating Orb Component
const FloatingOrb = ({ position, color }) => {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.15;
    meshRef.current.rotation.y += delta * 0.1;
    meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.5) * 0.01;
  });

  return (
    <Sphere ref={meshRef} position={position}>
      <meshStandardMaterial 
        color={color} 
        emissive={color}
        emissiveIntensity={0.3}
        roughness={0.3}
        metalness={0.7}
      />
    </Sphere>
  );
};

// 3D Scene Background
const ThreeDScene = () => {
  return (
    <Canvas 
      camera={{ position: [0, 0, 10], fov: 25 }}
      gl={{ antialias: true, alpha: true }}
      performance={{ min: 0.5 }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={0.6} />
      <FloatingOrb position={[-3, 1, 0]} color="#8a2be2" />
      <FloatingOrb position={[3, -1, 0]} color="#1e90ff" />
      <FloatingOrb position={[0, 2, -5]} color="#ff6347" />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false} 
        enableRotate={false} 
      />
    </Canvas>
  );
};

const VerticalHoverCard = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
  
  // Parallax effects
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

  useEffect(() => {
    // Apply scrollbar hiding style
    const style = document.createElement('style');
    style.innerHTML = hideScrollbar;
    document.head.appendChild(style);

    // Smooth scroll behavior
    const smoothScroll = () => {
      document.documentElement.style.scrollBehavior = 'smooth';
      return () => {
        document.documentElement.style.scrollBehavior = 'auto';
      };
    };
    
    const cleanup = smoothScroll();
    
    // GSAP animations
    gsap.utils.toArray(".card").forEach((card, index) => {
      gsap.from(card, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: index * 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%",
          toggleActions: "play none none none",
        }
      });
    });

    return () => {
      cleanup();
      document.head.removeChild(style);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden min-h-screen w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8"
      style={{ willChange: 'transform' }}
    >
      {/* 3D Background Scene */}
      <div className="absolute inset-0 w-full h-full opacity-10 pointer-events-none">
        <ThreeDScene />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/5"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
            }}
            animate={{
              x: [0, `${Math.random() * 100 - 50}%`],
              y: [0, `${Math.random() * 100 - 50}%`],
              opacity: [0.1, 0.5, 0.1],
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Section content with parallax */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto"
        style={{ y: y2 }}
      >
        {/* Title */}
        <motion.div 
          className="text-center mb-16 lg:mb-24"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h4
            className="text-sm md:text-base font-medium text-purple-400 mb-3"
          >
            WHAT WE OFFER
          </motion.h4>

          <motion.h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Comprehensive{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
              Digital Solutions
            </span>
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            We deliver end-to-end digital experiences that drive growth, enhance engagement, and transform businesses.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className={`card group relative h-full bg-gradient-to-br ${card.color} border ${card.borderColor} rounded-2xl overflow-hidden p-8 flex flex-col items-center text-center backdrop-blur-sm`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ 
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                damping: 10,
                stiffness: 100
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {/* Card content remains the same */}
              <div className="relative z-10 w-full h-full flex flex-col items-center">
                <motion.div 
                  className={`w-20 h-20 rounded-xl ${card.gradient} p-3 mb-6 flex items-center justify-center shadow-lg`}
                  whileHover={{ 
                    scale: 1.1,
                    transition: { duration: 0.3 }
                  }}
                >
                  <img
                    src={card.img}
                    alt={card.alt}
                    className="w-12 h-12 object-contain"
                  />
                </motion.div>
                
                <h3 className={`text-2xl font-bold ${card.textColor} mb-4`}>
                  {card.title}
                </h3>
                
                <p className="text-gray-200 mb-6 leading-relaxed">
                  {card.desc}
                </p>
                
                {/* <motion.button 
                  className={`mt-auto text-sm font-medium ${card.textColor} hover:text-white px-4 py-2 rounded-lg border ${card.borderColor} ${card.hoverColor} transition-colors duration-300 flex items-center`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button> */}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        {/* <motion.div
          className="mt-24 text-center"
          style={{ opacity }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-6">
            Ready to transform your digital presence?
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              className="px-8 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-lg relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get a free consultation
            </motion.button>
            
            <motion.button
              className="px-8 py-3.5 bg-transparent border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View all services
            </motion.button>
          </div>
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default VerticalHoverCard;