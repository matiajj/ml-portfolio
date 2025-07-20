import {BsLightbulb} from "react-icons/bs";
import SkillsCard from "./SkillsCard.tsx";
import live_logo from "../assets/images/other/abletonlive.svg";
import ps_logo from "../assets/images/other/ps.svg";
import lr_logo from "../assets/images/other/lr.svg";
import office_logo from "../assets/images/other/office.svg";

const OtherSkills = () => {
  return (
    <div className={'lg:w-128'}>
      <h2
        className={'mb-4 text-white sm:text-[2rem] text-[1.5rem] tracking-[2px] font-clash-display font-medium flex items-center'}>
        <BsLightbulb size={30} className={'mr-4'}/>
        Other skills
      </h2>
      <p className={'mb-8 text-gray-200 font-archivo sm:text-[1.25rem] text-[1.125rem] md:leading-9 leading-7'}>
        One of my favorite hobbies is photography, which inspired me to learn photo editing using Adobe’s suite of apps.
        Another hobby led me to explore digital audio workstations (DAWs), with Ableton Live being my favorite one.
      </p>
      <div className={'flex flex-row flex-wrap'}>
        <SkillsCard> <img src={live_logo} alt={'live_logo'}/> </SkillsCard>
        <SkillsCard> <img src={ps_logo} alt={'ps_logo'}/> </SkillsCard>
        <SkillsCard> <img src={lr_logo} alt={'lr_logo'}/> </SkillsCard>
        <SkillsCard> <img src={office_logo} alt={'office_logo'}/> </SkillsCard>
      </div>
    </div>
  );
};

export default OtherSkills;