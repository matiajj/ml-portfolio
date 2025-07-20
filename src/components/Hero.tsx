import portrait from '../assets/images/hero.png'
import {
  BsFileEarmarkCodeFill,
  BsFilePersonFill,
  BsGearFill, BsSendFill,
} from "react-icons/bs";
import HeroListEntry from "./HeroListEntry.tsx";

const Hero = () => {
  return (
    <div className="lg:px-[8rem] md:px-[4rem] px-[1.5rem] py-[8rem] text-[#333] h-lvh flex xl:flex-row flex-col items-center">
      <div className={'xl:min-w-192 xl:w-224 w-full'}>
        <h1 className={'mb-4 2xl:text-[4.75rem] md:text-[4rem] text-[3rem] tracking-[2px] font-clash-display font-semibold md:leading-20 leading-14'}>Matija Lovreković</h1>
        <p className={'mb-16 text-[1.25rem] font-archivo'}>Student, web developer and cybersecurity enthusiast from Croatia.</p>

        <ul className={'flex flex-wrap md:justify-start justify-center'}>
          <HeroListEntry>
            <BsFilePersonFill size={30}/>
            <span className={'ml-2 font-archivo sm:text-[1.25rem]'}>About</span>
          </HeroListEntry>

          <HeroListEntry>
            <BsFileEarmarkCodeFill size={30}/>
            <span className={'ml-2 font-archivo sm:text-[1.25rem]'}>Projects</span>
          </HeroListEntry>

          <div className="sm:w-full"></div>

          <HeroListEntry>
            <BsGearFill size={28}/>
            <span className={'ml-2 font-archivo sm:text-[1.25rem]'}>Skills</span>
          </HeroListEntry>

          <HeroListEntry>
            <BsSendFill size={27}/>
            <span className={'ml-2 font-archivo sm:text-[1.25rem]'}>Contact</span>
          </HeroListEntry>
        </ul>
      </div>

      <div className={'min-w-72 max-w-156 w-full xl:block hidden'}>
        <img src={portrait} alt={'matija'} className={'mx-auto w-156'}/>
      </div>
    </div>
  );
};

export default Hero;