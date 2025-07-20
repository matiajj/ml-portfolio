import type {PropsWithChildren} from "react";

const SkillsCard = ({children}: PropsWithChildren) => {
  return (
    <div className={'lg:w-16 lg:h-16 w-14 h-14 p-2 mr-4 mb-4 bg-gray-100 rounded-sm shadow-md'}>
      {children}
    </div>
  );
};

export default SkillsCard;