import Theme from "./component/theme";
import Contact from './component/contact';
import Introduction from "./component/introduction";
import Projects from "./component/projects";
import Experience from "./component/experience";
import About from "./component/about";
import Skills from "./component/skills";

export default function Home() {
  

  return (
    <div className='snap-mandatory snap-y h-screen overflow-y-scroll'>
      <Theme/>
      <Contact/>
      <Skills/>
      <Introduction/>
      <About/>
      <Projects/>
      <Experience/>
    </div>
  );
}
