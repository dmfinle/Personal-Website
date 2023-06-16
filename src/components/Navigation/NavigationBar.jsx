//styles
import "./NavigationBar.scss";

//React
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "images/logo.svg";
import { useContext } from "react";

//Components
import { ThemeContext } from "context/ThemeContext";

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
        <Navbar.Brand href="/">
          {" "}
          <img
            loading="lazy"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link href="/">About Me</Nav.Link>
            <Nav.Link href="/#/resume">Resume</Nav.Link>
            <NavDropdown menuVariant={theme} title="Services">
              <NavDropdown.Item href="/#/tutoring">Tutoring</NavDropdown.Item>
              <NavDropdown.Item href="/#/websites">
                Website Development
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="/blogs">Blogs</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
