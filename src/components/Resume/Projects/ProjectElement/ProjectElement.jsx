import { useContext } from "react";
import "./ProjectElement.scss";
import { ThemeContext } from "context/ThemeContext";
import { Col, Container, Row } from "react-bootstrap";

function ProjectElement({ subhead, description }) {
  const [theme] = useContext(ThemeContext);
  return (
    <div>
      <Container fluid>
        <Row className="d-flex mx-2 justify-content-start mt-5 ">
          <Col className=" smooth">
            <h1>{subhead}</h1>
            <p>{description}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProjectElement;
