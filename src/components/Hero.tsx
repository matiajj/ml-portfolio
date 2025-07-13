import portrait from '../assets/images/hero.png'
import {
  BsFileEarmarkCodeFill,
  BsFilePersonFill,
  BsGearFill, BsSendFill,
} from "react-icons/bs";
import HeroListEntry from "./HeroListEntry.tsx";

const Hero = () => {
  return (
    <div className="px-[8rem] pb-[0rem] text-[#333] h-lvh flex flex-row items-center">
      <div className={'w-1/2'}>
        <h1 className={'mb-4 text-[4.75rem] tracking-[2px] font-clash-display font-semibold leading-20'}>Matija Lovreković</h1>
        <p className={'mb-16 text-[1.25rem] font-archivo'}>Student, web developer and cybersecurity enthusiast from Croatia.</p>

        <ul className={'flex flex-wrap'}>
          <HeroListEntry>
            <BsFilePersonFill size={30}/>
            <span className={'ml-2 font-archivo text-[1.25rem]'}>About</span>
          </HeroListEntry>

          <HeroListEntry>
            <BsFileEarmarkCodeFill size={30}/>
            <span className={'ml-2 font-archivo text-[1.25rem]'}>Projects</span>
          </HeroListEntry>

          <div className="w-full"></div>

          <HeroListEntry>
            <BsGearFill size={28}/>
            <span className={'ml-2 font-archivo text-[1.25rem]'}>Skills</span>
          </HeroListEntry>

          <HeroListEntry>
            <BsSendFill size={27}/>
            <span className={'ml-2 font-archivo text-[1.25rem]'}>Contact</span>
          </HeroListEntry>
        </ul>
      </div>

      <div className={'w-1/2'}>
        <img src={portrait} alt={'matija'} className={'mx-auto w-156'}/>
      </div>

    </div>
  );
};

export default Hero;