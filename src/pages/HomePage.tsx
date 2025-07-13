import Hero from "../components/Hero.tsx";
import About from "../components/About.tsx";
import Projects from "../components/Projects.tsx";
import Skills from "../components/Skills.tsx";

const HomePage = () => {
  return (
    <div className={'bg-white'}>
      <Hero/>
      <About/>
      <Projects />
      <Skills />
    </div>
  );
};

export default HomePage;