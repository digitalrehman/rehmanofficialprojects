import React from "react";

const Images = ({ project }) => {
  return (
    <>
      <img
        alt="Product screenshot"
        src={project.imageUrl}
        width={2432}
        height={1642}
        className="w-[48rem] h-[32rem] object-cover max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
      />
    </>
  );
};

export default Images;
