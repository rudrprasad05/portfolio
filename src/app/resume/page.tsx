import FullWidthContainer from "@/components/global/FullWidthContainer";
import PaddedContainer from "@/components/global/PaddedContainer";
import React from "react";

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
      </FullWidthContainer>
    </PaddedContainer>
  );
};

export default page;
