import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import { FaReact } from "react-icons/fa";
import { FaProjectDiagram, FaNodeJs } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";

const Showcase = () => {
  let stack = [
    {
      name: "Javascript",
      icon: IoLogoJavascript,
      link: "/",
    },
    {
      name: "React",
      icon: FaReact,
      link: "/react",
    },
    {
      name: "FullStack",
      icon: FaNodeJs,
      link: "/fullstack",
    },
    {
      name: "All",
      icon: FaProjectDiagram,
      link: "/all",
    },
  ];

  return (
    <div className="text-gray-400 mt-12 body-font flex flex-col items-center text-center w-full mb-8">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
        Showcase of Frontend & Backend Mastery
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
        Explore my diverse portfolio featuring cutting-edge frontend and robust
        backend projects, demonstrating my expertise and passion for web
        development.
      </p>
      <motion.div
        initial={{ opacity: 0, x: -100 }} // Initial animation state (off-screen to the left)
        animate={{ opacity: 1, x: 0 }} // Animation when component mounts (move to original position)
        transition={{ duration: 0.5, delay: 0.2 }} // Animation duration and delay
        className="px-9 flex-wrap flex justify-around items-center gap-5 h-20 my-14"
      >
        {stack.map((item, index) => (
          <Link
            to={item.link}
            key={index}
            className="flex flex-col items-center gap-2 hover:text-white"
          >
            <item.icon className="text-5xl" />
            <p>{item.name}</p>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default Showcase;
