import { IProjectData } from "@/types";
import { Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = (props: IProjectData) => {
  return (
    <div className="flex items-start gap-6 mb-8 pb-8 border-b border-muted-foreground/20">
      <div className="w-2/4 h-64">
        <img
          src={props.img}
          className="w-full h-full object-cover rounded-lg "
        />
      </div>
      <div className="w-full">
        <div className="w-full flex items-start justify-between">
          <div className="text-xl ">{props.name}</div>
          <div className="flex items-center gap-2 text-muted-foreground/70">
            <Link target="_blank" href={props.github}>
              <FaGithub className="w-5 h-5" />
            </Link>
            <Link target="_blank" href={props.link}>
              <LinkIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="mt-6 text-muted-foreground/70">{props.desc}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
