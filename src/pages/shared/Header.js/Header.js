import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const Header = () => {
  const { user, logout } = useAuth();
  return (
    <Navbar expand="lg">
      <Container className="py-3">
        <Navbar.Brand as={Link} to="/">
          <img
            src="http://www.emailmug.com/premium-template/bg/paxos/paxos2.png"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="ms-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/booking">
              Destination
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About Us
            </Nav.Link>
            {!user.email ? (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </>
            ) : (
              <>   <Nav.Link as={Link} to="/myorder">
              My Order
            </Nav.Link>
                <Nav.Link as={Link} to="/manage">
              Manage
            </Nav.Link>
                <Nav.Link className="fw-bold">{user.displayName}</Nav.Link>
                <Nav.Link
                  onClick={() => logout()}
                  className="fw-bold bg-dark text-white rounded"
                >
                  Logout
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
