import React from "react";
import Router from "./Router/Router";
import Hero from "./components/Hero/Hero";
import Search from "./components/Search/Search";
import Contact from "./components/contact/Contact";
import Showcase from "./components/Showcase/Showcase";
import State from "./components/states/State";
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <>
      <div className="fixed inset-0 -z-10 h-full w-full bg-[#0F172A]"> </div>
      <ToastContainer theme="dark" />
      <Hero />
      <Search />
      <Showcase/>
      <Router />
      <State/>
      <Contact />
    </>
  );
};

export default App;
