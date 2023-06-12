//styles
import "./NotFound.scss";
import Container from "react-bootstrap/Container";

//React
import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";
import { Button } from "react-bootstrap";

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
