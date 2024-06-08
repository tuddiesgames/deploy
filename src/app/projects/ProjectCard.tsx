"use client";

import Image from "next/image";

const ProjectCard = ({ project }:any) => {
  return (
    <div className="flex flex-col items-center p-4 m-4 bg-primary rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 animate-fadeInUp">
      <Image
        src={`/${project.image}`}
        alt={project.title}
        width={200}
        height={200}
        className="rounded-lg"
      />
      <h3 className="text-xl text-white mt-4">{project.title}</h3>
      <p className="text-white mt-2">{project.description}</p>
    </div>
  );
};

export default ProjectCard;
