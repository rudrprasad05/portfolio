import React from "react";
import { props } from "./Projects";
import { Card, CardContent } from "@/components/ui/card";
import { FaGithub } from "react-icons/fa";
import { SquareArrowOutUpRightIcon } from "lucide-react";

const ProjectCard: React.FC<props> = (data) => {
  return (
    <Card>
      <div className="w-full h-52">
        <img
          className="object-cover w-full h-full rounded-t-xl"
          src={data.img}
        />
      </div>
      <CardContent>
        <div className="mt-2">
          <div className="flex items-center justify-between">
            <h3>{data.name}</h3>
            <div className="flex gap-2 text-muted-foreground/70">
              <FaGithub className="w-4 h-4" />
              <SquareArrowOutUpRightIcon className="w-4 h-4" />
            </div>
          </div>
          <p className="text-muted-foreground/70">{data.desc}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
