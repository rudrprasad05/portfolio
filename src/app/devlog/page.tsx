import { JOBS_DATA } from "@/data";
import React from "react";

import FullWidthContainer from "../components/FullWidthContainer";
import PaddedContainer from "../components/PaddedContainer";

const page = () => {
  return (
    <PaddedContainer>
      <FullWidthContainer>
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl">Devlog</h1>
          <p className="text-lg text-muted-foreground/90">
            A detailed look into my employment history
          </p>
        </div>
      </FullWidthContainer>
    </PaddedContainer>
  );
};

export default page;
