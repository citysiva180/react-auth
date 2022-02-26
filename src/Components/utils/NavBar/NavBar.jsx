import React from "react";
import logo from "../../images/strangeLogo.png";
import { Navbar, Container } from "react-bootstrap";
const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand
          href="#home"
          style={{
            fontFamily: "'Playfair Display SC', serif",
            fontSize: "30px",
          }}
        >
          <img
            src={logo}
            alt="dr.strangeLogo"
            style={{
              width: "50px",
              height: "50px",
              border: "solid gold 2px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          {"            "}
          Something Strange!!
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Logout : <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

// font-family: 'Alfa Slab One', cursive;
// font-family: 'Playfair Display SC', serif;
