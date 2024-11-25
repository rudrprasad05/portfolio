import React from "react";
import JobsSection from "./JobsSection";
import { ETechStack, TJobData } from "@/types";
import { ReactIconSvg } from "../svg";
import { JOBS_DATA } from "@/data";

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
        <JobsSection
          key={i}
          isLast={JOBS_DATA.length == i + 1}
          startDate={j.startDate}
          describtion={j.describtion}
        />
      ))}
    </div>
  );
};

export default Experience;
