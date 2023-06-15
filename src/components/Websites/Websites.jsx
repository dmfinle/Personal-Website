//Styles
import "./Websites.scss";

//React
import { Container, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";

//Components

function Websites() {
  const [theme] = useContext(ThemeContext);
  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col>
            <h1 className={`${theme} overflow-hidden text-center`}>Websites</h1>
          </Col>
        </Row>

        <Row className="d-flex mx-2 justify-content-start mt-5 ">
          <Col className="smooth">
            <p>
              Welcome to my tutoring services! As you embark on your educational
              journey, allow me to introduce myself—a dedicated and experienced
              tutor with 8 years of experience, committed to helping you reach
              new heights of academic success. I am passionate about guiding
              students towards achieving their full potential. With a wealth of
              knowledge and a deep love for learning, I have dedicated myself to
              the art of tutoring, assisting students in various subjects and
              fostering a supportive learning environment. My expertise,
              combined with my genuine desire to see students thrive, allows me
              to offer personalized and effective tutoring in a range of
              subjects.
            </p>
            <p>
              I understand that every student is unique, with different
              strengths, weaknesses, and learning styles. That's why I believe
              in tailoring my teaching approach to meet your specific needs. I
              am here to provide you with the guidance and resources necessary
              for your academic success. Beyond my subject expertise, I am known
              for my ability to create a supportive and engaging learning
              environment. I believe that building a strong rapport with my
              students is essential for fostering a love for learning and
              boosting confidence.
            </p>
            <p>
              Together, we will work towards your goals, overcoming challenges
              and celebrating achievements along the way. By choosing me as your
              tutor, you can expect a dedicated and knowledgeable mentor who
              will go above and beyond to help you excel academically. My
              mission is to empower you, instill a sense of curiosity, and equip
              you with the skills necessary for lifelong learning. I am excited
              to embark on this educational journey with you. Together, we will
              unlock your full potential and pave the way for a future filled
              with academic achievements. Explore the subjects I offer below and
              take the first step towards realizing your dreams.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Websites;
