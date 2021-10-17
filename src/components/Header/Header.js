import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "./../../assets/images/logo.png";
import HeaderBG from "./../../assets/images/header-bg.png";

import { NavLink } from "react-router-dom";
import useAuth from "./../../hooks/useAuth";

const Header = () => {
  useAuth();
  const { user, logOut } = useAuth();
  const { displayName, photoURL, email } = user;
  return (
    <div className="sticky-top">
      <Navbar style={{ background: `url(${HeaderBG})` }} expand="lg">
        <Container>
          <Navbar.Brand to="/home" as={NavLink} className="text-white">
            <img width="70px" src={logo} alt="Logo" /> Course Club Inistitute
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link as={NavLink} className="text-white" to="/home">
                HOME
              </Nav.Link>
              <Nav.Link as={NavLink} className="text-white" to="/about">
                ABOUT
              </Nav.Link>
              <Nav.Link as={NavLink} className="text-white" to="/courses">
                COURSES
              </Nav.Link>
              <Nav.Link className="text-white" as={NavLink} to="/contact">
                CONTACT
              </Nav.Link>
              {!user.displayName ? (
                <>
                  <Nav.Link className="text-white" as={NavLink} to="/login">
                    LOGIN
                  </Nav.Link>

                  <Nav.Link className="text-white" as={NavLink} to="/signup">
                    SIGN UP
                  </Nav.Link>
                </>
              ) : (
                <NavDropdown
                  title={
                    <img
                      style={{ width: "45px", borderRadius: "50%" }}
                      src={photoURL}
                      alt=""
                    ></img>
                  }
                >
                  <div className="text-center">
                    <h6>{displayName}</h6>
                    <p className="m-0 mb-2">{email}</p>
                    <button onClick={logOut} className="btn btn-primary">
                      Sign Out
                    </button>
                  </div>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
