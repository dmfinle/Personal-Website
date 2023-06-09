//styles
import "./Subscribe.scss";

//React
import { useContext } from "react";
import { Container, Row } from "react-bootstrap";

//Components
import { ThemeContext } from "context/ThemeContext";

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
