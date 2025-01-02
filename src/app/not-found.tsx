import FullWidthContainer from "@/components/global/FullWidthContainer";
import LayoutContainer from "@/components/global/LayoutContainer";
import PaddedContainer from "@/components/global/PaddedContainer";
import React from "react";

function NotFoundPage() {
  return (
    <LayoutContainer>
      <FullWidthContainer>
        <PaddedContainer>
          <h1>404</h1>
        </PaddedContainer>
      </FullWidthContainer>
    </LayoutContainer>
  );
}

export default NotFoundPage;
