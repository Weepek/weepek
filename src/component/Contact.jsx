 


import React, { useState } from "react";
import { FaInstagram, FaWhatsapp, FaFacebook, FaTwitter } from "react-icons/fa";

function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    try {
      const formData = new FormData(event.target);
      formData.append("access_key", "9418dc6a-6fa2-4fd2-b812-99070a75a8bb");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form submitted successfully!");
        event.target.reset();
      } else {
        console.error("Form submission failed:", {
          message: data.message,
          code: data.code,
          details: data.errors || "No additional details provided",
        });
        setResult(`Error: ${data.message || "Something went wrong. Please try again."}`);
      }
    } catch (error) {
      console.error("Network or unexpected error during form submission:", {
        error: error.message,
        stack: error.stack,
      });
      setResult("Network error: Unable to submit the form. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative bg-black">
      <h1 className="text-3xl font-bold text-center text-purple-400 pt-6">Contact Us</h1>
      <p className={`text-center mt-2 ${result.includes("Error") ? "text-red-400" : "text-green-400"}`}>{result}</p>

      <div className="relative flex flex-col md:flex-row items-center justify-center w-full bg-black h-auto">

        <div className="relative flex flex-col md:flex-row items-center justify-center w-full gap-8 md:gap-4 bg-black bg-opacity-50 p-6 my-10">
          
          {/* Contact Form */}
          <div className="relative flex items-center justify-center w-full lg:w-4/12">
            <div className="bg-white/20 bg-opacity-10 backdrop-blur-lg shadow-lg rounded-2xl p-6 w-full max-w-lg border border-white border-opacity-30">
              <form className="space-y-3" onSubmit={onSubmit}>
                <div>
                  <label className="block text-white text-sm font-medium mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-2 border border-white border-opacity-30 bg-white/10 bg-opacity-20 text-white placeholder-white placeholder-opacity-70 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                    placeholder="Eg: John Doe"  
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-1">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    pattern="[0-9]{10}"
                    className="w-full px-4 py-2 border border-white border-opacity-30 bg-white/10 bg-opacity-20 text-white placeholder-white placeholder-opacity-70 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                    placeholder="eg: 1234567890"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 border border-white border-opacity-30 bg-white/10 bg-opacity-20 text-white placeholder-white placeholder-opacity-70 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                    placeholder="Eg: Johndeo@gmail.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-1">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    className="w-full px-4 py-2 border border-white border-opacity-30 bg-white/10 bg-opacity-20 text-white placeholder-white placeholder-opacity-70 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
                    placeholder="Write your message..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-2 rounded-lg transition ${
                    isSubmitting ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600"
                  } text-white`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="relative flex items-center justify-center w-full lg:w-4/12 p-1">
            <div className="bg-white/20 bg-opacity-20 backdrop-blur-lg shadow-lg rounded-2xl p-6 text-white text-center w-full max-w-lg border border-white border-opacity-30">
              <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
              <div className="mb-4 p-3 border-b border-white border-opacity-20">
                <h4 className="text-lg font-light mb-1">Founder</h4>
                <p className="text-lg font-semibold text-purple-400 mb-2">Poornima</p>
                <p className="text-sm mb-1 break-all">
                  ✉{" "}
                  <a
                    href="mailto:poornima220500@gmail.com"
                    className="hover:text-blue-300 transition font-mono text-sm text-wrap"
                  >
                    poornima.weepek@gmail.com
                  </a>
                </p>
              </div>
              {/* Social Media Links */}
              <div className="flex justify-center gap-6 mt-4">
                <a
                  href="https://www.instagram.com/weepek_?igsh=MTU2MTJqcW1iY3N1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-400 text-2xl hover:text-pink-500 transition"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://wa.me/7010039610"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 text-2xl hover:text-green-500 transition"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-2xl hover:text-blue-600 transition"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 text-2xl hover:text-blue-500 transition"
                >
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
}

export default Contact;
 