import React, { useEffect, useState } from "react";
import { FaTwitter, FaFacebookF, FaInstagram, FaGooglePlusG, FaLinkedinIn } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import Logo from "../imgs/Golden Oak/footer_logo.png";

const Footer: React.FC = () => {
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const handleSubscribe = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setIsSubscribed(true);
        setErrorMessage("");
      } else {
        setErrorMessage("Error. Please try again.");
      }
    } catch (error) {
      setErrorMessage("Error. Please try again.");
    }
  };

  return (
    <footer id="footer">
      {/* Main Footer Section */}
      <div className="bg-footer text-black py-10 p-12 border-t-8 border-gold2">
        <div className="container mx-auto">
          <div className="flex flex-wrap -mx-4">
            {/* Logo & Description */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0" data-aos="fade-up">
              <img className="w-24 md:w-72 mb-4" src={Logo} alt="logo" />
              <p className="text-white">
                Golden Oak Estates works with a commitment to quality, elegance, and timeless design, we create living spaces that blend luxury with comfort.
              </p>
            </div>

            {/* Useful Links */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0 border-l-2 border-gold2" data-aos="fade-up" data-aos-delay="200">
              <h4 className="text-lg font-semibold mb-4 text-text1 flex justify-center">Useful Links</h4>
              <ul className="space-y-2 flex flex-col justify-center align-center text-white text-center">
                <li><a href="/" className="hover:text-gold">Home</a></li>
                <li><a href="/about" className="hover:text-gold">About us</a></li>
                <li><a href="/privacy-policy" className="hover:text-gold">Privacy Policy</a></li>
                <li><a href="/terms-of-services" className="hover:text-gold"> Terms of Services</a></li>
              </ul>
            </div>

            {/* Subscribe Form */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0 border-l-2 border-gold2 flex-col" data-aos="fade-up" data-aos-delay="400">
              <h4 className="text-lg font-semibold mb-4 text-text1 flex justify-center">Subscribe</h4>
              <p className="pb-6 flex justify-center text-white">Sign up to receive the latest updates</p>
              <form className="subscribe-form" action="https://formspree.io/f/xeqyykpz" method="POST" onSubmit={handleSubscribe}>
                <div className="mb-2.5">
                  <input type="email" name="email" placeholder="Enter email address"
                    className="w-full p-2 border rounded text-black" required disabled={isSubscribed} />
                </div>
                <button type="submit"
                  className={`w-full p-2 rounded text-white ${isSubscribed ? "bg-gold" : "bg-gold2 hover:bg-gold"}`}
                  style={{ fontWeight: "600" }}
                  disabled={isSubscribed}
                >
                  {isSubscribed ? "Subscribed" : "Subscribe Now"}
                </button>
                {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
              </form>
            </div>

            {/* Contact Information */}
            <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 md:mb-0 border-l-2 border-gold2" data-aos="fade-up" data-aos-delay="600">
              <h4 className="text-lg font-semibold mb-4 text-text1 flex justify-center">Contact Us</h4>
              <p className="flex flex-col justify-center text-white text-center">
                150 Mercer Street, Suite 1206 Highstown
                NJ 08520, United States
                (609) 375-8828<br />
               mail@splendorhomesllc.com<br />
              </p>
              <div className="mt-4 flex space-x-4 justify-center">
                <a href="#" className="text-white hover:text-gold"><FaTwitter /></a>
                <a href="#" className="text-white hover:text-gold"><FaFacebookF /></a>
                <a href="#" target="_blank" className="text-white hover:text-gold"><FaInstagram /></a>
                <a href="mailto:mail@splendorhomesllc.com" className="text-white hover:text-gold"><FaGooglePlusG /></a>
                <a href="#" className="text-white hover:text-gold"><FaLinkedinIn /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="bg-gold2 text-white py-4 text-center">
        Copyright &copy; {new Date().getFullYear()} Golden Oak Estates LLC.
      </div>
    </footer>
  );
};

export default Footer;
