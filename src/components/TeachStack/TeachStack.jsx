import React from "react";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoCss3, IoLogoHtml5 } from "react-icons/io5";
const TeachStack = ({ project }) => {
  return (
    <div className="mt-11">
      <h1 className="text-3xl font-bold text-white my-5">Teach Stack</h1>
      <ul className="flex flex-col sm:flex-row">
        <li className=" hover:bg-[#0F172A] hover:text-white duration-300 cursor-pointer inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg">
          <IoLogoHtml5 className="flex-shrink-0 size-5" />
          {project.techStack[0]}
        </li>
        <li className="hover:bg-[#0F172A] hover:text-white duration-300 cursor-pointer inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg">
          <IoLogoCss3 className="flex-shrink-0 size-5" />
          {project.techStack[1]}
        </li>
        <li className="hover:bg-[#0F172A] hover:text-white duration-300 cursor-pointer inline-flex items-center gap-x-2.5 py-3 px-4 text-sm font-medium bg-white border border-gray-200 text-gray-800 -mt-px first:rounded-t-lg first:mt-0 last:rounded-b-lg sm:-ms-px sm:mt-0 sm:first:rounded-se-none sm:first:rounded-es-lg sm:last:rounded-es-none sm:last:rounded-se-lg">
          <IoLogoJavascript className="flex-shrink-0 size-5" />
          {project.techStack[2]} 
        </li>
      </ul>
    </div>
  );
};

export default TeachStack;
