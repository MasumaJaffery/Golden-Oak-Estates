import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "../imgs/Golden Oak/footer_logo.png";
import VideoBg from "../imgs/Golden Oak/home.mp4"; // Your video file
import FallbackImg from "../imgs/Golden Oak/contact.jpeg"; // Optional fallback image

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="relative h-screen bg-gray-900 text-white overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={VideoBg} type="video/mp4" />
          {/* Show image if video fails */}
          <img src={FallbackImg} alt="Fallback" className="w-full h-full object-cover" />
        </video>
      </div>


      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <img className="w-52 md:w-80 sm:40 mb-4 cursor-pointer" src={Logo} alt="logo" />
        <h2 data-aos="fade-up" data-aos-delay="200" className="text-lg md:text-xl lg:text-2xl mb-8 text-white">
        Where luxury real estates meets nature tranquility.
        </h2>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <Link
            to="contact"
            data-aos="fade-up"
            data-aos-delay="400"
            className="px-6 py-3 bg-gold1 text-white hover:bg-gold transition w-full md:w-auto text-center"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
