import FullWidthContainer from "@/components/global/FullWidthContainer";
import PaddedContainer from "@/components/global/PaddedContainer";
import React from "react";

const page = () => {
  return (
    <PaddedContainer>
      <FullWidthContainer>
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl">Reads</h1>
          <p className="text-lg text-muted-foreground/90">
            A collection of my articles and thoughts
          </p>
        </div>
      </FullWidthContainer>
    </PaddedContainer>
  );
};

export default page;
