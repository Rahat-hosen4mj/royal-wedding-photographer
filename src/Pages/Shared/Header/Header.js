import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../../../images/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        sticky="top"
        expand="lg"
        bg="success"
        variant="dark"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img height={"55px"} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home#services">Services</Nav.Link>
              <Nav.Link href="home#previousWork">Previous Work</Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link href="">Contact</Nav.Link>
              <Nav.Link href="">Blog</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
