import Theme from "./component/theme";
import Contact from './component/contact';
import Introduction from "./component/introduction";
import Projects from "./component/projects";
import About from "./component/about";

export default function Home() {
  

  return (
    <div className='snap-mandatory snap-y h-screen overflow-y-scroll'>
      <Theme/>
      <Contact/>
      <Introduction/>
      <About/>
      <Projects/>
    </div>
  );
}
