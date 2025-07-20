import portrait from '../assets/images/hero.png'
import portrait_mobile from '../assets/images/hero_mobile.png'
import {
  BsFileEarmarkCodeFill,
  BsFilePersonFill,
  BsGearFill, BsSendFill,
} from "react-icons/bs";
import HeroListEntry from "./HeroListEntry.tsx";

const Hero = () => {
  return (
    <div className="2xl:px-[8rem] xl:px-[4rem] md:px-[2rem] px-[1.5rem] xl:py-[8rem] py-[6rem] text-[#333] lg:h-lvh lg:min-h-256 flex xl:flex-row flex-col ">
      <div className={'xl:min-w-192 xl:w-224 w-full xl:pt-[12rem] pt-[0rem]'}>
        <div className={'xl:text-left md:text-center text-left'}>
          <h1
            className={'mb-4 2xl:text-[4.75rem] md:text-[4rem] text-[3rem] tracking-[2px] font-clash-display font-semibold md:leading-20 leading-14'}>
            Matija Lovreković
          </h1>
          <p className={'mb-12 text-[1.25rem] font-archivo'}>
            Student, web developer and cybersecurity enthusiast from Croatia.
          </p>
        </div>

        <div className={'w-full xl:hidden flex '}>
          <img src={portrait_mobile} alt={'matija'} className={'mx-auto w-156'}/>
        </div>

        <ul className={'flex flex-wrap xl:justify-start justify-center mt-12'}>
          <a href={"#about"}>
            <HeroListEntry>
              <BsFilePersonFill size={30}/>
              <span className={'ml-2 font-archivo sm:text-[1.25rem]'}>About</span>
            </HeroListEntry>
          </a>

          <a href={"#projects"}>
            <HeroListEntry>
              <BsFileEarmarkCodeFill size={30}/>
              <span className={'ml-2 font-archivo sm:text-[1.25rem]'}>Projects</span>
            </HeroListEntry>
          </a>

          <div className="sm:w-full"></div>

          <a href={"#skills"}>
            <HeroListEntry>
              <BsGearFill size={28}/>
              <span className={'ml-2 font-archivo sm:text-[1.25rem]'}>Skills</span>
            </HeroListEntry>
          </a>

          <a href={"#contact"}>
            <HeroListEntry>
              <BsSendFill size={27}/>
              <span className={'ml-2 font-archivo sm:text-[1.25rem]'}>Contact</span>
            </HeroListEntry>
          </a>
        </ul>
      </div>

      <div className={'min-w-72 max-w-156 w-full xl:flex hidden items-center'}>
        <img src={portrait} alt={'matija'} className={'mx-auto w-156'}/>
      </div>
    </div>
  );
};

export default Hero;