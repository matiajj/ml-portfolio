import {BsBraces} from "react-icons/bs";

import react_logo from '../assets/images/development/react.svg'
import js_logo from '../assets/images/development/js.svg'
import ts_logo from '../assets/images/development/ts.svg'
import tailwind_logo from '../assets/images/development/tailwind.svg'
import cs_logo from '../assets/images/development/cs.svg'
import github_logo from '../assets/images/development/github.svg'
import webstorm_logo from '../assets/images/development/webstorm.svg'
import vsc_logo from '../assets/images/development/vscode.svg'

import SkillsCard from "./SkillsCard.tsx";

const Development = () => {
  return (
    <div className={'w-168 mr-24'}>
      <h2
        className={'mb-4 text-white text-[2rem] tracking-[2px] font-clash-display font-medium flex items-center'}>
        <BsBraces size={30} className={'mr-4'}/>
        Development
      </h2>
      <p className={'mb-8 text-gray-200 text-justify font-archivo text-[1.25rem] leading-9'}>
        Computer science student passionate about his field.
        Born in Petrinja, now studying in Zagreb. I primarily work
        on front-end web development projects, while continuously building my cybersecurity skills.
      </p>
      <div className={'flex flex-row flex-wrap'}>
        <SkillsCard> <img src={react_logo} alt={'react_logo'}/> </SkillsCard>
        <SkillsCard> <img src={js_logo} alt={'js_logo'}/> </SkillsCard>
        <SkillsCard> <img src={ts_logo} alt={'ts_logo'}/> </SkillsCard>
        <SkillsCard> <img src={tailwind_logo} alt={'tailwind_logo'}/> </SkillsCard>
        <SkillsCard> <img src={cs_logo} alt={'cs_logo'}/> </SkillsCard>
        <SkillsCard> <img src={webstorm_logo} alt={'webstorm_logo'}/> </SkillsCard>
        <SkillsCard> <img src={vsc_logo} alt={'vsc_logo'}/> </SkillsCard>
        <SkillsCard> <img src={github_logo} alt={'github_logo'}/> </SkillsCard>
      </div>
    </div>
  );
};

export default Development;