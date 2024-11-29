import { IProjectData } from "@/types";
import { Link as LinkIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";

const ProjectCard = (props: IProjectData) => {
  return (
    <div className="flex items-start gap-6 mb-12">
      <div className="w-2/4 h-48">
        <img
          src={props.img}
          className="w-full h-full object-cover rounded-lg border border-muted-foreground/30"
        />
      </div>
      <div>
        <div className="text-xl ">{props.name}</div>
        <div className="mt-2 flex items-center gap-2 text-muted-foreground/70">
          <Link target="_blank" href={props.github}>
            <FaGithub className="w-5 h-5" />
          </Link>
          <Link target="_blank" href={props.link}>
            <LinkIcon className="w-5 h-5" />
          </Link>
        </div>
        <div className="mt-6 text-muted-foreground/70">{props.desc}</div>
      </div>
    </div>
  );
};

export default ProjectCard;
