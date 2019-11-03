import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function NavbarCustom() {
  return (
    <Navbar id="custom-nav" expand="lg" bg="dark" variant="white" fixed="top">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className='cl-effect-1'>
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#project">My Project</Nav.Link>
          <Nav.Link href="#aboutme">About me</Nav.Link>
          <Nav.Link href="#footer">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
    </Navbar>
  );
}
