import { SVGProps } from "react";

export enum ETechStack {
  REACT = "React",
  NODE = "NodeJs",
  AWS = "AWS",
  GIT = "Git",
}

export type TTeckStack = {
  icon: React.ReactElement;
  name: string;
  desc: string;
};

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
  icon: React.ReactElement;
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

// db

export type Tag = {
  // Add the fields for the Tag model here if necessary
  id: number;
  name: string;
};

export type Media = {
  id: number;
  name: string;
  alt: string;
  imageId: number;
  createdAt: string;
};

export type Post = {
  id: number | null;
  title: string;
  content: string;
  createdAt: string | null;
  tags: Tag[];
  featuredMedia: Media | null;
};
