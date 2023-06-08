import { useContext } from "react";
import "./Links.scss";
import { ThemeContext } from "context/ThemeContext";
import { Col, Container, Row } from "react-bootstrap";

function Links() {
  const [theme] = useContext(ThemeContext);
  return (
    <Container fluid className={`${theme} smooth background bg-image `}>
      <Row>
        <h2 className={`${theme} alternate mt-5 bg-transparent fw-bold`}>
          Check Out My Links Below
        </h2>
      </Row>

      <Row>
        <Col className="d-flex justify-content-end">
          <a target="_blank" rel="norferrer" href="https://github.com/dmfinle">
            <i className={`bi bi-github mx-2 icon-100 logo ${theme}`}></i>
          </a>
        </Col>
        <Col>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/danielfin/"
          >
            <i className={`bi bi-linkedin icon-100 logo ${theme}`}></i>
          </a>
        </Col>
      </Row>
    </Container>
  );
}

export default Links;
