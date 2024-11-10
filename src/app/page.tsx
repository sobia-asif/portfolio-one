import Image from "next/image";
import Hero from "./components/hero";
import Contact from "./components/contact";
import Project from "./components/project";
import About from "./components/about";
import Skills from "./components/skill";

export default function Home() {
  return (
   <div>

    <Hero/> 
    <About/>
    <Skills/>
    <Project/>
    <Contact/> 

   </div>
            
  );
}
