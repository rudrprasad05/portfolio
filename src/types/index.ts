import { SVGProps } from "react";

export enum ETechStack {
  REACT = "React",
  NODE = "NodeJs",
  AWS = "AWS",
  GIT = "Git",
}

export type TJobData = {
  time: { type: "YEARS" | "MONTHS"; duration: number };
  location: string;
  startDate: string;
  endDate: string;
  jobTitle: string;
  techUsed: ETechStack[];
  describtion: string;
  tech: TechStackType[];
};

export type TechStackType = {
  icon: SVGProps<SVGSVGElement>;
  name: string;
  desc: string;
};

export interface IProjectData {
  name: string;
  link: string;
  github: string;
  desc: string;
  img: string;
  tech: TechStackType[];
}
