import React from "react";
import styled from "styled-components";
import { images } from "./constants";

import Header from "./container/Header";
import GlobalStyles from "./container/styles/Global";
import About from "./container/About";
import Services from "./components/Services";
import Tools from "./components/Tools";
import Work from "./container/Work";
import Contact from "./container/Contact";
import Socials from "./components/Socials";
import NavDots from "./components/NavDots";
import Footer from "./container/Footer";

const StyledBg = styled.div`
  background-image: url(${images.newbg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: max-content;
`;

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Socials />
      <NavDots />
      <StyledBg>
        <About />
        <Services />
        <Tools />
        <Work />
        <Contact />
        <Footer />
      </StyledBg>
    </>
  );
};

export default App;
