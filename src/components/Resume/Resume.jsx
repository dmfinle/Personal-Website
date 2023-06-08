//Styles
import "./Resume.scss";

//React
import { Container, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";

function Resume() {
  const [theme] = useContext(ThemeContext);
  return (
    <div>
      <Container fluid>
        <Row>Hello</Row>
      </Container>
    </div>
  );
}

export default Resume;
