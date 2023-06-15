//Styles
import ProfessionalSummary from "./ProfessionalSummary/ProfessionalSummary";
import Projects from "./Projects/Projects";
import "./Resume.scss";

//Components
import Skills from "./Skills/Skills";
import WorkExperience from "./WorkExperience/WorkExperience";

function Resume() {
  return (
    <div>
      <ProfessionalSummary></ProfessionalSummary>
      <Skills></Skills>
      <WorkExperience></WorkExperience>
      <Projects></Projects>
    </div>
  );
}

export default Resume;
