//Styles
import "./Tutoring.scss";
import classroom from "images/class.jpg";

//React
import { Container, Row, Col, Card, Figure, Fade } from "react-bootstrap";
import { useContext, useRef } from "react";

//Components
import { ThemeContext } from "context/ThemeContext";
import useIsInViewport from "utilities/useInViewPort";

function Tutoring() {
  const [theme] = useContext(ThemeContext);
  const viewRef = useRef(null);
  const refInView = useIsInViewport(viewRef);

  const imageRef = useRef(null);
  const imageInView = useIsInViewport(imageRef);

  const lastTextRef = useRef(null);
  const lastTextInView = useIsInViewport(lastTextRef);

  const bottomRef = useRef(null);
  const bottomRefInView = useIsInViewport(bottomRef);

  const cardRef1 = useRef(null);
  const cardInView1 = useIsInViewport(cardRef1);
  const cardRef2 = useRef(null);
  const cardInView2 = useIsInViewport(cardRef2);
  const cardRef3 = useRef(null);
  const cardInView3 = useIsInViewport(cardRef3);

  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col>
            <h1 className={`${theme} overflow-hidden text-center`}>Tutoring</h1>
          </Col>
        </Row>

        <Row className="d-flex mx-2 justify-content-start mt-5 ">
          <Col className="smooth">
            <Fade in={refInView} timeout={100}>
              <span ref={viewRef}>
                <p>
                  Welcome to my tutoring services! As you embark on your
                  educational journey, allow me to introduce myself—a dedicated
                  and experienced tutor with 8 years of experience, committed to
                  helping you reach new heights of academic success. I am
                  passionate about guiding students towards achieving their full
                  potential. With a wealth of knowledge and a deep love for
                  learning, I have dedicated myself to the art of tutoring,
                  assisting students in various subjects and fostering a
                  supportive learning environment. My expertise, combined with
                  my genuine desire to see students thrive, allows me to offer
                  personalized and effective tutoring in a range of subjects.
                </p>
                <p>
                  I understand that every student is unique, with different
                  strengths, weaknesses, and learning styles. That's why I
                  believe in tailoring my teaching approach to meet your
                  specific needs. I am here to provide you with the guidance and
                  resources necessary for your academic success. Beyond my
                  subject expertise, I am known for my ability to create a
                  supportive and engaging learning environment. I believe that
                  building a strong rapport with my students is essential for
                  fostering a love for learning and boosting confidence.
                </p>
              </span>
            </Fade>

            <Fade in={imageInView} timeout={100}>
              <Figure
                ref={imageRef}
                className="my-4 d-flex justify-content-center text-center"
              >
                <span>
                  <Figure.Image width={500} height={600} src={classroom} />
                  <Figure.Caption
                    className={`mt-1 fst-italic text-${
                      theme === "light" ? "dark" : "light"
                    }`}
                  >
                    Leading a STEM Camp with PEER & WISE
                  </Figure.Caption>
                </span>
              </Figure>
            </Fade>
            <Fade in={lastTextInView} timeout={100}>
              <p ref={lastTextRef}>
                Together, we will work towards your goals, overcoming challenges
                and celebrating achievements along the way. By choosing me as
                your tutor, you can expect a dedicated and knowledgeable mentor
                who will go above and beyond to help you excel academically. My
                mission is to empower you, instill a sense of curiosity, and
                equip you with the skills necessary for lifelong learning. I am
                excited to embark on this educational journey with you.
                Together, we will unlock your full potential and pave the way
                for a future filled with academic achievements. Explore the
                subjects I offer below and take the first step towards realizing
                your dreams.
              </p>
            </Fade>
          </Col>
        </Row>

        <Fade in={bottomRefInView} timeout={100}>
          <Row
            ref={bottomRef}
            className="d-flex mx-2 justify-content-start mb-4 "
          >
            <Col>
              <h4 className="text-center">
                If you are looking for assistance in another subject, check out
                my amazing team of tutors over at{" "}
                <a
                  className={theme}
                  href="https://www.enginearu.com"
                  rel="noreferrer"
                  target="_blank"
                >
                  EngiNearU
                </a>
                !
              </h4>
            </Col>
          </Row>
        </Fade>

        <Row className="d-flex justify-content-center">
          <Fade in={cardInView1} timeout={100}>
            <Card
              ref={cardRef1}
              bg={theme === "light" ? "dark" : "light"}
              text={theme}
              className="m-4"
              style={{ width: "18rem" }}
            >
              <Card.Body>
                <Card.Title>Computer Science</Card.Title>
                <Card.Text>
                  Help in Languages such as C, C++, C#, Java, Javascript and
                  Python. My help includes preparing you for exams, working
                  through practice problems, learning the language of your
                  choice, or overall improvement in the course.
                </Card.Text>
              </Card.Body>
            </Card>
          </Fade>
          <Fade in={cardInView2} timeout={100}>
            <Card
              ref={cardRef2}
              bg={theme === "light" ? "dark" : "light"}
              className="mb-4 mt-4"
              text={theme}
              style={{ width: "18rem" }}
            >
              <Card.Body>
                <Card.Title>Cybersecurity</Card.Title>
                <Card.Text>
                  Help in creating path to pursue Cybersecurity as a career.
                  Assistance in homework understanding and project help. The
                  Cybersecurity basics, how to use Kali Linux, and useful
                  commands to learn in Linux. Help using penetration testing
                  tools such as metasploit, hydra, burp suite etc.
                </Card.Text>
              </Card.Body>
            </Card>
          </Fade>
          <Fade in={cardInView3} timeout={100}>
            <Card
              ref={cardRef3}
              bg={theme === "light" ? "dark" : "light"}
              className="m-4"
              text={theme}
              style={{ width: "18rem" }}
            >
              <Card.Body>
                <Card.Title>Technical Interview Prep</Card.Title>
                <Card.Text>
                  Help in preparing for upcoming technical interviews.
                  Assistance in how to walk through problems as well as good
                  tips when interviewing. Also will provide resources to further
                  help you prepare. Walking through some technical problems with
                  a wide breadth of common topics asked.
                </Card.Text>
              </Card.Body>
            </Card>
          </Fade>
        </Row>
      </Container>
    </div>
  );
}

export default Tutoring;
