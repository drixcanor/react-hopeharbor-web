import React from "react";
import { HERO_CONTENT } from "../constants";
import { profilePic } from "../assets";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

const Hero = () => {
  const handleRedirect = () => {
    window.open("https://t.me/HopeHarborQBC", "_blank");
  };

  return (
    <section className="border-b border-neutral-900 pb-4 lg:mb-36 mt-4 lg:mt-0"> {/* Adjusted margin-top and padding-bottom */}
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-6xl tracking-tight text-transparent"
            >
              Welcome to the
            </motion.span>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-6xl tracking-tight text-transparent"
            >
              Hope Harbor Team!
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify"
            >
              {HERO_CONTENT}
            </motion.p>
            <motion.button
              variants={container(1)}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="bg-purple-600 text-white px-4 py-2 rounded-md mt-4 transition-all duration-300 font-bold text-lg"
              onClick={handleRedirect}
            >
              Join us
            </motion.button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="object-contain w-[550px] h-[550px] rounded-2xl"
              src={profilePic}
              alt="Profile Picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
