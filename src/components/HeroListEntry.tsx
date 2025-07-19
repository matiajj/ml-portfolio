import type {PropsWithChildren} from "react";

const HeroListEntry = ({ children }: PropsWithChildren) => {
  return (
    <li className={`min-w-86 mr-4 my-2 py-0.5 px-0.5 
                    flex items-center justify-center
                    bg-[#555] rounded-sm 
                    hover:cursor-pointer hover:bg-[#386641] hover:text-[#386641]
                    select-none transition`}>
      <div className={`py-3.5 px-4.5 flex justify-center items-center bg-white h-full w-full rounded-sm`}>
        {children}
      </div>
    </li>
  );
};

export default HeroListEntry;