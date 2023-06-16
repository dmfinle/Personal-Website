//styles
import "./NotFound.scss";

//React
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import { Button } from "react-bootstrap";

//Components
import { ThemeContext } from "context/ThemeContext";

function NotFound() {
  const [theme] = useContext(ThemeContext);
  return (
    <Container className="vh-100 d-flex justify-content-center align-items-center ">
      <span className="text-center">
        <h1>Oops, this page does not exist </h1>
        <br></br>
        <Button variant={theme === "dark" ? "light" : "dark"} href="/">
          Go Back To Home
        </Button>
      </span>
    </Container>
  );
}

export default NotFound;
