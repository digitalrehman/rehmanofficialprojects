import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import background from "../../assets/background.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  const controls = useAnimation();

  const handleSubscribe = () => {
    window.open(
      "https://www.youtube.com/channel/UCN2JChIIDbeZbLo5vKvBsQA?sub_confirmation=1",
      "_blank"
    );
  };

  useEffect(() => {
    controls.start({
      x: 0,
      opacity: 1,
      transition: { duration: 1 }
    });
  }, [controls]);

  return (
    <div className="px-4 font-[Inter] md:px-0 h-screen w-full flex flex-col items-center justify-center gap-8 text-white relative overflow-hidden">
      <img
        className="absolute top-0 left-0 z-0 w-full h-full object-cover"
        src={background}
        alt="Background"
      />
      <motion.div
        className="z-10 text-center"
        initial={{ x: -300, opacity: 0 }}
        animate={controls}
      >
        <p className="text-sm">DYNAMIC WEB MAGIC WITH REACT.JS</p>
        <h1 className="md:text-7xl sm:text-5xl text-3xl font-bold text-center">
          Transforming Concepts <br /> into Seamless
          <span className="text-blue-600">
            {" "}
            {""}
            User <br /> Experiences
          </span>
        </h1>
        <p className="md:text-2xl text-xl">
          Hi! I'm{" "}
          <span className="text-blue-600 font-semibold">Abdul Rehman</span>, a
          Next.js Developer based in Croatia.
        </p>
      </motion.div>
      <motion.div
        onClick={handleSubscribe}
        className="z-10 cursor-pointer relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
        initial={{ x: 300, opacity: 0 }}
        animate={controls}
        transition={{ delay: 0.5, duration: 2 }}
      >
        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-blue-600 via-blue-900 to-blue-400 group-hover:opacity-100"></span>
        <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
        <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
        <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
        <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
        <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
        <span className="relative">Subscribe</span>
      </motion.div>
    </div>
  );
};

export default Hero;
