import {BiWifi} from "react-icons/bi";
import {BsEnvelope, BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs";

const ContactOther = () => {
  return (
    <div className="w-128 p-6 bg-white rounded-sm font-archivo text-[#333]">
      <h2 className="text-[2rem] font-semibold mb-6 flex items-center">
        <BiWifi size={35} className={'mr-4'}/>
        Connect with me!
      </h2>
      <div>
        <ul className={'px-3 py-6'}>
          <li className={'flex items-center text-[1.25rem] mb-6'}>
            <BsLinkedin size={25} className={'mr-4'}/>
            LinkedIn
          </li>

          <li className={'flex items-center text-[1.25rem] mb-6'}>
            <BsGithub size={25} className={'mr-4'}/>
            Github
          </li>

          <li className={'flex items-center text-[1.25rem] mb-6'}>
            <BsInstagram size={25} className={'mr-4'}/>
            Instagram
          </li>

          <li className={'flex items-center text-[1.25rem] mb-6'}>
            <BsEnvelope size={25} className={'mr-4'}/>
            mlovreko123@gmail.com
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactOther;