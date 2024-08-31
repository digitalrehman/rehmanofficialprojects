import React, { useEffect } from "react";
import background from "../../assets/background.jpg";
const Hero = () => {
  const handleSubscribe = () => {
    window.open(
      "https://www.youtube.com/channel/UCN2JChIIDbeZbLo5vKvBsQA?sub_confirmation=1",
      "_blank"
    );
  };
  return (
    <div className="px-4 font-[Inter] md:px-0 h-screen w-full flex flex-col items-center justify-center gap-8 text-white">
      <img
        className="absolute top-0 left-0 -z-10 w-full h-full object-cover"
        src={background}
      />
      <p className="text-sm tracking-widest">DYNAMIC WEB MAGIC WITH REACT.JS</p>
      <h1 className="font-rock md:text-6xl sm:text-4xl text-3xl font-thin text-center">
        Transforming Concepts into Seamless <br />
        <span className="text-blue-600">
          {" "}
          {""}
          User Experiences
        </span>
      </h1>
      <p className="md:text-xl text-xl text-center font-nowRegular ">
        Experiences Hi! I'm{" "}
        <span className="text-blue-600 font-semibold text-center">
          Abdul Rehman
        </span>
        , a Next.js Developer based in Croatia.
      </p>
      <div
        onClick={handleSubscribe}
        class="cursor-pointer relative inline-flex items-center justify-center px-6 py-3 overflow-hidden font-bold text-white rounded-md shadow-2xl group"
      >
        <span className="absolute inset-0 w-full h-full transition duration-300 ease-out opacity-0 bg-gradient-to-br from-blue-600 via-blue-900 to-blue-400 group-hover:opacity-100"></span>
        <span className="absolute top-0 left-0 w-full bg-gradient-to-b from-white to-transparent opacity-5 h-1/3"></span>
        <span className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-white to-transparent opacity-5"></span>
        <span className="absolute bottom-0 left-0 w-4 h-full bg-gradient-to-r from-white to-transparent opacity-5"></span>
        <span className="absolute bottom-0 right-0 w-4 h-full bg-gradient-to-l from-white to-transparent opacity-5"></span>
        <span className="absolute inset-0 w-full h-full border border-white rounded-md opacity-10"></span>
        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-5"></span>
        <span className="relative">Subscribe</span>
      </div>
    </div>
  );
};

export default Hero;
