import React from "react";
import PaddedContainer from "@/components/global/PaddedContainer";
import FullWidthContainer from "@/components/global/FullWidthContainer";

import JobCard from "./JobCard";
import { JOBS_DATA } from "@/data";

const page = () => {
  return (
    <PaddedContainer>
      <FullWidthContainer>
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl">Experience</h1>
          <p className="text-lg text-muted-foreground/90">
            A detailed look into my employment history
          </p>
        </div>
        <div className="mt-12">
          {JOBS_DATA.map((d, i) => (
            <JobCard {...d} key={i} />
          ))}
        </div>
      </FullWidthContainer>
    </PaddedContainer>
  );
};

export default page;
