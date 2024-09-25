import React from "react";
import { Navbar, Nav, NavItem, NavLink, Button } from "react-bootstrap";
import favImage from "../assets/favicon.png";
import { useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
const TopNavbar = () => {
  const Navigate = useNavigate();
  const location = useLocation();
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <div className={` bg-black fixed-top  ${sticky ? "dark-nav" : ""}`}>
      <Navbar expand="lg" className="container ">
        <Navbar.Brand href="#home">
          <img
            src={favImage}
            alt="Logo"
            width="40"
            height="40"
            className="rounded"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto px-4" variant="light">
            <NavItem>
              <NavLink href="#home" className="text-white">
                Home
              </NavLink>
            </NavItem>
           
          </Nav>
          <div className="d-flex gap-5">

          <Button variant="outline-light my-3" size="lg" href="#join">
            Join
          </Button>
          {location.pathname == "/saved" ? (
            <Button
              variant="outline-light my-3"
              size="lg"
              onClick={() => Navigate("/")}
            >
              Home
            </Button>
          ) : (
            <Button
              variant="outline-light my-3"
              size="lg"
              onClick={() => Navigate("/saved")}
            >
              Saved
            </Button>
          )}
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default TopNavbar;
