//Styles
import "./App.scss";

//Components
import NavigationBar from "components/Navigation/NavigationBar";
import Home from "components/Home/Home";
import Links from "components/Links/Links";

//React
import { useContext, useState } from "react";
import { ThemeContext } from "context/ThemeContext";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { Navigate, Route, Routes } from "react-router-dom";
import Resume from "components/Resume/Resume";
import Tutoring from "components/Tutoring/Tutoring";
import NotFound from "components/NotFound/NotFound";
// import Blogs from "components/Blogs/Blogs";
// import Enginearu from "components/Blogs/Enginearu/Enginearu";
import Websites from "components/Websites/Websites";

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
    <div className={`${theme} overflow-hidden`}>
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
        <Route path="/tutoring" element={<Tutoring></Tutoring>} />
        <Route path="/websites" element={<Websites></Websites>} />
        {/* <Route path="/blogs" element={<Blogs></Blogs>}>
          <Route path="enginearu" element={<Enginearu></Enginearu>} />
        </Route> */}
        <Route path="/404" element={<NotFound></NotFound>}></Route>
        <Route path="*" element={<Navigate to="/404"></Navigate>}></Route>
      </Routes>
      <Links></Links>
    </div>
  );
}

export default App;
