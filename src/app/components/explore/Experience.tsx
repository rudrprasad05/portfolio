import React from "react";
import JobsSection from "./JobsSection";

const jobs = [
  {
    date: "11 Sept 2024",
    content: "lorem",
  },
  {
    date: "11 Sept 2024",
    content: "lorem",
  },
  {
    date: "11 Sept 2024",
    content: "lorem",
  },
];

const Experience = () => {
  return (
    <div className="mt-16">
      <div className="mb-6">
        <h2 className="">Experience</h2>
      </div>
      {jobs.map((j, i) => (
        <JobsSection
          key={i}
          isLast={jobs.length == i + 1}
          date={j.date}
          content={j.content}
        />
      ))}
    </div>
  );
};

export default Experience;
