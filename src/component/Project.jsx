import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import featureimg from "../assets/pro1.png";

function Project() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 10 },
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
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            className="text-white uppercase tracking-wider"
            variants={fadeInVariants}
          >
            Excellence Project
          </motion.span>
          <motion.h2
            className="text-xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mt-4"
            variants={fadeInVariants}
          >
            <ReactTyped
              strings={["Your Partner in Quality", "Web Development"]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </motion.h2>
        </motion.div>

        {/* Grid Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Card 1 */}
          <motion.a
            href="https://cakees-fooi.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative block overflow-hidden rounded-lg group"
            variants={cardVariants}
          >
            <img
              src={featureimg}
              alt="Techvenchure project"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 p-4 bg-gradient-to-t from-black/70 to-transparent w-full">
              <h3 className="text-yellow-100 text-2xl font-bold">
                Cake'es
              </h3>
              <div className="text-xl text-yellow-100  mt-2 ">UI/UX &Website</div>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Project;