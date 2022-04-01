import { render } from "@testing-library/react";
import React, { Component } from "react";
import { Navbar, Nav,  NavDropdown } from "react-bootstrap";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AirlineApi from "../apis/AirlineApis";
//import jwt from "../apis/AirlineApis";

// var logedin;
// if (jwt === "") {
//   logedin = false;
// } else {
//   logedin = true;
// }
var logedin = true;

function MainNav() {

  const handleSubmit = () => {
    console.log("jwt");

    logedin = AirlineApi.isLogedin();
    
    console.log(logedin);
  
    logedin = false;
  };
    return (
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand>
            <Link to="/" className="nav-link">
              Tulip
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link>
                <Link to="/Airlines" className="nav-link">
                  Airlines
                </Link>
              </Nav.Link>

              <Nav.Link>
                <Link to="/Reviews" className="nav-link">
                  Reviews
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/MyReviews" className="nav-link">
                  My Reviews
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/AddReview" className="nav-link">
                  Add Review
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/AddAirline" className="nav-link">
                  Add Airline
                </Link>
              </Nav.Link>

              {/* <Nav.Link>
                <NavDropdown title="noadmin" id="navbarScrollingDropdown">
                  <NavDropdown.Item>
                    <Link to="/AddAirline" className="nav-link">
                      Add Airline
                    </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav.Link> */}
            </Nav>
            {/* <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form> */}
      {logedin &&
            (<Nav.Link>
              <Button variant="outline-success">
                <Link to="/Login" className="nav-link">
                  Login
                </Link>
              </Button>
            </Nav.Link>)
}
{logedin &&
            (<Nav.Link>
              <Button variant="outline-success">
                <Link to="/Register" className="nav-link">
                  Register
                </Link>
              </Button>
            </Nav.Link>)
}
  <Nav.Link>
              <Button variant="outline-success" onClick={handleSubmit}>
                <Link to="/" className="nav-link">
                  Logout 
                </Link>
              </Button>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default MainNav;
