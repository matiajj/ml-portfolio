interface Props {
  text: string;
}

const ProjectCardTag = ({ text }: Props) => {
  return (
    <li className={'text-sm px-2 py-1 mr-1 mb-1 bg-[#386641] text-white rounded-xs'}>
      {text}
    </li>
  );
};

export default ProjectCardTag;