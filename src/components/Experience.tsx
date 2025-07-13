import {BsPersonBadgeFill} from "react-icons/bs";

const Experience = () => {
  return (
    <div className={'w-1/2 mb-5'}>
      <h2
        className={'mb-4 text-white text-3xl tracking-[2px] font-clash-display font-medium flex items-center'}>
        <BsPersonBadgeFill size={30} className={'mr-4'}/>
        Experience
      </h2>

      <div className={'mb-6 font-archivo'}>
        <h2 className={'text-white font-medium'}>Incendo - Seasonal</h2>
        <h3 className={'text-gray-100'}>.NET developer</h3>
        <h3 className={'text-gray-300'}>Jun 2023 - Sep 2023</h3>
      </div>

      <div className={'font-archivo'}>
        <h2 className={'text-white font-medium'}>SWD Computer Srl - Internship</h2>
        <h3 className={'text-gray-100'}>Computer Technician</h3>
        <h3 className={'text-gray-300'}>Mar 2022 - Apr 2022</h3>
      </div>
    </div>
  );
};

export default Experience;