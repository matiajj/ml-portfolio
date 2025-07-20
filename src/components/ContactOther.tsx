import {BiWifi} from "react-icons/bi";
import {BsBoxArrowUpRight, BsEnvelope, BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs";

const ContactOther = () => {
  return (
    <div className="lg:w-128 p-6 bg-white rounded-sm font-archivo text-[#333]">
      <h2 className="sm:text-[2rem] text-[1.75rem] font-semibold mb-6 flex items-center">
        <BiWifi size={35} className={'mr-4'}/>
        Connect with me!
      </h2>
      <div>
        <ul className={'px-3 py-2'}>
          <li className={'flex items-center sm:text-[1.25rem] mb-6'}>
            <BsLinkedin size={25} className={'mr-4'}/>
            LinkedIn
            <a href={'https://www.linkedin.com/in/matija-lovrekovic'} target="_blank" className={'ml-4'}>
              <BsBoxArrowUpRight size={18} className={'cursor-pointer'}/>
            </a>
          </li>

          <li className={'flex items-center sm:text-[1.25rem] mb-6'}>
            <BsGithub size={25} className={'mr-4'}/>
            Github
            <a href={'https://github.com/matiajj'} target="_blank" className={'ml-4'}>
              <BsBoxArrowUpRight size={18} className={'cursor-pointer'}/>
            </a>
          </li>

          <li className={'flex items-center sm:text-[1.25rem] mb-6'}>
            <BsInstagram size={25} className={'mr-4'}/>
            Instagram
            <a href={'https://www.instagram.com/matijalovrekovic3'} target="_blank" className={'ml-4'}>
              <BsBoxArrowUpRight size={18} className={'cursor-pointer'}/>
            </a>
          </li>

          <li className={'flex items-center sm:text-[1.25rem] mb-6'}>
            <BsEnvelope size={25} className={'mr-4'}/>
            mlovreko123@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactOther;