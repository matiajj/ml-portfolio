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
    <div className={'lg:w-162 lg:mr-24'}>
      <h2
        className={'mb-4 text-white sm:text-[2rem] text-[1.5rem] tracking-[2px] font-clash-display font-medium flex items-center'}>
        <BsBraces size={30} className={'mr-4'}/>
        Development
      </h2>
      <p className={'mb-8 text-gray-200 font-archivo sm:text-[1.25rem] text-[1.125rem] md:leading-9 leading-7'}>
        In my early development days, I worked on C# applications ranging from small tools that supported my
        high school lab work to larger projects with GUI. During my time at university,
        I focused on web development and created projects that consistently received top grades.
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