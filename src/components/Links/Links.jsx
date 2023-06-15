import { useContext } from "react";
import "./Links.scss";
import { ThemeContext } from "context/ThemeContext";
import { Col, Container, Row } from "react-bootstrap";

function Links() {
  const [theme] = useContext(ThemeContext);
  return (
    <Container fluid className={`${theme} smooth background bg-image `}>
      <Row>
        <h1 className={` alternate mt-5 bg-transparent text-center fw-bold`}>
          Check Out My Links Below
        </h1>
      </Row>

      <Row>
        <Col className="d-flex justify-content-center logo-spacing">
          <a target="_blank" rel="noreferrer" href="https://github.com/dmfinle">
            <i className={`bi bi-github icon-100 logo ${theme}`}></i>
          </a>
          {/* </Col> */}
          {/* <Col className="d-flex justify-content-center"> */}
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/danielfin/"
          >
            <i className={`bi bi-linkedin l icon-100 logo ${theme}`}></i>
          </a>
          {/* </Col> */}
          {/* <Col> */}
          <a href="mailto:daniel@enginearu.com">
            <i className={`bi bi-envelope icon-100 logo  ${theme}`}></i>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Links;
