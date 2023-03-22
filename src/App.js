import React from "react";
import styled from "styled-components";
import { images } from "./constants";

import Header from "./container/Header";
import GlobalStyles from "./container/styles/Global";
import About from "./container/About";
import Services from "./components/Services";
import Tools from "./components/Tools";
import Contact from "./container/Contact";
import Socials from "./components/Socials";
import NavDots from "./components/NavDots";
import Footer from "./container/Footer";
import Projects from "./container/Projects";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Socials />
      <NavDots />
      <About />
      <Services />
      <Tools />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
