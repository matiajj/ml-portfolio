import bg from '../assets/images/skills-bg.svg'
import Development from "./Development.tsx";
import OtherSkills from "./OtherSkills.tsx";

const Skills = () => {
  return (
    <div id={"skills"} className={'relative 2xl:px-[20rem] xl:px-[14rem] lg:px-[6rem] md:px-[4rem] px-[1.5rem] pt-[6rem] pb-[8rem] overflow-hidden'}>
      <img
        src={bg}
        alt="skills background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className={'relative z-10'}>
        <h1
          className={'mb-[4rem] text-white text-center sm:text-[4rem] text-[3rem] underline underline-offset-8 tracking-[2px] font-clash-display font-semibold'}>
          Skills
        </h1>
        <div className={'flex lg:flex-row flex-col mb-6 justify-between'}>
          <Development/>
          <div className={'lg:mb-[0rem] mb-[3rem]'}/>
          <OtherSkills/>
        </div>
      </div>
    </div>
  );
};

export default Skills;