import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import NavbarCustom from "./NavbarCustom"

export default function About() {
  return (
    <>
      <NavbarCustom />
      <Container fluid className="about" id="home">
        <h1>Hello World</h1>
        <p>
          My name is <span className="highlight">Nguyen Anh Khoa</span>. I'm
          half the way to be a fullstack developer
        </p>
        <a href="#project">
          <button className="btn-custom btn-1f">View my works</button>
        </a>
      </Container>
    </>
  );
}
