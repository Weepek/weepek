import React from "react";
import { motion } from "framer-motion";
import featuresimg from "../Asset/featuresimg.png";
import { ReactTyped } from "react-typed";

function Project() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }, // Reduced from 0.1 to 0.05 for faster stagger
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 900,  
        damping: 5,    
      },
    },
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto px-6">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left - Content */}
          <motion.div
            className="flex-1 flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
            }}
          >
            <img
              src={featuresimg}
              alt="Development illustration"
              className="w-full max-w-[500px] md:max-w-[700px] rounded-lg shadow-2xl transition-all duration-500 hover:scale-105"
            />
          </motion.div>
    
           {/* Right - Content */}
       
          <motion.div className="flex-1">
            <motion.span
              className="text-white mb-8 uppercase tracking-wider"
              variants={fadeInVariants}
            >
              Excellence Project
            </motion.span>

            <motion.h2
              className="text-xl  lg:text-4xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mt-8"
              variants={fadeInVariants}
            >
              <ReactTyped
                strings={["Your Partner in Quality", "Web Development "]}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </motion.h2>

            <motion.p className="text-white mb-8 mt-5 text-lg leading-relaxed">
              {"At Weepek, we pride ourselves on delivering top-notch web and app development services tailored to your needs. Our commitment to quality ensures that your projects excel in performance and user experience."
                .split("")
                .map((char, index) => (
                  <motion.span key={index}  >
                    {char}
                  </motion.span>
                ))}
            </motion.p>

            <motion.div className="flex space-x-4" variants={fadeInVariants}>
             
            <a href="https://cakees-fooi.onrender.com/" target="_blank" rel="noopener noreferrer">
           <button className="px-6 py-3 rounded-md text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:opacity-90 transition-colors">
           View Project
            </button>
           </a>

            </motion.div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}

export default Project;