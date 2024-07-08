import { createContext, useEffect, useState } from "react";
import { projects } from "../assets/index";
import { reactCard } from "../assets/react";
import { fullStackProject } from "../assets/fullstack";

let CardContext = createContext();

let Productprovider = ({ children }) => {
  let [html, setHtml] = useState([]);
  let [react, setReact] = useState([]);
  let [node, setNode] = useState([]);
  let [reactDisplay, setReactDisplay] = useState([]);
  let [nodeDisplay, setNodeDisplay] = useState([]);
  let [displayCard, setDisplayCard] = useState([]);

  let fetchData = () => {
    let projectData = projects.map((value) => value);
    setHtml(projectData);
    setDisplayCard(projectData);
  };
  let fetchDataReact = () => {
    let projectReact = reactCard.map((value) => value);
    setReact(projectReact);
    setReactDisplay(projectReact);
  };
  let fullStackData = ()=>{
    let projectDataFullstack = fullStackProject.map((value)=>value);
    setNode(projectDataFullstack);
    setNodeDisplay(projectDataFullstack);
  }

  useEffect(() => {
    fetchData();
    fetchDataReact();
    fullStackData();
  }, []);

  return (
    <CardContext.Provider
      value={{
        html,
        setHtml,
        displayCard,
        setDisplayCard,
        react,
        setReact,
        reactDisplay,
        setReactDisplay,
        node,
        setNode,
        nodeDisplay,
        setNodeDisplay,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export { CardContext, Productprovider };
