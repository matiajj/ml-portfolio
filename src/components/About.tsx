import image from '../assets/images/about.png'
import bg from '../assets/images/about-bg.svg'
import {BsFilePerson} from "react-icons/bs";
import Education from "./Education.tsx";
import Experience from "./Experience.tsx";

const About = () => {
  return (
    <div id={"about"} className={'relative py-[6rem] 2xl:px-[20rem] xl:px-[14rem] lg:px-[6rem] md:px-[4rem] px-[1.5rem] overflow-hidden'}>
      <img
        src={bg}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      <div className={'relative z-10'}>
        <h1 className={'mb-[4rem] text-white text-center sm:text-[4rem] text-[3rem] underline underline-offset-8 tracking-[2px] font-clash-display font-semibold'}>
          About me
        </h1>

        <div className={'flex lg:flex-row lg:justify-items-start flex-col justify-end mb-6 mx-auto'}>
          <div className={'lg:w-2/3 lg:pr-20'}>
            <h2 className={'mb-2 text-white sm:text-[2rem] text-[1.75rem] tracking-[2px] font-clash-display font-medium flex items-center'}>
              <BsFilePerson size={30} className={'mr-4'}/>
              Bio
            </h2>
            <p className={'mb-[4rem] text-gray-200 font-archivo sm:text-[1.25rem] text-[1.125rem] md:leading-9 leading-7'}>
              Computer science student passionate about his field.
              Born in Petrinja, now studying in Zagreb. I primarily work
              on front-end web development projects, while continuously building my cybersecurity skills.
            </p>

            <div className={'mb-8 flex sm:flex-row flex-col'}>
              <Education/>
              <div className={'sm:mb-[0rem] mb-[2rem]'}/>
              <Experience/>
            </div>
          </div>
          <div className={'min-w-80 lg:w-1/3 w-1/2 mx-auto'}>
            <img src={image} alt={'img'} className={'border-white border-8 p-2'}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;