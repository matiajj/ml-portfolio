import Development from "./Development.tsx";
import OtherSkills from "./OtherSkills.tsx";

const Skills = () => {
  return (
    <div className={'bg-[#BC4749] px-[20rem] pt-[6rem] pb-[8rem]'}>
      <h1
        className={'mb-[4rem] text-white text-center text-[4rem] underline underline-offset-8 tracking-[2px] font-clash-display font-semibold'}>
        Skills
      </h1>
      <div className={'flex flex-row mb-6 justify-between'}>
        <Development />
        <OtherSkills />
      </div>
    </div>
  );
};

export default Skills;