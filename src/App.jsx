import Home from "components/Home/Home";
import Resume from "components/Resume/Resume";
import NavigationBar from "components/Navigation/NavigationBar";
import "./App.scss";
import { useContext, useState } from "react";
import { ThemeContext } from "context/ThemeContext";
import { DarkModeSwitch } from "react-toggle-dark-mode";
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
    <div className={theme}>
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
      <Home></Home>
      <Resume></Resume>
    </div>
  );
}

export default App;
