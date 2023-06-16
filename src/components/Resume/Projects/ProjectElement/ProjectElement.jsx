//styles
import "./ProjectElement.scss";

//React
import { Col, Container, Row, Fade } from "react-bootstrap";
import { useContext, useRef } from "react";

//Components
import { ThemeContext } from "context/ThemeContext";
import useIsInViewport from "utilities/useInViewPort";

function ProjectElement({ subhead, description, link }) {
  const [theme] = useContext(ThemeContext);
  const viewRef = useRef(null);
  const refInView = useIsInViewport(viewRef);
  return (
    <div>
      <Fade in={refInView} timeout={100}>
        <Container ref={viewRef}>
          <Row className="d-flex mx-2 justify-content-start mt-5 ">
            <Col className=" smooth">
              {link ? (
                <h1>
                  <a
                    className={`${theme} title text-center`}
                    target="_blank"
                    rel="noreferrer"
                    href={link}
                  >
                    {subhead}
                  </a>
                </h1>
              ) : subhead ? (
                <h1>{subhead}</h1>
              ) : (
                <></>
              )}

              <span>{description}</span>
            </Col>
          </Row>
        </Container>
      </Fade>
    </div>
  );
}

export default ProjectElement;
