import React, { useState, useEffect } from "react";
import AOS from "aos";
import img from '../imgs/Golden Oak/contact.jpeg';
import "aos/dist/aos.css";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("https://getform.io/f/byvkxypa", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setErrorMessage("");
      } else {
        setErrorMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="relative bg-cover bg-center min-h-screen flex items-center justify-center" id="contact"
    style={{ backgroundImage: `url(${img})` }}>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gold opacity-80"></div>

      {/* Contact Form Container */}
      <div
        className="relative z-10 bg-white p-8 md:p-12 shadow-xl w-full max-w-3xl text-center"
        data-aos="fade-up"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
        <p className="text-gray-600 mb-6">We'd love to hear from you! Fill in the form below.</p>

        {isSubmitted ? (
          <p className="text-green-500 font-semibold">Thank you! Your message has been sent.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" name="name" placeholder="Your Name" required value={formData.name} 
              onChange={handleChange} className="w-full p-3 border border-gray-300 focus:ring focus:ring-black" />

            <input type="email" name="email" placeholder="Your Email" required value={formData.email} 
              onChange={handleChange} className="w-full p-3 border border-gray-300 focus:ring focus:ring-black" />

            <textarea name="message" rows={4} placeholder="Your Message" required value={formData.message} 
              onChange={handleChange} className="w-full p-3 border border-gray-300 focus:ring focus:ring-black"></textarea>

            <button type="submit" className=" bg-gold text-white p-3 hover:bg-gold2 transition">
              Send Message
            </button>

            {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
