//Styles
import "./Projects.scss";

//React
import { Container, Row, Col } from "react-bootstrap";
import { useContext } from "react";

//Components
import ProjectElement from "./ProjectElement/ProjectElement";
import { ThemeContext } from "context/ThemeContext";

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
                <>
                  <p>
                    This current website was created using React, Javascript,
                    and Sass. Each piece of the website was componentized with
                    its own styling sheet. React Bootstrap was used as a way to
                    get some out of the box tools to be used in each of these
                    components.
                  </p>
                  <p>
                    A CI/CD pipeline was created using github workflows to
                    automate testing and deployment on each subsequent push.
                    Dependabot has also been incorporated to ensure that the
                    dependencies stay updated.
                  </p>
                </>
              }
            ></ProjectElement>
          </Col>
        </Row>
        <Row>
          <ProjectElement
            subhead={"Tutoring Website"}
            description={
              <>
                <p>
                  Using the MERN Stack to design a fully functional tutoring
                  website that users can tutor others virtually for programming
                  related concepts. Implemented WebRTC Peer-to-Peer video
                  streaming to allow users to communicate and share screen.
                  Using Socket.io to allow for real time communication between
                  users in chat along with indicator for typing. Configured
                  website styles using CSS/SCSS. Working on implementing online
                  compiler so that users can collaborate directly on site.
                </p>
                <p>
                  <i>Website is not live but the repository is linked</i>
                </p>
              </>
            }
            link={"https://github.com/dmfinle/tutorwebsite"}
          ></ProjectElement>
        </Row>
        <Row className="mb-5">
          <Col>
            <ProjectElement
              subhead={"Magnetic Bearing"}
              description={
                <>
                  <p>
                    Designed circuitry and developed code using MATLAB Simulink
                    to create a Bluetooth controlled magnetic bearing that could
                    float frictionless along a metal plate and hold up to 1000g
                    of weight.
                  </p>
                </>
              }
              link="https://express.adobe.com/video/bbynHGOO8nVPK"
            ></ProjectElement>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Projects;
