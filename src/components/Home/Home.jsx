import Container from "react-bootstrap/Container";
import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";
import "./Home.scss";

function Home() {
  const [theme] = useContext(ThemeContext);
  return (
    <div className={theme}>
      <Container className="bgimg" fluid>
        {" "}
        <Container className="h-100 d-flex justify-content-center align-items-center text-white ">
          <span className="text-center">
            <h1>Hey, </h1>
            <br></br>
            <h1>My name is Daniel Finley</h1>
          </span>
        </Container>
      </Container>
    </div>
  );
}

export default Home;
