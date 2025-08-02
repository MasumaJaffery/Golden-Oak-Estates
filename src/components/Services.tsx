import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import servicesBg from "../imgs/Golden Oak/servicebg.jpg"; // Replace with your image path
import { FiArrowRight } from "react-icons/fi";

const Services: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const services = [
    {
      title: "Luxurious Home Sales",
      description: "Exclusive properties with premium amenities, tailored to your sophisticated lifestyle.",
      link: "#"
    },
    {
      title: "Property Management",
      description: "Comprehensive care for your investment with our professional management services.",
      link: "#"
    },
    {
      title: "Custom Home Design",
      description: "Bespoke architectural solutions to create your dream residence from the ground up.",
      link: "#"
    },
    {
      title: "Prime Concierge Services",
      description: "Personalized assistance for all your needs, from maintenance to lifestyle services.",
      link: "#"
    }
  ];

  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center border-b-8 border-white"
      id="services"
    >
      {/* Background Photo */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${servicesBg})` }}
      ></div>

      {/* Gold Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-gold bg-opacity-80"></div>
      {/* Content */}
      <div className="relative z-10 w-full px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white" data-aos="fade-up">
            Our Services
          </h2>
          <p className="text-xl text-white mt-4 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="100">
            Premium real estate services tailored to your luxury lifestyle
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white bg-opacity-90 overflow-hidden shadow-xl transform hover:scale-105 transition duration-500"
              data-aos="fade-up"
              data-aos-delay={200 + (index * 100)}
            >
              <div className="p-6 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 flex-grow">{service.description}</p>
                <a
                  href={service.link}
                  className="mt-4 inline-flex items-center text-gold font-semibold hover:text-gold-dark transition duration-300 group"
                >
                  Learn more
                  <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;