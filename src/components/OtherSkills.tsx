import {BsLightbulb} from "react-icons/bs";
import SkillsCard from "./SkillsCard.tsx";
import live_logo from "../assets/images/other/abletonlive.svg";
import ps_logo from "../assets/images/other/ps.svg";
import lr_logo from "../assets/images/other/lr.svg";
import office_logo from "../assets/images/other/office.svg";

const OtherSkills = () => {
  return (
    <div className={'w-128'}>
      <h2
        className={'mb-4 text-white text-[2rem] tracking-[2px] font-clash-display font-medium flex items-center'}>
        <BsLightbulb size={30} className={'mr-4'}/>
        Other skills
      </h2>
      <p className={'mb-8 text-gray-200 text-justify font-archivo text-[1.25rem] leading-9'}>
        Computer science student passionate about his field.
        Born in Petrinja, now studying in Zagreb. I primarily work
        on front-end web development projects, while continuously building my cybersecurity skills.
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