import type {PropsWithChildren} from "react";

const SkillsCard = ({children}: PropsWithChildren) => {
  return (
    <div className={'w-16 h-16 p-2 mr-4 mb-4 bg-gray-100 rounded-sm shadow-md'}>
      {children}
    </div>
  );
};

export default SkillsCard;