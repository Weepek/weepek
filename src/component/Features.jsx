
import React from "react";
import { motion } from "framer-motion";
import { ReactTyped } from "react-typed";
import Aboutus from "../assets/contact.png";


function AboutUs() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  };


  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        
        {/* About Us Section */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left - Content */}
          <motion.div className="flex-1">
            <motion.h2
              className="text-3xl lg:text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
            >
              <ReactTyped
                strings={["Who We Are?", "About Us!"]}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </motion.h2>
            <motion.p className="text-white text-lg leading-relaxed mb-6" variants={letterVariants}>
  Empowering Businesses with <span className="text-[#3B82F6] font-semibold">Cutting-Edge Digital Solutions.</span>  
  At <strong className="text-[#06B6D4]">Weepek</strong>, we specialize in innovative <span className="text-[#E879F9] font-semibold">Web</span> and <span className="text-[#FACC15] font-semibold">Mobile</span> app development, helping businesses thrive in the digital landscape. Our expertise lies in <span className="text-[#A855F7] font-semibold">custom software solutions, UI/UX design,</span> and scalable applications that deliver exceptional user experiences and business growth.
</motion.p>



          </motion.div>

          {/* Right - Image */}
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
              src={Aboutus}
              alt="About Us Illustration"
              className="w-full max-w-[500px] md:max-w-[400px] rounded-lg shadow-2xl transition-all duration-500 hover:scale-105"
            />
          </motion.div>
        </motion.div>

        {/* What We Do Section */}
        {/* <motion.div
          className="mt-16 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="text-4xl font-bold mb-6 text-blue-400" variants={fadeInVariants}>
            <ReactTyped
              strings={["What We Do?", "Our Services!"]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </motion.h2>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Web Development", desc: "Fast, secure & modern websites." },
              { title: "App Development", desc: "Native & cross-platform mobile apps." },
              { title: "E-Commerce", desc: "Seamless online stores with secure payments." },
              { title: "UI/UX Design", desc: "Visually stunning & user-friendly experiences." },
              { title: "Custom Software", desc: "Tailored solutions for business automation." },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-800 rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
                variants={fadeInVariants}
              >
                <h3 className="text-xl font-semibold text-blue-400">{item.title}</h3>
                <p className="text-gray-400 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div> */}

        {/* Why Choose Us Section */}
        <motion.div
          className="mt-16 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="text-4xl font-bold mb-10 text-purple-400" variants={fadeInVariants}>
            <ReactTyped
              strings={["Why Choose Us?", "Our Strengths!"]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </motion.h2>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Expert Team", desc: "Skilled developers & designers." },
              { title: "Client-Centric", desc: "Your vision, our execution." },
              { title: "Latest Tech", desc: "React, Node.js, Flutter & more." },
              { title: "Secure & Scalable", desc: "Future-proof digital solutions." },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="p-6 bg-gray-800 rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
                variants={fadeInVariants}
              >
                <h3 className="text-xl font-semibold text-purple-400">{item.title}</h3>
                <p className="text-gray-400 mt-2">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Image replacing "Get in Touch" */}
          {/* <motion.div
            className="mt-8 flex justify-center"
            variants={fadeInVariants}
          >
            <img
              src={Aboutus2}
              alt="Why Choose Us"
              className="rounded-lg shadow-lg max-w-full md:max-w-md transition-all duration-500 hover:scale-105"
            />
          </motion.div> */}

          {/* Call to Action */}
          {/* <motion.h3 className="text-3xl font-bold mt-10 text-green-400" variants={fadeInVariants}>
            <ReactTyped
              strings={["Let's Build Something Amazing!", "Turn Your Ideas into Reality!"]}
              typeSpeed={50}
              backSpeed={30}
              loop
            />
          </motion.h3>
          <motion.p className="text-lg mt-2 text-gray-300" variants={fadeInVariants}>
            Have a project in mind? Let’s discuss how we can bring your vision to life!
          </motion.p> */}
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;