import {
  AmazonWebServicesIconSvg,
  AspDotNetCoreIconSvg,
  AstroIconSvg,
  CIconSvg,
  DockerIconSvg,
  GitIconSvg,
  GoIconSvg,
  MicrosoftAzureIconSvg,
  MySQLIconSvg,
  NextjsIconSvg,
  NodejsIconSvg,
  PostmanIconSvg,
  ReactIconSvg,
  SpringIconSvg,
  WordPressIconSvg,
} from "@/components/svg";
import { IProjectData, TechStackType, TJobData } from "@/types";
import React, { SVGProps } from "react";

export const ReactTech: TechStackType = {
  icon: <ReactIconSvg className="w-full" />,
  name: "React",
  desc: "A flexible JavaScript library by Meta for building dynamic, interactive user interfaces efficiently",
};
export const MySQLTech: TechStackType = {
  icon: <MySQLIconSvg className="w-full" />,
  name: "MySQL",
  desc: "A fast and efficient database used by millions of software teams around the world. Robust, error-proof and easy to learn",
};
export const AstroTech: TechStackType = {
  icon: <AstroIconSvg className="w-full" />,
  name: "Astro",
  desc: "A modern static site generator focused on delivering fast, content-rich websites using an islands architecture",
};
export const SpringTech: TechStackType = {
  icon: <SpringIconSvg className="w-full" />,
  name: "Spring",
  desc: "A powerful Java framework for building production-ready, standalone, and microservice-based applications with minimal configuration.",
};
export const DockerTech: TechStackType = {
  icon: <DockerIconSvg className="w-full" />,
  name: "Docker",
  desc: "Docker is a platform for building, running, and managing containerized applications in a lightweight and consistent environment.",
};
export const CSharpTech: TechStackType = {
  icon: <CIconSvg className="w-full" />,
  name: "c#",
  desc: " A cross-platform, high-performance framework for building modern, cloud-based, and internet-connected applications",
};
export const AspDotNetCoreTech: TechStackType = {
  icon: <AspDotNetCoreIconSvg className="w-full" />,
  name: "ASP.NET",
  desc: " A cross-platform, high-performance framework for building modern, cloud-based, and internet-connected applications",
};
export const AWSTech: TechStackType = {
  icon: <AmazonWebServicesIconSvg className="w-full" />,
  name: "AWS",
  desc: "A robust, scalable, and cross-platform framework designed to build modern, cloud-based, and internet-connected applications using AWS services",
};
export const NextjsTech: TechStackType = {
  icon: <NextjsIconSvg className="w-full" />,
  name: "NextJS",
  desc: "Next.js is a React-based framework that enables server-side rendering (SSR) and static site generation (SSG), making it ideal for building modern, cloud-based, and high-performance applications",
};

export const GoTech: TechStackType = {
  icon: <GoIconSvg className="w-full" />,
  name: "Go",
  desc: "Go is an excellent choice for high-performance, scalable, and efficient applications. It’s particularly well-suited for backend services like VPN management and user authentication.",
};

export const NodejsTech: TechStackType = {
  icon: <NodejsIconSvg className="w-full" />,
  name: "NodeJS",
  desc: "A lightweight, portable, and scalable solution for deploying Node.js applications in consistent environments across platforms",
};
export const WordPressTech: TechStackType = {
  icon: <WordPressIconSvg className="w-full" />,
  name: "Wordpress",
  desc: "A lightweight, portable, and scalable solution for deploying Node.js applications in consistent environments across platforms",
};
export const MicrosoftAzureTech: TechStackType = {
  icon: <MicrosoftAzureIconSvg className="w-full" />,
  name: "Azure",
  desc: "A lightweight, portable, and scalable solution for deploying Node.js applications in consistent environments across platforms",
};
export const GitTech: TechStackType = {
  icon: <GitIconSvg className="w-full" />,
  name: "Git",
  desc: "A lightweight, portable, and scalable solution for deploying Node.js applications in consistent environments across platforms",
};
export const PostmanTech: TechStackType = {
  icon: <PostmanIconSvg className="w-full" />,
  name: "Postman",
  desc: "A lightweight, portable, and scalable solution for deploying Node.js applications in consistent environments across platforms",
};
export const TECH_STACK: TechStackType[] = [
  ReactTech,
  GitTech,
  AWSTech,
  CSharpTech,
  MySQLTech,
  NextjsTech,
  DockerTech,
  SpringTech,
  AstroTech,
  GoTech,
  NodejsTech,
];

export const JOBS_DATA: TJobData[] = [
  {
    startDate: "13 Jan 2022",
    time: { type: "YEARS", duration: 1.5 },
    endDate: "24 May 2023",
    jobTitle: "Freelance Developer",
    location: "Samabula, Suva, Fiji",
    describtion:
      "During my time as a freelance developer at Procyon Web Development, I sharpened my skills as a web developer by designing and implementing innovative tools and software solutions tailored for the web",
    tech: [NextjsTech, AstroTech, MySQLTech],
  },
  {
    startDate: "24 June 2024",
    time: { type: "MONTHS", duration: 1 },
    location: "EzyTech, Nadi, Fiji",
    endDate: "19 July 2024",
    jobTitle: "Web Developer",
    describtion:
      "During my time as a web developer and IT technician at EzyTech, I honed my skills by creating and maintaining WordPress websites, developing tailored web solutions, and providing technical support to ensure seamless IT operations",
    tech: [WordPressTech, MySQLTech],
  },
  {
    startDate: "18 November 2024",
    time: { type: "MONTHS", duration: 4 },
    location: "Innovate Digital Fiji, Nadi",
    endDate: "24 February 2025",
    jobTitle: "Software Developer",
    describtion:
      "During my tenure at Innovate Digital Fiji, I enhanced my expertise by developing web applications using ASP.NET C#, Azure, and React/Next.js, delivering scalable and modern solutions tailored to client needs",
    tech: [
      NextjsTech,
      AspDotNetCoreTech,
      MySQLTech,
      MicrosoftAzureTech,
      GitTech,
      PostmanTech,
    ],
  },
];

export const PROJECT_DATA: IProjectData[] = [
  {
    name: "Goshawk - Ecommerce Site",
    link: "https://www.goshawkfiji.com/",
    github: "https://github.com/rudrprasad05/goshawk",
    desc: "A fully functional ecommerce website made for an online company in Fiji. Integrated payment system, deliveries, user authentication, seller messaging and admin dashboard.",
    img: "https://mctechfiji.s3.us-east-1.amazonaws.com/devlog/devlog1.png",
    tech: [NextjsTech, NodejsTech, AWSTech],
  },
  {
    name: "Docker Demon",
    link: "https://github.com/rudrprasad05/docker-manager",
    github: "https://github.com/rudrprasad05/docker-manager",
    desc: "Interact with a GoLang backend to manage docker images and containers on your cloud computer. Made for those who hate the CLI",
    img: "https://mctechfiji.s3.us-east-1.amazonaws.com/devlog/devlog2.png",
    tech: [ReactTech, GoTech, DockerTech],
  },
  {
    name: "Image Convertor",
    link: "https://github.com/rudrprasad05/docker-manager",
    github: "https://github.com/rudrprasad05/docker-manager",
    desc: "A quick and efficient way to convert images. Uses Go for lightning fast server responses and NextJs for an interactive user experience",
    img: "https://mctechfiji.s3.us-east-1.amazonaws.com/devlog/devlog3.png",
    tech: [NextjsTech, GoTech, DockerTech, AWSTech],
  },
];
