import React from "react";
import ProjectCard from "./ProjectCard";

export interface props {
  name: string;
  link: string;
  github: string;
  desc: string;
  img: string;
}

const data: props[] = [
  {
    name: "Projectg 1",
    link: "#",
    github: "#",
    desc: "lorem",
    img: "/images/project1.png",
  },
  {
    name: "Projectg 2",
    link: "#",
    github: "#",
    desc: "lorem",
    img: "/images/project1.png",
  },
];

const Projects = () => {
  return (
    <div className="mt-16">
      <div className="mb-6">
        <h2 className="">Projects</h2>
        <p className="text-muted-foreground/70">
          A comprehensive list of projects I've done over the years, including
          open source and freelance systems
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 ">
        {data.map((d, i) => (
          <ProjectCard key={i} {...d} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
