import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import VideoBg from "../imgs/Golden Oak/about.mp4";

import tree from "../imgs/Golden Oak/tree.png";
import tree2 from "../imgs/Golden Oak/tree - Copy.png";

const About: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <section
      className="relative w-full h-screen flex items-center justify-center border-b-8 border-white"
      id="about"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={VideoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gold bg-opacity-100"></div>

      {/* Left Bottom Tree */}
      <img
        src={tree}
        alt="Golden Oak Tree"
        className="absolute bottom-0 right-0 w-1/4 max-w-xs"
        data-aos="fade-up"
      />

      {/* Right Bottom Tree */}
      <img
        src={tree2}
        alt="Golden Oak Tree"
        className="absolute bottom-0 left-0 w-1/4 max-w-xs"
        data-aos="fade-up"
      />

      {/* Content */}
      <div className="relative z-10 flex justify-center w-full px-6">
        <div
          className="bg-white bg-opacity-100 p-8 md:p-12 shadow-xl w-full max-w-3xl text-center"
          data-aos="fade-up"
        >
          <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
          <p className="text-lg text-gray-700 mt-4">
            A prestigious residential community designed for luxury, comfort, and natural beauty. Nestled among towering oak trees, our estate offers modern living with serene landscapes and high-end amenities. Here, elegance meets tranquility, creating a perfect sanctuary for those who seek both sophistication and peace. With thoughtfully designed homes, lush green spaces, and world-class facilities, Golden Oak Estates is more than just a residence—it's a lifestyle of exclusivity and refinement.
          </p>
          
          {/* Button to new website */}
          <a
            href="https://splendorhomesllc.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-gold text-white font-bold py-3 px-6 shadow-md hover:bg-opacity-90 transition duration-300"
          >
            Explore More
            
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
