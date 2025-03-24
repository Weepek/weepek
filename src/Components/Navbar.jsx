import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeInOut" } },
  };

  const popupVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeInOut" } },
  };

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
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      event.target.reset();
      setSelectedService(""); // Reset dropdown
      setIsModalOpen(false); // Close modal
      setShowSuccessPopup(true); // Show success popup
      setTimeout(() => setShowSuccessPopup(false), 10000); // Hide popup after 3 seconds
    } else {
      console.log("Error", data);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "project", label: "Project" },
    { id: "contact", label: "Contact Us" },
   
  ];

  const services = ["Landing Page", "E-commerce Page", "Mobile App", "Custom Website"];

  return (
    <>
      {/* Success Popup */}
      {showSuccessPopup && (
        <motion.div
          className="fixed top-0 left-0 right-0 z-50 flex justify-center"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={popupVariants}
        >
          <div className="bg-gray-950 text-white px-6 py-3 rounded-b-lg shadow-lg">
            Your message has been sent! We will get in touch soon.
          </div>
        </motion.div>
      )}

      <nav className="fixed w-[60%] left-1/2 -translate-x-1/2 z-50 bg-gray-900 shadow-lg rounded-b-3xl">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          {/* <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary cursor-pointer" onClick={() => scrollToSection("home")}>Weepek</div>
            <div className="hidden md:flex md:items-center md:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to="/"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className="text-primary hover:text-third transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" onClick={() => setIsModalOpen(true)}>Join</button>
            </div>
            <button className="md:hidden text-primary focus:outline-none" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div> */}
        {/* logo */}
       <div className="flex items-center justify-between">
  <div 
    className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text cursor-pointer" 
    onClick={() => scrollToSection("home")}
  >
    Weepek
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
        className="text-primary hover:text-third transition-colors duration-200"
      >
        {item.label}
      </Link>
    ))}
  </div>
     <div className="hidden md:flex items-center space-x-4">
    <button 
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" 
      onClick={() => setIsModalOpen(true)}
    >
      Join
    </button>
  </div>
  <button 
    className="md:hidden text-primary focus:outline-none" 
    onClick={() => setIsOpen(!isOpen)} 
    aria-label="Toggle menu"
  >
    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
     </button>
        </div>
          {isOpen && (
            <motion.div className="md:hidden bg-gray-950 rounded-b-2xl shadow-lg mt-2" initial="hidden" animate="visible" exit="hidden" variants={menuVariants}>
              <div className="pt-4 pb-2 space-y-4 text-center">
                {navItems.map((item) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className="block text-primary hover:text-blue-400 transition-colors duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <div className="mt-4 space-y-2">
                  <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" onClick={() => setIsModalOpen(true)}>Join</button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </nav>

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
              className="absolute top-3 right-3 text-white hover:text-gray-300"
            >
              <X className="w-6 h-6" />
            </button>

            <h2 className="text-xl font-semibold text-white text-center">Join Us</h2>

            <form className="mt-6 space-y-4" onSubmit={onSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
                <input
                type="text"
                name="Mobile Number"
                placeholder="Mobile Number"
                className="w-full px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              />
              <select
                name="service"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-4 py-2 bg-white/20 text-white border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
                required
              >
                <option value="" disabled>Select a service</option>
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
                className="w-full px-4 py-2 bg-white/20 text-white placeholder-gray-300 border border-white/30 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none resize-none"
                required
              ></textarea>
              <button
                type="submit"
                className="w-full py-2 mt-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300"
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