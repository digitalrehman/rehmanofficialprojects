import React, { useContext, useState, useEffect } from "react";
import { LuSearchCode } from "react-icons/lu";
import { CardContext } from "../../context/Productprovider";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // Import useInView hook

const Search = () => {
  const {
    html,
    setDisplayCard,
    setReactDisplay,
    setNodeDisplay,
    react,
    node,
  } = useContext(CardContext);

  const [search, setSearch] = useState("");
  const [ref, inView] = useInView({ triggerOnce: true }); // useInView hook to detect when the component is in view

  const searchHandler = (e) => {
    e.preventDefault();
    const searchTerm = search.toLowerCase().trim();

    if (searchTerm) {
      // Filter cards based on search term
      const filteredHtml = html.filter((value) =>
        value.title.toLowerCase().includes(searchTerm)
      );
      const filteredReact = react.filter((value) =>
        value.title.toLowerCase().includes(searchTerm)
      );
      const filteredNode = node.filter((value) =>
        value.title.toLowerCase().includes(searchTerm)
      );

      // Combine all filtered results
      const combinedResults = [
        ...filteredHtml,
        ...filteredReact,
        ...filteredNode,
      ];

      // Set display for each category with animation
      setDisplayCard(combinedResults);
      setReactDisplay(filteredReact);
      setNodeDisplay(filteredNode);
    } else {
      // If search is empty, show all cards with animation
      setDisplayCard(html);
      setReactDisplay(react);
      setNodeDisplay(node);
    }
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <form className="max-w-md mx-auto">
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <LuSearchCode className="w-6 h-6 text-gray-500" />
        </div>
        <motion.input
          type="search"
          onChange={handleInputChange}
          value={search}
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search Mockups, Logos..."
          initial={{ opacity: 0, y: -20 }} // Initial animation state
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          ref={ref} // Assign the ref from useInView
          style={{ opacity: inView ? 1 : 0 }} // Fade in animation when in view
          required
        />
        <motion.button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ opacity: inView ? 1 : 0 }} // Fade in animation when in view
        >
          Search
        </motion.button>
      </div>
    </form>
  );
};

export default Search;
