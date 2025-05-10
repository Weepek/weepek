"use client"
import { motion } from "framer-motion"
import { ReactTyped } from "react-typed"
import ser1img from "../Asset/ser1img.png";
import ser2img from "../Asset/ser2img.png";
import ser3img from "../Asset/ser3img.png";
import ser4img from '../Asset/ser5img.png';
import bac from '../Asset/ser2.png';

const serviceDetails = [
  {
    iconPath: `${ser1img}`,
    title: "WEB & APP DEVELOPMENT",
    description: "Unlock the magic of app development with tailored, responsive solutions.",
  },
  {
    iconPath:  `${ser2img}`,
    title: "SERVICE & SUPPORT",
    description: "Reliable assistance and maintenance to keep your digital platforms running smoothly.",
  },
  {
    iconPath: `${ser3img}`,
    title: "SEO & DOMAIN",
    description: "Optimize your online presence with expert SEO and seamless domain management.",
  },
  {
    iconPath:`${ser4img}` , // Using the same image as a fallback
    title: "UI/UX DESIGN",
    description: "Craft intuitive and engaging user experiences through thoughtful design.",
  },
]

function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  }

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 300, damping: 10 },
    },
  }

  const cardContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.6,
      },
    },
  }

  // Handle image error by providing a fallback
  const handleImageError = (e) => {
    e.target.onerror = null // Prevent infinite loop
    e.target.src = "" // Fallback image
  }

  return (
    <section className="py-20 bg-gray-950">
      <div className="container mx-auto">
        <motion.div
          className="mb-20 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h2 className="text-4xl font-bold text-blue-400" variants={fadeInVariants}>
            <ReactTyped strings={["What We Do?", "Our Services!"]} typeSpeed={50} backSpeed={30} loop />
          </motion.h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 xl:gap-12 2xl:gap-40 max-w-6xl mx-auto mt-6"
          variants={cardContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {serviceDetails.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="p-8 rounded-custom-2xl bg-gradient-to-br from-purple-900/50 to-blue-900/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all group relative overflow-hidden h-96 w-64 mx-auto"
              style={{
                backgroundImage: `url(${bac})`, // Using a common background from public folder
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                borderRadius: "2.5rem",
              }}
            >
              <div className="absolute inset-0 bg-black/50 z-0"></div>
              <div className="relative z-10 flex flex-col h-full justify-start space-y-6">
                <div>
                  <div className="w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-all">
                    <img
                      src={service.iconPath}
                      alt={service.title}
                      onError={handleImageError}
                      className="max-w-full max-h-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services

