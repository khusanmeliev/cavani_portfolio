import React from "react";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Services from "./pages/Services/Services";

const App = () => {
  return (
    <>
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact />
    </>
  );
};

export default App;
