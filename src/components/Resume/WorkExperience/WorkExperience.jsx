//Styles
import "./WorkExperience.scss";
import niwc from "images/NIWC.jpg";
import wyzant from "images/wyzant.jpg";

//React
import { Container, Row, Col } from "react-bootstrap";
import { useContext } from "react";

//Components
import JobElement from "components/JobElement/JobElement";
import { ThemeContext } from "context/ThemeContext";

function WorkExperience() {
  const [theme] = useContext(ThemeContext);
  return (
    <div>
      <Container className="mt-5" fluid>
        <Row>
          <Col>
            <h1 className={`${theme} overflow-hidden text-center`}>
              Work Experience
            </h1>
          </Col>
        </Row>
        <Row>
          <JobElement
            title="Naval Information Warfare Center (NIWC)"
            subhead="Software Engineer"
            date="March 2020 - Present"
            description={
              <>
                <ul>
                  <li>
                    Supports efforts of conducting broad basic and applied
                    research pertaining to the areas of the applications of
                    Computer Engineering. Required knowledge of Linux and
                    Object-Oriented languages to build requested tools and
                    perform security research regarding both mobile and IoT
                    devices as well as peer reviewing code.
                  </li>

                  <li>
                    Full-Stack Development using Angular, ExpressJS, MongoDB to
                    design a scalable C2 server. Use of NodeJS clusters to
                    perform load balancing, authentication services, and
                    exposing REST APIs to client and device.
                  </li>
                </ul>
              </>
            }
            image={niwc}
          />
          <JobElement
            title="Wyzant"
            subhead="Programming Tutor"
            date="June 2021 - Present"
            description={
              <>
                <ul>
                  <li>
                    Over 1000 hours of assisting students and professionals with
                    programming problems relating to various data structures
                    such as Linked Lists, arrays, stacks, queues, and trees.
                    Programming languages range from low level such as C and
                    pointers to Python scripting and cybersecurity tools such as
                    Hydra and Metasploit.
                  </li>
                </ul>
                <p>
                  <i>
                    If you would like to work with me on Wyzant you can{" "}
                    <a
                      className={theme}
                      href="https://is.gd/s5n8fy"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Book Here
                    </a>
                    . By using my link you will receive $40 towards your first
                    lesson.
                  </i>
                </p>
              </>
            }
            image={wyzant}
            link="https://is.gd/s5n8fy"
          />
        </Row>
      </Container>
    </div>
  );
}

export default WorkExperience;
