 


import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo3.png";
import { ToggleLeft , ToggleRight } from 'lucide-react';



function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isInHome, setIsInHome] = useState(true); // to detect home section

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "project", label: "Project" },
    { id: "Contact", label: "Contact Us" },
  ];

  const services = ["Landing Page", "E-commerce Page", "Mobile App", "Custom Website"];

  // Detect if Home is in view
  useEffect(() => {
    const homeSection = document.getElementById("home");
    const observer = new IntersectionObserver(
      ([entry]) => setIsInHome(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (homeSection) observer.observe(homeSection);
    return () => homeSection && observer.unobserve(homeSection);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "9418dc6a-6fa2-4fd2-b812-99070a75a8bb");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      event.target.reset();
      setSelectedService("");
      setIsModalOpen(false);
      setShowSuccessPopup(true);
      setTimeout(() => setShowSuccessPopup(false), 10000);
    } else {
      console.log("Error", data);
    }
  };

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  return (
    <>
      {/* Success Popup */}
      {showSuccessPopup && (
        <motion.div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
          <div className="bg-gray-950 text-white px-6 py-3 rounded-b-lg shadow-lg">
            Your message has been sent! We will get in touch soon.
          </div>
        </motion.div>
      )}

      {/* Navbar (visible only on home screen) */}
      {isInHome && (
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed w-[90%] md:w-[70%] lg:w-[80%] left-1/2 -translate-x-1/2 z-50 bg-white/10 backdrop-blur-md border border-white/20 rounded-b-3xl"
        >
          <div className="container mx-auto px-4 sm:px-6 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img className="w-12" src={logo} alt="Eepek logo" />
                <div
                  className="text-3xl font-bold bg-gradient-to-r from-[#6E3AD6] to-[#5A91E2] text-transparent bg-clip-text cursor-pointer"
                  onClick={() => scrollToSection("home")}
                  aria-label="Go to home section"
                >
                  eepek
                </div>
              </div>

              <div className="hidden md:flex md:items-center md:space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.id}
                    to="/"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className="text-primary text-xl hover:text-third transition-colors duration-200"
                    aria-label={`Go to ${item.label} section`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>

              <div className="hidden md:flex items-center space-x-4">
                <button
                  className="relative px-4 py-2 border border-purple-200 text-white rounded-full group overflow-hidden"
                  onClick={() => setIsModalOpen(true)}
                  aria-label="Open contact form"
                >
                  <span className="relative z-10">Get In Touch</span>
                </button>
              </div>

              <button
                className="md:hidden text-primary focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>

            {isOpen && (
              <motion.div
                className="md:hidden bg-gray-950 rounded-b-2xl shadow-lg mt-2"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={menuVariants}
              >
                <div className="pt-4 pb-2 space-y-4 text-center">
                  {navItems.map((item) => (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                      className="block text-primary hover:text-blue-400"
                      aria-label={`Go to ${item.label} section`}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                  <div className="mt-4">
                    <button
                      className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg"
                      onClick={() => setIsModalOpen(true)}
                      aria-label="Open contact form"
                    >
                      Join
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.nav>
      )}

      {/* Floating Button for other pages (visible outside home, positioned top-right) */}
      {!isInHome && (
  <motion.div
    initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.8 }}
    className="fixed top-6 right-6 z-50"
  >
    <div className="relative">
      <motion.button
        className="floating-button bg-gradient-to-r from-[#6E3AD6] to-[#5A91E2] p-3 rounded-full shadow-lg text-white hover:shadow-xl transition-shadow"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        animate={{ rotate: isOpen ? 0 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {isOpen ? (
          <ToggleRight  className="w-6 h-6" />
        ) : (
          <ToggleLeft  className="w-6 h-6" />
        )}
      </motion.button>
      {isOpen && (
        <motion.div
          className="absolute right-0 top-14 bg-white/95 backdrop-blur-sm rounded-xl shadow-xl border border-white/20 p-4 w-48"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) =>
            item.id && "home" ? (
              <motion.button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id);
                  setIsOpen(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    scrollToSection(item.id);
                    setIsOpen(false);
                  }
                }}
                tabIndex={0}
                className="block text-sm font-medium text-gray-800 hover:text-blue-500 w-full text-left py-2 px-3 rounded-md hover:bg-gray-100/50 transition-colors"
                aria-label={`Go to ${item.label} section`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ) : null
          )}
        </motion.div>
      )}
    </div>
  </motion.div>
       )}

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md z-50">
          <motion.div
            className="relative bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl p-6 w-[90%] max-w-md rounded-2xl"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <button
              onClick={() => {
                setIsModalOpen(false);
                setSelectedService("");
              }}
              className="absolute top-3 right-3 text-white"
              aria-label="Close contact form"
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-xl font-semibold text-white text-center">Join Us</h2>
            <form className="mt-6 space-y-4" onSubmit={onSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-white/20 text-white border rounded-lg"
                required
                aria-label="Your name"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-white/20 text-white border rounded-lg"
                required
                aria-label="Your email"
              />
              <input
                type="text"
                name="Mobile Number"
                placeholder="Mobile Number"
                className="w-full px-4 py-2 bg-white/20 text-white border rounded-lg"
                required
                aria-label="Your mobile number"
              />
              <select
                name="service"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-2 bg-white/20 text-white border rounded-lg"
                required
                aria-label="Select a service"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((service, index) => (
                  <option key={index} value={service} className="text-black">
                    {service}
                  </option>
                ))}
              </select>
              <textarea
                name="message"
                rows="4"
                placeholder="Write your message..."
                className="w-full px-4 py-2 bg-white/20 text-white border rounded-lg"
                required
                aria-label="Your message"
              ></textarea>
              <button
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg"
                aria-label="Send message"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default Navbar;