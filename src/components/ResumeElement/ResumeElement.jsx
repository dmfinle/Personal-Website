import { useContext } from "react";
import "./ResumeElement.scss";
import { ThemeContext } from "context/ThemeContext";
import { Image, Col, Container, Row } from "react-bootstrap";
function ResumeElement({ title, subhead, date, description, image, link }) {
  const [theme] = useContext(ThemeContext);
  return (
    <div>
      <Container>
        <Row className="d-flex mx-2 justify-content-center mt-5 ">
          <Col
            className="align-top smooth"
            xs={10}
            sm={10}
            md={2}
            lg={2}
            xl={2}
            xxl={2}
          >
            <Image thumbnail src={image}></Image>
          </Col>
          <Col
            className="mx-2 smooth"
            xs={12}
            sm={12}
            md={8}
            lg={8}
            xl={8}
            xxl={8}
          >
            <h1>
              <a
                className={`${theme} title text-center`}
                target="_blank"
                rel="noreferrer"
                href={link}
              >
                {title}
              </a>
            </h1>
            <h1>{subhead}</h1>
            <p className="fst-italic">{date}</p>
            <p>{description}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeElement;
