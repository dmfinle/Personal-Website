//Styles
import "./ProfessionalSummary.scss";

//React
import { Container, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";

//components
import ProjectElement from "../Projects/ProjectElement/ProjectElement";

function ProfessionalSummary() {
  const [theme] = useContext(ThemeContext);
  return (
    <div>
      <Container className="mt-5">
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
                    development, Android mobile security research, Linux kernel
                    exploitation, and software development and integration.
                    Experience in leading and delegating tasking related to
                    complex projects involving 5G and solving new issues based
                    on customer requirements and scope.
                  </p>
                </>
              }
            ></ProjectElement>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProfessionalSummary;
