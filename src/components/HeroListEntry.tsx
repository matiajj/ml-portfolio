import {motion} from "motion/react";
import type {PropsWithChildren} from "react";

const HeroListEntry = ({ children }: PropsWithChildren) => {
  return (
    <motion.li className={'min-w-86 mr-4 my-2 py-4 px-5 flex justify-center items-center border-2 border-solid border-[#555] rounded-sm' +
      'hover:cursor-pointer select-none'}>
      {children}
    </motion.li>
  );
};

export default HeroListEntry;