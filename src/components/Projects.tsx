import ProjectCard from "./ProjectCard.tsx";
import mrl from '../assets/images/projects/mrl-code.png';
import rpi from '../assets/images/projects/reci-pa-ispeci.png'
import marketplace from '../assets/images/projects/marketplace-vozila.png'

const Projects = () => {
  return (
    <div className={'px-[14rem] py-[6rem]'}>
      <h1 className={'mb-[4rem] text-[#333] text-center text-[4rem] ' +
        'underline underline-offset-8 tracking-[2px] font-clash-display font-semibold'}>
        Projects
      </h1>

      <div className={'flex flex-row flex-wrap justify-between'}>
        <ProjectCard image={mrl}
                     title={'MetaRoboLearn - Code'}
                     description={'Code is a fun platform that helps children develop basic programming skills by writing code to control a virtual 3D car or a real robot vehicle.'}
                     tags={['React', 'TypeScript', 'three.js', 'Tailwind CSS']}
                     link={'https://github.com/matiajj/metarobolearn-code'}/>

        <ProjectCard image={rpi}
                     title={'Reci pa ispeci'}
                     description={'Modern platform that simplifies everyday meal preparation and allows interaction among culinary enthusiasts by replacing traditional and inaccessible recipe organization methods.'}
                     tags={['React', 'JavaScript', 'Bootstrap']}
                     link={'https://github.com/alexMatika-code/Reci-pa-ispeci'}/>

        <ProjectCard image={marketplace}
                     title={'Marketplace vozila'}
                     description={'Desktop vehicle marketplace app that supports (very basic) user authentication, ad creation, vehicle search by criteria, and browsing listings and profiles.'}
                     tags={['C#', 'Windows Forms']}
                     link={'https://github.com/matiajj/marketplace-vozila'}/>

        {/*<div className={'w-98 mb-[4rem]'} />*/}

      </div>
    </div>
  );
};

export default Projects;