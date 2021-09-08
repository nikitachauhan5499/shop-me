import React from "react";
import { Nav, Navbar, Container } from "react-bootstrap";

const Header = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg" variant="light">
        <Container>
          <Navbar.Brand href="#home">Shop Me!</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">
                <i class="fas fa-shopping-cart"></i>
                  &nbsp; Cart</Nav.Link>
              <Nav.Link href="#link">
                <i class="far fa-user-circle"></i>
                &nbsp; Sign in
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
