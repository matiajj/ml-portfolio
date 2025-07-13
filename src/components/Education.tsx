import {BsMortarboardFill} from "react-icons/bs";

const Education = () => {
  return (
    <div className={'w-1/2 mb-5'}>
      <h2
        className={'mb-4 text-white text-3xl tracking-[2px] font-clash-display font-medium flex items-center'}>
        <BsMortarboardFill size={30} className={'mr-4'}/>
        Education
      </h2>

      <div className={'mb-6 font-archivo'}>
        <h2 className={'text-white font-medium'}>FER</h2>
        <h3 className={'text-gray-100'}>Bachelor's degree, Computer Science</h3>
        <h3 className={'text-gray-300'}>Oct 2022 - Jul 2025</h3>
      </div>

      <div className={' font-archivo'}>
        <h2 className={'text-white font-medium'}>Technical School Sisak</h2>
        <h3 className={'text-gray-100'}>Computer Technician</h3>
        <h3 className={'text-gray-300'}>Sep 2018 - Jul 2022</h3>
      </div>
    </div>
  );
};

export default Education;