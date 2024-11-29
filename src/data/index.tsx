import { ReactIconSvg, SpringIconSvg } from "@/app/components/svg";
import { ETechStack, IProjectData, TechStackType, TJobData } from "@/types";
import React, { SVGProps } from "react";

export const ReactTech: TechStackType = {
  icon: <ReactIconSvg className="w-full" />,
  name: "React",
  desc: "A dynamic javascript framework made by meta. ",
};
export const SpringTech: TechStackType = {
  icon: <ReactIconSvg className="w-full" />,
  name: "React",
  desc: "A dynamic javascript framework made by meta. ",
};

export const TECH_STACK: TechStackType[] = [ReactTech, SpringTech];

export const JOBS_DATA: TJobData[] = [
  {
    startDate: "22 June 2024",
    time: { type: "YEARS", duration: 4 },
    endDate: "22 July 2024",
    jobTitle: "Web Developer",
    location: "123 Joe Street, Samabula, Suva, Fiji",

    techUsed: [ETechStack.AWS, ETechStack.NODE],
    describtion:
      "During my tenure at X Company, I was responsible for designing, developing, and maintaining dynamic, user-friendly websites and web applications. My role involved collaborating closely with designers, project managers, and backend developers to ensure seamless integration and functionality",
    tech: [
      {
        icon: <ReactIconSvg className="w-full" />,
        name: "React",
        desc: "A dynamic javascript framework made by meta. ",
      },
    ],
  },
  {
    startDate: "23 June 2024",
    time: { type: "YEARS", duration: 4 },
    location: "123 Joe Street, Samabula, Suva, Fiji",

    endDate: "22 July 2024",
    jobTitle: "Web Developer",
    techUsed: [ETechStack.AWS, ETechStack.NODE],
    describtion:
      "During my tenure at X Company, I was responsible for designing, developing, and maintaining dynamic, user-friendly websites and web applications. My role involved collaborating closely with designers, project managers, and backend developers to ensure seamless integration and functionality",
    tech: [
      {
        icon: <ReactIconSvg className="w-full" />,
        name: "React",
        desc: "A dynamic javascript framework made by meta. ",
      },
      {
        icon: <SpringIconSvg className="w-full" />,
        name: "React",
        desc: "A dynamic javascript framework made by meta. ",
      },
    ],
  },
  {
    startDate: "24 June 2024",
    time: { type: "YEARS", duration: 4 },
    location: "123 Joe Street, Samabula, Suva, Fiji",

    endDate: "22 July 2024",
    jobTitle: "Web Developer",
    techUsed: [ETechStack.AWS, ETechStack.NODE],
    describtion:
      "During my tenure at X Company, I was responsible for designing, developing, and maintaining dynamic, user-friendly websites and web applications. My role involved collaborating closely with designers, project managers, and backend developers to ensure seamless integration and functionality",
    tech: [
      {
        icon: <ReactIconSvg className="w-full" />,
        name: "React",
        desc: "A dynamic javascript framework made by meta. ",
      },
    ],
  },
];

export const PROJECT_DATA: IProjectData[] = [
  {
    name: "Projectg 1",
    link: "#",
    github: "#",
    desc: "lorem",
    img: "/images/project1.png",
    tech: [ReactTech, SpringTech],
  },
  {
    name: "Projectg 2",
    link: "#",
    github: "#",
    desc: "lorem",
    img: "/images/project1.png",
    tech: [ReactTech, SpringTech],
  },
];
