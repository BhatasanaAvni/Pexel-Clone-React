import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLocation, useNavigate } from "react-router";
import TopNavbar from "./TopNavbar";

const Navbar = ({ setsearch }) => {
  const Navigate = useNavigate();
  const location = useLocation();

  return (
    <>
    <TopNavbar/>
    <div className="topnavbar"></div>
    <div className="d-flex flex-wrap justify-content-between align-items-center container ">
      {/* //d-none d-sm-block */}
        <Button
          variant="outline-light my-3"
          size="lg"
          onClick={() => {
            setsearch("nature");
            Navigate("/");
          }}
        >
          Nature
        </Button>{" "}
        <Button
          variant="outline-light  my-3"
          size="lg"
          onClick={() => {
            setsearch("Travel");
            Navigate("/");
          }}
        >
          Travel
        </Button>{" "}
        <Button
          variant="outline-light my-3"
          size="lg"
          onClick={() => {
            setsearch("City");
            Navigate("/");
          }}
        >
          City
        </Button>{" "}
        <Button
          variant="outline-light my-3"
          size="lg"
          onClick={() => {
            setsearch("Cars");
            Navigate("/");
          }}
        >
          Cars
        </Button>{" "}
        <Button
          variant="outline-light my-3"
          size="lg"
          onClick={() => {
            setsearch("Fashion");
            Navigate("/");
          }}
        >
          Fashion
        </Button>{" "}
        <Button
          variant="outline-light my-3"
          size="lg"
          onClick={() => {
            setsearch("Animals");
            Navigate("/");
          }}
        >
          Animals
        </Button>{" "}
        <Button
          variant="outline-light my-3"
          size="lg"
          onClick={() => {
            setsearch("Business&Finance");
            Navigate("/");
          }}
        >
          Business&Finance
        </Button>{" "}
        <Button
          variant="outline-light my-3"
          size="lg"
          onClick={() => {
            setsearch("Tokyo");
            Navigate("/");
          }}
        >
          Tokyo
        </Button>
        <Button
          variant="outline-light my-3"
          size="lg"
          onClick={() => {
            setsearch("Dubai");
            Navigate("/");
          }}
        >
          Dubai
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
      <div className="container">
        <Form.Group
          className=" m-auto"
          controlId="formBasicEmail"
          style={{ width: "100%", maxWidth: "780px" }}
        >
          {/* =========saved page in input out========== */}
          {location.pathname === "/" && (
            <Form.Control
              type="email"
              placeholder="Search......."
              className="bg-dark text-light custom-placeholder my-3"
              onChange={(e) => setsearch(e.target.value)}
            />
          )}
        </Form.Group>
      </div>
    </>
  );
};

export default Navbar;
