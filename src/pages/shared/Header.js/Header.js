import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <Navbar expand="lg">
      <Container className="py-3">
        <Navbar.Brand href="#">
          <img
            src="http://www.emailmug.com/premium-template/bg/paxos/paxos2.png"
          
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="#action1">Summer</Nav.Link>
            <Nav.Link href="#action2">Destination</Nav.Link>
            <Nav.Link href="#action2">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
