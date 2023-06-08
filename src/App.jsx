//Styles
import "./App.scss";

//Components
import NavigationBar from "components/Navigation/NavigationBar";
import Home from "components/Home/Home";

//React
import { useContext, useState } from "react";
import { ThemeContext } from "context/ThemeContext";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Route, Routes } from "react-router-dom";
import Resume from "components/Resume/Resume";

function App() {
  const [theme, setTheme] = useContext(ThemeContext);
  const [isDarkMode, setDarkMode] = useState(theme === "light" ? true : false);
  const mql = window.matchMedia("(prefers-color-scheme: dark)");

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    setTheme(theme === "light" ? "dark" : "light");
  };

  const setStorageTheme = () => {
    window.localStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  mql.addEventListener("change", ({ matches }) => {
    if (!window.localStorage.getItem("theme")) {
      toggleDarkMode(!matches);
    }
  });

  return (
    <div className={`${theme}`}>
      <NavigationBar></NavigationBar>
      <DarkModeSwitch
        className="dark-toggle "
        checked={isDarkMode}
        sunColor="#FDB813"
        moonColor="#E3DEE7"
        size={50}
        onChange={(checked) => {
          toggleDarkMode(checked);
          setStorageTheme();
        }}
      ></DarkModeSwitch>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/resume" element={<Resume></Resume>} />
      </Routes>
    </div>
  );
}

export default App;
