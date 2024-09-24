import Image from 'next/image'
import Theme from "./component/theme";

export default function Home() {
  return (
    <div className='snap-mandatory snap-y h-screen overflow-y-scroll'>
      <Theme/>
      <div id="contact">

      </div>
      <div id="introduction" className="snap-center flex justify-center items-center space-between gap-44 bg-background h-screen text-textcolour">
        <div>
          <p className="text-7xl py-4"> Hi, I&#39;m Donald </p>
          <p className="text-3xl"> Junior Software Developer </p>
        </div>
        <Image 
          src="/cat.png"
          width={390}
          height={390}
          alt='picture of cat :3'
          >
        </Image>
      </div>
      <div id="projects" className="snap-center flex justify-center items-center space-between gap-44 bg-secondary h-screen text-textcolour">
        <p> Test this is projects</p>        
      </div>
      <div id="skills" className="snap-center flex justify-center items-center space-between gap-44 bg-background h-screen text-textcolour">
      <p> Test this is skills</p>        
      </div>
      <div id="experience" className="snap-center flex justify-center items-center space-between gap-44 bg-secondary h-screen text-textcolour">
      <p> Test this is experience</p>        
      </div>
      <div id="more" className="snap-center flex justify-center items-center space-between gap-44 bg-background h-screen text-textcolour">
      <p> Test this is more</p>        
      </div>
    </div>
  );
}
