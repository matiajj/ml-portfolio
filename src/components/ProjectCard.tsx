import {BsBoxArrowUpRight} from "react-icons/bs";
import ProjectCardTag from "./ProjectCardTag.tsx";

interface Props {
  image: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const ProjectCard = ({image, title, description, tags, link}: Props) => {
  return (
    <div className={'w-112 mb-[4rem] mx-auto'}>
      <div className={'min-h-49 border-b-2 border-[#386641] p-2'}>
        <img src={image} alt={'mrl'} className={' shadow-md'}/>
      </div>
      <div className={'px-2 py-3 font-archivo'}>
        <div className={'text-[1.25rem] text-[#222] font-semibold flex justify-between items-center'}>
          <span>{title}</span>
          <a href={link} target="_blank">
            <BsBoxArrowUpRight size={20} className={'cursor-pointer'}/>
          </a>
        </div>
        <div className={'text-[#444] py-2 mb-1'}>
          {description}
        </div>
        <ul className={'flex flex-row flex-wrap'}>
          {tags.map((tag, index) => (
            <ProjectCardTag key={index} text={tag}/>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProjectCard;