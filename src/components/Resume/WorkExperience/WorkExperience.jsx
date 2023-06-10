//Styles
import "./WorkExperience.scss";
import niwc from "images/NIWC.jpg";
import wyzant from "images/wyzant.jpg";

//React
import { Container, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";

//Components
import JobElement from "components/JobElement/JobElement";

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
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum."
            image={niwc}
          />
          <JobElement
            title="Wyzant"
            subhead="Programming Tutor"
            date="June 2021 - Present"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat
          nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum."
            image={wyzant}
          />
        </Row>
      </Container>
    </div>
  );
}

export default WorkExperience;
