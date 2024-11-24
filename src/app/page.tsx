import Experience from "./components/explore/Experience";
import Header from "./components/explore/Header";
import PaddedContainer from "./components/PaddedContainer";
import Projects from "./components/projects/Projects";
import TechStack from "./components/techstack/Tech";

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
      <Projects />
      <TechStack />
    </PaddedContainer>
  );
}
