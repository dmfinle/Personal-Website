//Styles
import "./Home.scss";

//React
import { useContext } from "react";
import { ThemeContext } from "context/ThemeContext";

//Components
import Introduction from "components/Introduction/Introduction";
import Jobs from "components/Jobs/Jobs";
import Links from "components/Links/Links";

function Home() {
  const [theme] = useContext(ThemeContext);
  return (
    <>
      <Introduction></Introduction>
      <Jobs></Jobs>
      {/* <Subscribe></Subscribe> */}
      <Links></Links>
    </>
  );
}

export default Home;
