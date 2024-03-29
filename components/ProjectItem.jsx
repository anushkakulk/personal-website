import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsCodeSlash } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";


const ProjectItem = ({ title, backgroundImg, tech, projectUrl }) => {
  const imageStyle = {
    objectFit: 'fill', 
    width: '100%', 
    height: '100%', 
    borderRadius: '8px', 
  };

  return (
    <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group project-item project-container'>
      <Image style={imageStyle} src={backgroundImg} alt='/' /> 
      <div className='hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10'>
        <h3 className='text-2xl text-white tracking-wider text-center'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-center'>{tech}</p>
        <Link href={projectUrl}>
          <p className='text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer'>More Info</p>
        </Link>
      </div>
      <div className='absolute inset-0 rounded-xl group-hover:bg-gradient-to-r from-[#8FC0A9] to-[#C8D5B9] z-0'></div>
    </div>
  );
};

export default ProjectItem;