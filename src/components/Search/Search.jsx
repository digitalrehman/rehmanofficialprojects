import React, { useContext, useState } from "react";

import { LuSearchCode } from "react-icons/lu";
import { CardContext } from "../../context/Productprovider";
const Search = () => {
  let { html,setDisplayCard,setReactDisplay,react,node,setNodeDisplay } = useContext(CardContext);
  let [search, setSearch] = useState("");
  let searchHadler = (e) => {
    e.preventDefault();
    if(search){
      let result = html && react && node.filter((value) => {
        return value.title.toLowerCase().includes(search.toLowerCase());
      });
     setDisplayCard(result);
     setReactDisplay(result);
     setNodeDisplay(result);
    }else{
      setDisplayCard(html);
      setReactDisplay(react);
      setNodeDisplay(node);
    }
    e.target.reset();
  }
  return (
  
<form className="max-w-md mx-auto" onSubmit={searchHadler}>   
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <LuSearchCode className="w-6 h-6 text-gray-500 dark:text-gray-400" />
        </div>
        <input type="search"  onChange={(e) => setSearch(e.target.value)}  id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

  );
};

export default Search;
