import { useContext } from "react";
import "./Resume.scss";
import { ThemeContext } from "context/ThemeContext";
import { Col, Container, Row } from "react-bootstrap";
import niwc from "images/NIWC.png";
import enginearu from "images/enginearu.png";
import ResumeElement from "components/ResumeElement/ResumeElement";
function Resume() {
  const [theme] = useContext(ThemeContext);
  return (
    <div>
      <Container>
        <Row>
          <h2 className={`${theme} mt-5`}>My Journey Thus Far</h2>
        </Row>
        <Row className="mb-3">
          <Col className="pt-3 mx-5 text-center smooth">
            <p className="fw-bold">
              Hello and welcome to my personal website! My name is Daniel
              Finley, and I'm a software engineer with a passion for technology
              and education. I am also proud to be a co-founder of an online
              STEM tutoring agency.
              <br></br>
              <br></br>
              As a software engineer, I have had the opportunity to work on a
              variety of exciting projects, honing my skills in designing and
              developing user-friendly software solutions. I find great
              satisfaction in leveraging technology to solve problems and create
              innovative solutions that enhance the user experience.
              <br></br>
              <br></br>
              In addition to my technical pursuits, I am deeply passionate about
              education, particularly in the fields of science, technology,
              engineering, and math (STEM). This led me to co-found an online
              STEM tutoring agency, where we strive to make quality education
              accessible to students around the world. Through our platform, we
              provide personalized and interactive learning experiences to help
              students excel in their STEM studies.
              <br></br>
              <br></br>I am thrilled to be on this journey, combining my love
              for software engineering and education. Through my work, I aim to
              inspire and empower the next generation of STEM enthusiasts,
              equipping them with the tools and knowledge they need to thrive in
              the digital age.
              <br></br>
              <br></br>
              Thank you for visiting my website, and I hope you enjoy exploring
              my journey and the work I am passionate about.
            </p>
          </Col>
        </Row>
        <ResumeElement
          title="EngiNearU Online Tutoring Agency"
          subhead="Co-Founder"
          date="May 2022 - Present"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum."
          image={enginearu}
          link="https://www.enginearu.com"
        />
        <ResumeElement
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
          link="https://www.niwcatlantic.navy.mil/"
        />
      </Container>
    </div>
  );
}

export default Resume;
