import React from "react";

import ProjectCard from "./ProjectCard";
import { PROJECT_DATA } from "@/data";

const Projects = () => {
  return (
    <div className="mt-16">
      <div className="mb-6">
        <h2 className="">Projects</h2>
        <p className="text-muted-foreground/70">
          A comprehensive list of projects I&apos;ve done over the years,
          including open source and freelance systems
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 ">
        {PROJECT_DATA.map((d, i) => (
          <ProjectCard key={i} {...d} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
