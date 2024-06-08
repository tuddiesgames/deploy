"use client";

import NavBar from "../NavBar";
import ProjectCard from "./ProjectCard";

const Page = () => {
  const projectList = [
    {
      image: "Candy vs Chilly.webp",
      title: "Candy vs Chilly",
      description: "Multi User Logical Game.",
    },
    {
      image: "flames logo.webp",
      title: "Flames Prediction",
      description: "Flames Calculator, Fun App",
    },
    {
      image: "Rex Knight Rider.webp",
      title: "Rex Knight Rider",
      description: "Endless runner game",
    },
  ];

  return (
    <div className="bg-secondaryDark w-full h-full flex flex-col items-center">
        <NavBar />
      <h1 className="text-h1 text-white mb-10">My Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projectList.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Page;
