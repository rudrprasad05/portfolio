import { ReactIconSvg } from "../svg";
import JobsSection from "./JobsSection";
import { JOBS_DATA } from "@/data";
import { ETechStack, TJobData } from "@/types";
import React from "react";

const Experience = () => {
  return (
    <div className="mt-16">
      <div className="mb-6">
        <h2 className="">Experience</h2>
        <p className="text-muted-foreground/70">
          A detailed look into the places I&apos;ve worked at. It&apos;s help me
          become the developer I am today
        </p>
      </div>
      {JOBS_DATA.map((j, i) => (
        <JobsSection key={i} {...j} />
      ))}
    </div>
  );
};

export default Experience;
