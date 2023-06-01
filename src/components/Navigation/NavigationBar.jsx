import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "images/logo.svg";
import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";
import "./NavigationBar.scss";

function NavigationBar() {
  const [theme] = useContext(ThemeContext);
  return (
    <Navbar
      className={theme}
      sticky="top"
      bg={theme}
      variant={theme}
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="#test">
          {" "}
          <img
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#test">About Me</Nav.Link>
            <Nav.Link href="#test">Resume</Nav.Link>
            <NavDropdown title="Services" id="basic-nav-dropdown">
              <NavDropdown.Item href="#test">Tutoring</NavDropdown.Item>
              <NavDropdown.Item href="#test">Tutoring Agency</NavDropdown.Item>
              <NavDropdown.Item href="#test">Products</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
