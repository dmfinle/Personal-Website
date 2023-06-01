import Home from "components/Home/Home";
import Resume from "components/Resume/Resume";
import NavigationBar from "components/Navigation/NavigationBar";
import "./App.scss";
import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";
import { Button } from "react-bootstrap";
function App() {
  const [theme, setTheme] = useContext(ThemeContext);
  // console.log(theme);
  return (
    <div className={theme}>
      <NavigationBar></NavigationBar>
      <div className="background">
        <h1 className="text">hello</h1>
      </div>
      <button
        onClick={() => {
          setTheme(theme === "light" ? "dark" : "light");
        }}
      >
        Switch
      </button>
      <Home></Home>
      <Resume></Resume>
    </div>
  );
}

export default App;
