import ProjectCardTag from "./ProjectCardTag.tsx";

interface Props {
  image: string;
  title: string;
  description: string;
  tags: string[];
}

const ProjectCard = ({image, title, description, tags}: Props) => {
  return (
    <div className={'w-108 mb-[4rem]'}>
      <div className={'min-h-49 border-b-2 border-[#386641]'}>
        <img src={image} alt={'mrl'} className={'p-2'}/>
      </div>
      <div className={'px-2 py-3 font-archivo '}>
        <div className={'text-xl text-[#222] font-semibold'}>{title}</div>
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