import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap";
import { Container, Form, FormControl, Button } from "react-bootstrap";
import { render } from "react-dom";
import { Link } from "react-router-dom";

class MainNav extends Component {
  render() {
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
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/Airlines" className="nav-link">
                  Airlines
                </Link>
              </Nav.Link>
              {/* <NavDropdown title="Airlines" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown> */}
              <Nav.Link>
                <Link to="/Reviews" className="nav-link">
                  Reviews
                </Link>
              </Nav.Link>

              <Nav.Link disabled>
                <Link to="/" className="nav-link">
                  Admin Page
                </Link>
              </Nav.Link>
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
            <Nav.Link>
              <Button variant="outline-success">
                <Link to="/Login" className="nav-link">
                  Login
                </Link>
              </Button>
            </Nav.Link>
            <Nav.Link>
              <Button variant="outline-success">
                <Link to="/Register" className="nav-link">
                  Register
                </Link>
              </Button>
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default MainNav;
