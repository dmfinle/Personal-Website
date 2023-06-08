import { useContext } from "react";
import "./Subscribe.scss";
import { ThemeContext } from "context/ThemeContext";
import { Image, Col, Container, Row } from "react-bootstrap";
function Subscribe() {
  const [theme] = useContext(ThemeContext);
  return (
    <div className={`${theme} smooth subscribe`}>
      <Container fluid>
        <Row>
          <div className="black-box">
            <h1
              className={`smooth h-100 d-flex justify-content-center align-items-center`}
            >
              Subscribe to get a discount
            </h1>
          </div>
        </Row>
        <Row>
          <h1 className="d-flex justify-content-center align-items-center">
            Bar goes here
          </h1>
        </Row>
      </Container>
    </div>
  );
}

export default Subscribe;
