import { PROJECT_DATA } from "@/data";
import React from "react";

import FullWidthContainer from "@/components/global/FullWidthContainer";
import PaddedContainer from "@/components/global/PaddedContainer";
import ProjectCard from "./ProjectCard";

const page = () => {
  return (
    <PaddedContainer>
      <FullWidthContainer>
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl">Projects</h1>
          <p className="text-lg text-muted-foreground/90">
            A detailed look into my projects, both open and closed source
          </p>
        </div>
        <div className="mt-12">
          {PROJECT_DATA.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </FullWidthContainer>
    </PaddedContainer>
  );
};

export default page;
