import React, { useEffect, useState } from "react";

async function fetchData() {
  // Simulate a delay (API call)
  return new Promise((resolve) =>
    setTimeout(() => resolve("Fetched data from API!"), 300000)
  );
}

export default async function Home() {
  return <main></main>;
}
