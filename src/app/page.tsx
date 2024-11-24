import React, { useEffect, useState } from "react";

import Header from "./components/explore/Header";
import FullWidthContainer from "./components/FullWidthContainer";
import PaddedContainer from "./components/PaddedContainer";
import Experience from "./components/explore/Experience";

async function fetchData() {
  // Simulate a delay (API call)
  return new Promise((resolve) =>
    setTimeout(() => resolve("Fetched data from API!"), 300000)
  );
}

export default async function Home() {
  // const r = await fetchData();
  return (
    <PaddedContainer>
      <Header />
      <Experience />
    </PaddedContainer>
  );
}
