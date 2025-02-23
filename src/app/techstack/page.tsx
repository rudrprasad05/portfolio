import FullWidthContainer from "@/components/global/FullWidthContainer";
import PaddedContainer from "@/components/global/PaddedContainer";
import TechCard from "@/components/techstack/TechCard";
import { TECH_STACK } from "@/data";
import React from "react";

const Page = () => {
  return (
    <PaddedContainer>
      <FullWidthContainer>
        <div className="my-2">
          <h2 className="">Tech Stack</h2>
          <p className="text-muted-foreground/70">
            The frameworks, languages, cloud services and so much more I use on
            a regular basis
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 ">
          {TECH_STACK.map((d, i) => (
            <TechCard key={i} {...d} />
          ))}
        </div>
      </FullWidthContainer>
    </PaddedContainer>
  );
};

export default Page;
