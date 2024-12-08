import React from "react";
import LayoutContainer from "./components/global/LayoutContainer";
import FullWidthContainer from "./components/global/FullWidthContainer";
import PaddedContainer from "./components/global/PaddedContainer";

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
