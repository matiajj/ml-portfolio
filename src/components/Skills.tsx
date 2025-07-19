import bg from '../assets/images/skills-bg.svg'
import Development from "./Development.tsx";
import OtherSkills from "./OtherSkills.tsx";

const Skills = () => {
  return (
    <div className={'relative px-[20rem] pt-[6rem] pb-[8rem] overflow-hidden'}>
      <img
        src={bg}
        alt="skills background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className={'relative z-10'}>
        <h1
          className={'mb-[4rem] text-white text-center text-[4rem] underline underline-offset-8 tracking-[2px] font-clash-display font-semibold'}>
          Skills
        </h1>
        <div className={'flex flex-wrap flex-row mb-6 justify-between'}>
          <Development />
          <OtherSkills />
        </div>
      </div>
    </div>
  );
};

export default Skills;