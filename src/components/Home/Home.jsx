//Styles
import "./Home.scss";

//Components
import Introduction from "components/Introduction/Introduction";
import Jobs from "components/Jobs/Jobs";

function Home() {
  return (
    <>
      <Introduction></Introduction>
      <Jobs></Jobs>
    </>
  );
}

export default Home;
