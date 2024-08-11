import React from "react";
import HeadPhone4 from "../../assets/headphone4.png";
import { motion } from "framer-motion";
import { UpdateFollower } from "react-mouse-follower";
import { fadeUp } from "../Services/Services";

const Banner = () => {
  return (
    <>
      <section>
        <div className="container py-14 grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0 gap-12">
          {/* banner image */}
          <div className="m-auto">
            <motion.img
              initial={{ opacity: 0, x: -100, rotate: -180 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut", delay: 0.2 }}
              src={HeadPhone4}
              alt=""
              className="w-[300px] md:w-[400px]"
            />
          </div>
          {/* banner text */}
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
              <motion.h1
                variants={fadeUp(0.7)}
                initial="hidden"
                whileInView="show"
                className="text-3xl lg:text-4xl font-semibold font-poppins"
              >
                The Latest HeadPhones With The Latest Techonolgy
              </motion.h1>
              <motion.p
                variants={fadeUp(0.9)}
                initial="hidden"
                whileInView="show"
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
                et aut quae accusantium animi doloremque placeat rem dolor sit
                amet !
              </motion.p>
              <UpdateFollower></UpdateFollower>
              <motion.button
                variants={fadeUp(1.2)}
                initial="hidden"
                whileInView="show"
                className="border-2 border-[#e33343] text-[#e33343] px-6 py-2 rounded-md hover:bg-[#e33343] hover:text-white"
              >
                Shop Now
              </motion.button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
