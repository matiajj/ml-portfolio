import image from '../assets/images/about.png'
import {BsFilePerson} from "react-icons/bs";
import Education from "./Education.tsx";
import Experience from "./Experience.tsx";

const About = () => {
  return (
    <div className={'bg-[#386641] px-[20rem] py-[6rem]'}>
      <h1 className={'mb-[4rem] text-white text-center text-[4rem] underline underline-offset-8 tracking-[2px] font-clash-display font-semibold'}>
        About me
      </h1>

      <div className={'flex flex-row mb-6'}>
        <div className={'w-2/3 pr-20'}>
          <h2 className={'mb-2 text-white text-[2rem] tracking-[2px] font-clash-display font-medium flex items-center'}>
            <BsFilePerson size={30} className={'mr-4'}/>
            Bio
          </h2>
          <p className={'mb-20 text-gray-200 text-justify font-archivo text-[1.25rem] leading-9'}>
            Computer science student passionate about his field.
            Born in Petrinja, now studying in Zagreb. I primarily work
            on front-end web development projects, while continuously building my cybersecurity skills.
          </p>

          <div className={'mb-8 flex flex-row'}>
            <Education/>
            <Experience/>
          </div>
        </div>
        <div className={'w-1/3'}>
          <img src={image} alt={'img'} className={'border-white border-8 p-2'}/>
        </div>
      </div>
    </div>
  );
};

export default About;