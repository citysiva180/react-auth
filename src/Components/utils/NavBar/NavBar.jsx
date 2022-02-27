import React from "react";
import logo from "../../images/strangeLogo.png";
import { Navbar, Container, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
// import profile from "../../images/DefenderStrange101.png";
const NavBar = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
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
              <Navbar.Text></Navbar.Text>
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <img
                    src={user.photos[0].value}
                    alt="strange-profile"
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: " 50%",
                      objectFit: "cover",
                    }}
                  />{" "}
                  {user.displayName}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-2">Profile</Dropdown.Item>
                  <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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
