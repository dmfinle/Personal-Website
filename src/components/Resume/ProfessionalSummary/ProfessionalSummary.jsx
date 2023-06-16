//Styles
import "./ProfessionalSummary.scss";

//React
import { Container, Row, Col, Fade } from "react-bootstrap";
import { useContext, useRef } from "react";

//components
import ProjectElement from "../Projects/ProjectElement/ProjectElement";
import { ThemeContext } from "context/ThemeContext";
import useIsInViewport from "utilities/useInViewPort";

function ProfessionalSummary() {
  const [theme] = useContext(ThemeContext);

  const viewRef = useRef(null);
  const refInView = useIsInViewport(viewRef);

  return (
    <div>
      <Fade in={refInView} timeout={100}>
        <Container ref={viewRef} className="mt-5">
          <Row>
            <Col>
              <h1 className={`${theme} overflow-hidden text-center`}>
                Professional Summary
              </h1>
            </Col>
          </Row>
          <Row>
            <Col className=" smooth">
              <ProjectElement
                description={
                  <>
                    <p>
                      Software Engineer with 4 years of experience in web
                      development, Android mobile security research, Linux
                      kernel exploitation, and software development and
                      integration. Experience in leading and delegating tasking
                      related to complex projects involving 5G and solving new
                      issues based on customer requirements and scope.
                    </p>
                  </>
                }
              ></ProjectElement>
            </Col>
          </Row>
        </Container>
      </Fade>
    </div>
  );
}

export default ProfessionalSummary;
