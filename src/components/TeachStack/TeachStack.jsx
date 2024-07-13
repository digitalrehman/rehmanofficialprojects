import React from "react";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiFirebase } from "react-icons/si";
import { IconContext } from "react-icons";
import { SiTailwindcss } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";
import { SiTypescript } from "react-icons/si";
const iconMap = {
  HTML: <IoLogoHtml5 className="flex-shrink-0 size-5" />,
  CSS: <IoLogoCss3 className="flex-shrink-0 size-5" />,
  JavaScript: <IoLogoJavascript className="flex-shrink-0 size-5" />,
  React: <FaReact className="flex-shrink-0 size-5" />,
  Firebase: <SiFirebase className="flex-shrink-0 size-5" />,
  Tailwind: <SiTailwindcss className="flex-shrink-0 size-5" />,
  Redux: <SiRedux className="flex-shrink-0 size-5" />,
  MongoDB: <SiMongodb className="flex-shrink-0 size-5" />,
  Express: <SiExpress className="flex-shrink-0 size-5" />,
  Node: <TbBrandNodejs className="flex-shrink-0 size-5" />,
  Typescript: <SiTypescript className="flex-shrink-0 size-5" />,
};

const TeachStack = ({ project }) => {
  return (
    <div className="mt-11">
      <h1 className="text-3xl font-bold text-white my-5">Tech Stack</h1>
      <ul className="flex flex-col sm:flex-row">
        {project.techStack.map((tech, index) => (
          <li
            key={index}
            className="hover:bg-[#0F172A] hover:text-white duration-300 cursor-pointer inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg"
          >
            <IconContext.Provider value={{ size: "1.5em" }}>
              {iconMap[tech] ? iconMap[tech] : <div>{tech}</div>}
            </IconContext.Provider>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeachStack;
