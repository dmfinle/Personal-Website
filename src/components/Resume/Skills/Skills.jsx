//Styles
import "./Skills.scss";

//React
import { Container, Row, Col, Badge, Fade } from "react-bootstrap";
import { useContext, useRef } from "react";

//Components
import { ThemeContext } from "context/ThemeContext";
import useIsInViewport from "utilities/useInViewPort";

function Skills() {
  const [theme] = useContext(ThemeContext);
  const viewRef = useRef(null);
  const refInView = useIsInViewport(viewRef);
  return (
    <div>
      <Fade in={refInView} timeout={100}>
        <Container ref={viewRef} className="mt-5" fluid>
          <Row className="mb-3">
            <Col>
              <h1 className={`${theme} overflow-hidden text-center`}>Skills</h1>
            </Col>
          </Row>
          <Row className="mb-2">
            <h2 className="d-flex justify-content-center">
              Programming Languages
            </h2>
          </Row>
          <Row>
            <h2 className="d-flex justify-content-center text-center">
              <Col>
                <Badge
                  className="mx-2"
                  pill
                  bg={theme === "light" ? "dark" : "light"}
                  text={theme}
                >
                  C/C++
                </Badge>
                <Badge
                  className="m-2"
                  pill
                  bg={theme === "light" ? "dark" : "light"}
                  text={theme}
                >
                  Matlab
                </Badge>
                <Badge
                  className="m-2"
                  pill
                  bg={theme === "light" ? "dark" : "light"}
                  text={theme}
                >
                  Java
                </Badge>
                <Badge
                  className="m-2"
                  pill
                  bg={theme === "light" ? "dark" : "light"}
                  text={theme}
                >
                  Python
                </Badge>
                <Badge
                  className="m-2"
                  pill
                  bg={theme === "light" ? "dark" : "light"}
                  text={theme}
                >
                  Javascript
                </Badge>
                <Badge
                  className="m-2"
                  pill
                  bg={theme === "light" ? "dark" : "light"}
                  text={theme}
                ></Badge>
                <Badge
                  className="m-2"
                  pill
                  bg={theme === "light" ? "dark" : "light"}
                  text={theme}
                >
                  Typescript
                </Badge>
                <Badge
                  className="m-2"
                  pill
                  bg={theme === "light" ? "dark" : "light"}
                  text={theme}
                >
                  Ruby
                </Badge>
              </Col>
            </h2>
          </Row>
          <Row className="mb-2">
            <h2 className="d-flex justify-content-center text-center">
              Frameworks/Libraries
            </h2>
          </Row>
          <Row>
            <h2 className="d-flex justify-content-center text-center">
              <Col>
                <Badge
                  className="m-2"
                  pill
                  bg={theme === "light" ? "dark" : "light"}
                  text={theme}
                >
                  Ruby on Rails
                </Badge>
                <Badge
                  className="m-2"
                  pill
                  bg={theme === "light" ? "dark" : "light"}
                  text={theme}
                >
                  Android Studio
                </Badge>
                <Badge
                  className="m-2"
                  pill
                  bg={theme === "light" ? "dark" : "light"}
                  text={theme}
                >
                  Angular
                </Badge>
                <Badge
                  className="m-2"
                  pill
                  bg={theme === "light" ? "dark" : "light"}
                  text={theme}
                >
                  React
                </Badge>
                <Badge
                  className="m-2"
                  pill
                  bg={theme === "light" ? "dark" : "light"}
                  text={theme}
                >
                  Node.js
                </Badge>
                <Badge
                  className="m-2"
                  pill
                  bg={theme === "light" ? "dark" : "light"}
                  text={theme}
                >
                  Express.js
                </Badge>
                <Badge
                  className="m-2"
                  pill
                  bg={theme === "light" ? "dark" : "light"}
                  text={theme}
                >
                  Git
                </Badge>
                <Badge
                  className="m-2"
                  pill
                  bg={theme === "light" ? "dark" : "light"}
                  text={theme}
                >
                  Docker
                </Badge>
                <Badge
                  className="m-2"
                  pill
                  bg={theme === "light" ? "dark" : "light"}
                  text={theme}
                >
                  Jira
                </Badge>
              </Col>
            </h2>
          </Row>
          <Row className="mb-2">
            <h2 className="d-flex justify-content-center text-center">
              Databases
            </h2>
          </Row>
          <Row>
            <h2 className="d-flex justify-content-center text-center">
              <Col>
                <Badge
                  className="m-2"
                  pill
                  bg={theme === "light" ? "dark" : "light"}
                  text={theme}
                >
                  PostgreSQL
                </Badge>
                <Badge
                  className="m-2"
                  pill
                  bg={theme === "light" ? "dark" : "light"}
                  text={theme}
                >
                  MongoDB
                </Badge>
              </Col>
            </h2>
          </Row>
          <Row className="mb-2">
            <h2 className="d-flex justify-content-center text-center">OS</h2>
          </Row>
          <Row>
            <h2 className="d-flex justify-content-center text-center">
              <Col>
                <Badge
                  className="m-2"
                  pill
                  bg={theme === "light" ? "dark" : "light"}
                  text={theme}
                >
                  Mac OS X
                </Badge>
                <Badge
                  className="m-2"
                  pill
                  bg={theme === "light" ? "dark" : "light"}
                  text={theme}
                >
                  Linux
                </Badge>
                <Badge
                  className="m-2"
                  pill
                  bg={theme === "light" ? "dark" : "light"}
                  text={theme}
                >
                  Windows
                </Badge>
                <Badge
                  className="m-2"
                  pill
                  bg={theme === "light" ? "dark" : "light"}
                  text={theme}
                >
                  Centos 8
                </Badge>
              </Col>
            </h2>
          </Row>

          <Row className="mb-2">
            <h2 className="d-flex justify-content-center text-center">Other</h2>
          </Row>
          <Row>
            <h2 className="d-flex justify-content-center text-center">
              <Col>
                <Badge
                  className="m-2"
                  pill
                  bg={theme === "light" ? "dark" : "light"}
                  text={theme}
                >
                  Scrum
                </Badge>
                <Badge
                  className="m-2"
                  pill
                  bg={theme === "light" ? "dark" : "light"}
                  text={theme}
                >
                  Protobuf
                </Badge>
                <Badge
                  className="m-2"
                  pill
                  bg={theme === "light" ? "dark" : "light"}
                  text={theme}
                >
                  JSON
                </Badge>
                <Badge
                  className="m-2"
                  pill
                  bg={theme === "light" ? "dark" : "light"}
                  text={theme}
                >
                  Data Structures & Algorithms
                </Badge>
                <Badge
                  className="m-2"
                  pill
                  bg={theme === "light" ? "dark" : "light"}
                  text={theme}
                >
                  Networking
                </Badge>
              </Col>
            </h2>
          </Row>
        </Container>
      </Fade>
    </div>
  );
}

export default Skills;
