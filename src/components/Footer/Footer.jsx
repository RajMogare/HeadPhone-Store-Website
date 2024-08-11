import React from "react";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaPhone,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import Cards from "../../assets/credit-cards.webp";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <>
      <footer className="text-white bg-primary">
        <div className="container pt-12 pb-8 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 pr-10 pl-10  md:grid-cols-3">
            {/* company detail section */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              className="space-y-6"
            >
              <h1 className="text-3xl font-bold uppercase">Playing</h1>
              <p className="text-sm max-w-[300px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                placeat quidem quos accusan.
              </p>
              <div>
                <p className="flex items-center gap-2">
                  <FaPhone />
                  +91 9876543210
                </p>
                <p className="flex items-center gap-2 mt-2">
                  {" "}
                  <FaMapLocation />
                  Thane, Maharashtra
                </p>
              </div>
            </motion.div>
            {/* footer link section */}
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.4,
              }}
              className="space-y-6"
            >
              <h1 className="text-3xl font-bold uppercase">Quick Links</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Privacy Policy</li>
                  </ul>
                </div>
              </div>
            </motion.div>
            {/* social link section */}

            <motion.div
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                duration: 0.6,
              }}
              className="space-y-6 "
            >
              <h1 className="text-3xl font-bold uppercase">Follow Us</h1>
              <div className="flex items-center gap-4">
                <FaFacebook className="text-3xl hover:scale-105 duration-300" />
                <FaInstagram className="text-3xl hover:scale-105 duration-300" />
                <FaTelegram className="text-3xl hover:scale-105 duration-300" />
                <FaGoogle className="text-3xl hover:scale-105 duration-300" />
                <FaWhatsapp className="text-3xl hover:scale-105 duration-300" />
              </div>
              <div className="space-y-2">
                <p>Payment Methods</p>
                <img src={Cards} alt="" className="w-[80%]" />
              </div>
            </motion.div>
          </div>

          {/* copyright section */}
          <p className="text-white text-center mt-8 border-t-2 pt-8 ">
            @ 2024 All Rights Reserved{" "}
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
