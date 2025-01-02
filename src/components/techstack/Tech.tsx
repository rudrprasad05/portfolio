import { ReactIconSvg, SpringIconSvg } from "../svg";
import TechCard from "./TechCard";
import { TECH_STACK } from "@/data";

const TechStack = () => {
  return (
    <div className="mt-16">
      <div className="mb-6">
        <h2 className="">Tech Stack</h2>
        <p className="text-muted-foreground/70">
          The frameworks, languages, cloud services and so much more I use on a
          regular basis
        </p>
      </div>
      <div className="grid grid-cols-2 gap-6 ">
        {TECH_STACK.map((d, i) => (
          <TechCard key={i} {...d} />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
