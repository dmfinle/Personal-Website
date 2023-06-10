import { useContext } from "react";
import "./JobElement.scss";
import { ThemeContext } from "context/ThemeContext";
import { Image, Col, Container, Row } from "react-bootstrap";
function JobElement({
  title,
  subhead,
  date,
  description,
  image,
  link,
  caption,
}) {
  const [theme] = useContext(ThemeContext);
  return (
    <div>
      <Container>
        <Row className="d-flex mx-2 justify-content-center mt-5 ">
          <Col
            className="align-top smooth mb-4"
            xs={12}
            sm={12}
            md={3}
            lg={3}
            xl={3}
            xxl={3}
          >
            <Image loading="lazy" thumbnail src={image}></Image>
            <figcaption>{caption}</figcaption>
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
              {link ? (
                <a
                  className={`${theme} title text-center`}
                  target="_blank"
                  rel="noreferrer"
                  href={link}
                >
                  {title}
                </a>
              ) : (
                title
              )}
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

export default JobElement;
