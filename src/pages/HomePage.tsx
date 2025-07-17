import Hero from "../components/Hero.tsx";
import About from "../components/About.tsx";
import Projects from "../components/Projects.tsx";
import Skills from "../components/Skills.tsx";
import Contact from "../components/Contact.tsx";

const HomePage = () => {
  return (
    <div className={'bg-white'}>
      <Hero/>
      <About/>
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default HomePage;