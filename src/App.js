import React from "react";
import logo from "./logo.svg";
import { Container } from "react-bootstrap";
import "./App.css";
import About from "./component/About";
import AboutMe from "./component/AboutMe";
import Project from "./component/Project";
import FooterCustom from "./component/FooterCustom";

import NavbarCustom from "./component/NavbarCustom";

function App() {
  return (
    <div className="contains">
      <About />
      {/* <NavbarCustom /> */}
      <AboutMe />
      <hr></hr>
      <Project />
      <hr></hr>
      <FooterCustom />
    </div>
  );
}

export default App;
