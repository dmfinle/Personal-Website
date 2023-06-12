//Styles
import "./Projects.scss";

//React
import { Container, Row, Col, Ratio } from "react-bootstrap";
import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";

//Components
import ProjectElement from "./ProjectElement/ProjectElement";

function Projects() {
  const [theme] = useContext(ThemeContext);
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col>
            <h1 className={`${theme} overflow-hidden text-center`}>Projects</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <ProjectElement
              subhead={"Personal Website"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
            ></ProjectElement>
          </Col>
        </Row>
        <Row>
          <ProjectElement
            subhead={"Tutoring Website"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
          ></ProjectElement>
        </Row>
        <Row className="mb-5">
          <Col>
            <ProjectElement
              subhead={"Magnetic Bearing"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              }
              link="https://express.adobe.com/video/bbynHGOO8nVPK"
            ></ProjectElement>
          </Col>
        </Row>

        {/* <Container className="smooth text-center  w-75 mb-5">
          <Ratio aspectRatio="16x9">
            <iframe
              loading="lazy"
              title="Magnetic Bearing"
              className="embed-responsive-item "
              src="https://express.adobe.com/video/bbynHGOO8nVPK/embed"
              width="960"
              height="540"
              frameborder="0"
              allowfullscreen="allowfullscreen"
            ></iframe>
          </Ratio>
          <figcaption>Magnetic Bearing Video</figcaption>
        </Container> */}
      </Container>
    </div>
  );
}

export default Projects;
