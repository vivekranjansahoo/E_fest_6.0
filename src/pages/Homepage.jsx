import React, { useEffect } from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import ReactGA from "react-ga";
import Cube from "../components/Cube/Cube";
import Guest from "../components/Guest/Guest";
import Timeline from "../components/Timeline/Timeline";
import Sponers from "../components/Sponsers/Sponers";

const Homepage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });
  return (
    <>
      <Hero />
      <Cube />
      <About />
      <Guest />
      <Timeline />
      {/* <Sponers /> */}
      <Contact />
    </>
  );
};

export default Homepage;
