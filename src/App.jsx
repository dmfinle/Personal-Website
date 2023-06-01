import Home from "components/Home/Home";
import Resume from "components/Resume/Resume";
import NavigationBar from "components/Navigation/NavigationBar";
import "./App.scss";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "context/ThemeContext";
import { DarkModeSwitch } from "react-toggle-dark-mode";
function App() {
  const [theme, setTheme] = useContext(ThemeContext);
  const [isDarkMode, setDarkMode] = useState(true);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  useEffect(() => {
    console.log(window.localStorage.getItem("theme"));
    // window.localStorage.setItem("theme", theme);
  }, []);

  // useEffect(() => {
  //   const localTheme = window.localStorage.getItem("theme");
  //   console.log(localTheme);
  //   if (localTheme) {
  //     console.log("-----");
  //     console.log(localTheme);
  //     setTheme(localTheme);
  //   } else {
  //     setTheme("light");
  //   }
  // }, []);

  return (
    <div className={theme}>
      <NavigationBar></NavigationBar>

      <DarkModeSwitch
        className="dark-toggle"
        checked={isDarkMode}
        size={50}
        sunColor="#FDB813"
        moonColor="#F6F1D5"
        onChange={(checked) => {
          toggleDarkMode(checked);
          setTheme(theme === "light" ? "dark" : "light");
        }}
      ></DarkModeSwitch>
      <Home></Home>
      <Resume></Resume>
    </div>
  );
}

export default App;
