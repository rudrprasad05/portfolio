import React from "react";
import LayoutContainer from "./components/LayoutContainer";
import FullWidthContainer from "./components/FullWidthContainer";
import PaddedContainer from "./components/PaddedContainer";

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
