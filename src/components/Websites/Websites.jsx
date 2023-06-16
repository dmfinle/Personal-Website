//Styles
import "./Websites.scss";

//React
import { Container, Row, Col } from "react-bootstrap";
import { useContext } from "react";

//Components
import { ThemeContext } from "context/ThemeContext";

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

        <Row className="d-flex mx-2 justify-content-start mt-5 mb-4">
          <Col className="smooth">
            <p>
              Introducing my web development services! I'm thrilled to offer
              professional and reliable web development solutions tailored to
              your unique needs. Whether you're a small business, a startup, or
              an individual looking to establish an online presence, I'm here to
              help. With expertise in front-end and back-end development, I
              specialize in crafting responsive and user-friendly websites.
            </p>
            <p>
              From the initial concept to the final launch, I will work closely
              with you to understand your goals and deliver a website that
              reflects your brand identity and engages your target audience.
              Utilizing the latest technologies and industry best practices, I
              am dedicated to delivering high-quality websites that are not only
              visually appealing but also optimized for performance and search
              engines.
            </p>
            <p>
              Enhance your online presence and stand out from the competition
              with my web development services. Let's collaborate and bring your
              vision to life on the digital stage!
            </p>
            <p className="text-center">
              <i>
                If you would like to setup a quick chat to discuss your needs,
                click the link to book a free 15 minute session. You can also
                email me directly, using the email found at the bottom of this
                page.{" "}
              </i>
            </p>
            <p className="text-center">
              <i>
                <a
                  className={theme}
                  href="https://dayslice.com/danielfinley"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chat Here
                </a>
              </i>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Websites;
