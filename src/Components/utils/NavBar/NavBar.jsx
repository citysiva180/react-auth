import React from "react";
import logo from "../../images/strangeLogo.png";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const NavBar = ({ user }) => {
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
          <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
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
          </Link>
        </Navbar.Brand>
        {user ? (
          <>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Logout : <a href="#login">DefenderStrangeD1203</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </>
        ) : (
          <Link to="/login" style={{ color: "white", textDecoration: "none" }}>
            Login
          </Link>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;

// font-family: 'Alfa Slab One', cursive;
// font-family: 'Playfair Display SC', serif;
