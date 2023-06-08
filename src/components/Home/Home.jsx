//Styles
import "./Home.scss";

//Components
import Introduction from "components/Introduction/Introduction";
import Jobs from "components/Jobs/Jobs";
import Links from "components/Links/Links";

function Home() {
  return (
    <>
      <Introduction></Introduction>
      <Jobs></Jobs>

      <Links></Links>
    </>
  );
}

export default Home;
