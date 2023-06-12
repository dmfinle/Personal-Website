//styles
import "./ProjectElement.scss";

//React
import { Col, Container, Row } from "react-bootstrap";
import { useContext } from "react";

//Components
import { ThemeContext } from "context/ThemeContext";

function ProjectElement({ subhead, description, link }) {
  const [theme] = useContext(ThemeContext);

  return (
    <div>
      <Container>
        <Row className="d-flex mx-2 justify-content-start mt-5 ">
          <Col className=" smooth">
            <h1>
              {link ? (
                <a
                  className={`${theme} title text-center`}
                  target="_blank"
                  rel="noreferrer"
                  href={link}
                >
                  {subhead}
                </a>
              ) : (
                subhead
              )}
            </h1>

            <p>{description}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProjectElement;
