//styles
import "./Jobs.scss";
import software from "images/software-engineer.jpg";
import enginearu from "images/enginearu.jpg";
import programming from "images/programming.jpg";
import riggs from "images/riggs.jpg";
import event from "images/job_event.jpg";
import career from "images/careerfair.jpg";

//React
import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";
import { Col, Container, Row, Figure } from "react-bootstrap";

//Components
import JobElement from "components/JobElement/JobElement";

function Jobs() {
  const [theme] = useContext(ThemeContext);
  return (
    <div>
      <Container className="mb-5 smooth">
        <Row>
          <h1 className={`${theme} mt-5 overflow-hidden text-center`}>
            My Journey Thus Far
          </h1>
        </Row>
        <Row className="mb-3">
          <Col className="pt-3 mx-5 text-center">
            <p>
              Hello and welcome to my personal website! My name is Daniel
              Finley, and I'm a software engineer with a passion for technology
              and education. I am also proud to be a co-founder of an online
              STEM tutoring agency.
              <br></br>
              <br></br>
              As a software engineer, I have had the opportunity to work on a
              variety of exciting projects, honing my skills in designing and
              developing user-friendly software solutions. I find great
              satisfaction in leveraging technology to solve problems and
              creating innovative solutions that enhance the user experience.
              <br></br>
              <br></br>
              In addition to my technical pursuits, I am deeply passionate about
              education, particularly in the fields of science, technology,
              engineering, and math (STEM). My goal is to encourage
              African-American individuals to pursue STEM related fields and
              know it is attainable. This led me to co-found an online STEM
              tutoring agency, where we strive to make quality education
              accessible to students around the world. Through our platform, we
              provide personalized and interactive learning experiences to help
              students excel in their STEM studies.
              <br></br>
              <Row>
                <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6}>
                  <Figure className="my-4 d-flex justify-content-center text-center">
                    <span>
                      <Figure.Image src={event} />
                      <Figure.Caption
                        className={`mt-1 fst-italic text-${
                          theme === "light" ? "dark" : "light"
                        }`}
                      >
                        STEM Tabling at Airshow with NIWC
                      </Figure.Caption>
                    </span>
                  </Figure>
                </Col>
                <Col className="d-flex justify-content-center align-items-center">
                  {" "}
                  <Figure className="my-4  text-center">
                    <span>
                      <Figure.Image src={career} />
                      <Figure.Caption
                        className={`mt-1 fst-italic text-${
                          theme === "light" ? "dark" : "light"
                        }`}
                      >
                        Middle School Career Fair with NIWC
                      </Figure.Caption>
                    </span>
                  </Figure>
                </Col>
              </Row>
              I am thrilled to be on this journey, combining my love for
              software engineering and education. Through my work, I aim to
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
        <JobElement
          title="EngiNearU Online Tutoring Agency"
          subhead="Co-Founder"
          date="May 2022 - Present"
          description={
            <>
              <p>
                As I continued to tutor, I heard the complaints from the
                students I met with. They were adamant about how hard it was to
                find a quality tutor in STEM and were always overjoyed to have
                stumbled across me. In discussing this with my friend Zach, who
                also had begun online tutoring, we realized that both of our
                students shared the same sentiments.
              </p>
              <p>
                I mentioned the idea of an online tutoring agency with the focus
                on STEM. We began brainstorming ideas, doing research, and
                brought the idea to life. EngiNearU, always an engineer near
                you, to help find the engineer in you.
              </p>
              <p>
                Since its inception we have recruited many qualified tutors
                underneath us from all over the country. We have been able to
                help many families and provide them with a more flexible
                solution than other resources. We plan to continue growing,
                trying to reach as many students as possible and locating the
                best of the best tutors. Our ultimate goal is to enable the next
                generation and equip them with the tools to succeed.
              </p>
              <p>
                If you or anyone you know is looking for help in a STEM related
                field, feel free to check out our website found in the link
                above. I am more than happy to talk with you and answer any
                questions you may have.
              </p>
              <p>
                <a className={theme} href="/tutoring">
                  Click here to learn more!
                </a>
              </p>
            </>
          }
          image={enginearu}
          link="https://www.enginearu.com"
        />
        <JobElement
          title="Free Lance"
          subhead="Developer & Tutor"
          date="June 2021 - Present"
          description={
            <>
              <p>
                As the pandemic shifted work remotely, I discovered online
                tutoring. I had always had a passion for tutoring, as this is
                something I did in college. I find great satisfaction in helping
                students find their eureka moment. I began tutoring online on
                Wyzant doing a wide variety of topics ranging from calculus,
                circuits, and programming. I found that tutoring in programming
                is what I loved and it seemed those were the students who needed
                me the most.
              </p>
              <p>
                Since the start, I have over 1000 hours of tutoring and have
                been able to help many families, some of which have shared
                amazing success stories with me. Being a blessing to others is
                something my mom has always instilled in me and it is something
                I try to live by.
              </p>
              <p>
                In addition to freelance tutoring, I have also done some
                freelance website development. I plan to continue to grow in
                this area and add to my portfolio of sites. Some sites that I
                have designed myself:
                <ul>
                  <li>This website, my personal portfolio</li>
                  <li>
                    {" "}
                    <a
                      href="https://www.mpma47.org"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Montford Point Marines Charleston Chapter 47
                    </a>{" "}
                    a non-profit organization who were the first
                    African-Americans to enlist in the U.S. Marine Corps
                  </li>
                </ul>
              </p>
              <p>
                Feel free to click my link above if you are looking to get help
                in a specific subject or looking to have a quick chat.
              </p>
            </>
          }
          image={programming}
          link="https://dayslice.com/danielfinley"
        />
        <JobElement
          title="Mid-Level"
          subhead="Software Engineer"
          date="March 2020 - Present"
          description={
            <>
              <p>
                I transitioned from school directly into the workforce around
                the start of the COVID-19 global pandemic. My DoD SMART
                scholarship landed me in a federal civilian role where I was
                able to apply what I had learned in school to the real world. I
                quickly realized how much I did not know. It was an uphill
                battle adjusting to the software, procedures, team flow and even
                new languages. Working in a team and collaborating as opposed to
                doing individual school assignments was also a big shift.
              </p>
              <p>
                Nevertheless, I continued to push forward taking every new
                challenge head on and overcoming it, only to be met with a new
                one. I soon began to realize that I enjoy learning new things
                and applying that knowledge to any difficult task. I quickly
                find myself bored when I feel like there is no room for growth
                or advancement.
              </p>
              <p>
                I have had the opportunity to take on many challenging tasks,
                lead projects, develop new software and processes, and offer
                mentorship to others. I plan to continue advancing and growing
                professionally as a software engineer with an amazing story to
                tell at the end of it all.
              </p>
            </>
          }
          image={software}
        />

        <JobElement
          title="Clemson University"
          subhead="B.S Electrical & Computer Engineer "
          date="December 2019"
          description={
            <>
              <p>
                Clemson gave me the chance to grow both professionally and
                mentally. Through my 4.5 years I was able to meet some amazing
                friends and establish new relationships that will last me a
                lifetime. The experiences, people, and challenging curricula I
                encountered helped to shape me into who I am today.
              </p>
              <p>
                I am the recipient of the DoD SMART scholarship. I double
                majored in both Electrical & Computer Engineering and had many
                long and sleepless nights. In the end it was worth it as I was
                able to walk across the stage, 2 degrees in hand. Although I had
                a challenging curricula, I still had the opportunity to
                particpate in all Clemson had to offer.
              </p>

              <p>
                I was apart of various organizations such as:
                <ul>
                  <li>
                    <b>PEER & WISE</b>, a program dedicated to increasing
                    diversity in science and engineering by addressing and
                    assisting students in technical majors. I had the
                    opportunity to be both a mentor and a tutor and support
                    those in need of help.
                  </li>
                  <li>
                    <b>Clemson Undergrate Student Government (CUSG)</b>, who
                    acts as the liaison between the students and the
                    administration, faculty, and staff. I had the opportunity to
                    serve as a senator and help make key decisions regarding all
                    Clemson students and enhance the Clemson experience. I had
                    the opportunity to sit on various committees within the
                    council as well.
                  </li>
                  <li>
                    <b>
                      Alpha Phi Alpha Fraternity Incorporated, Pi Alpha Chapter
                    </b>{" "}
                    where we develop leaders, promote brotherhood and academic
                    excellence, while providing service and advocacy for our
                    communities. I had the opportunity to put on various
                    programs for the campus to bring awareness to mental health
                    and current events such as voter registration. During my
                    time I served as the Director of Education for our chapter.
                  </li>
                </ul>
              </p>
              <p>
                Ultimately, Clemson awarded me the chance to experiment and find
                out what I truly had a passion for while affording me the
                opportunity to have fun along the way.
              </p>
            </>
          }
          image={riggs}
        />
      </Container>
    </div>
  );
}

export default Jobs;
