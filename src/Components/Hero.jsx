 


import React from "react";
import "@fontsource/bebas-neue"; 
import Heroimg from "../Asset/Heroimg1.png";
import { motion } from "framer-motion";  

function Hero() {
  return (
    <section className="relative h-screen flex justify-center items-center bg-gray-950">
      {/* Container without border */}
      <div className="relative w-[100%] h-[95%] p-[1px] bg-gray-950 flex justify-center items-center bg-contain rounded-lg">
        {/* Background Image */}
        <div className="relative w-full h-full bg-gray-950 flex justify-center items-center rounded-lg">
          <img
            src={Heroimg}
            alt="Cyberpunk background"
            className="w-full h-full object-cover   rounded-tr-3xl rounded-tl-3xl rounded-bl-2xl rounded-br-2xl opacity-30"
          />
        </div>
      </div>

      {/* Hero Content */}
      <div className="absolute text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold font-bebas text-white bg-gradient-to-r 
                     from-purple-400 via-pink-500 to-red-500 text-transparent 
                     bg-clip-text drop-shadow-lg text-center"
        >
         <span className="bg-gradient-to-r from-blue-400 via-white to-purple-400 inline-block text-transparent bg-clip-text"> Welcome to Weepek: </span> Your Web Development Partner
        </motion.h1>
        <p className="text-base md:text-2xl font-normal text-gray-300 mt-8 text-center leading-relaxed p-2">
          At <span className="font-semibold">Weepek</span>, we specialize in creating 
          <span className="  font-bold"> stunning websites </span> that drive results. 
          Explore our innovative services and elevate your online presence today.
        </p>
      </div>
    </section>
  );
}

export default Hero;
