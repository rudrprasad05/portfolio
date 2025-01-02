import { TJobData } from "@/types";
import { format } from "date-fns";
import { Calendar, Clock } from "lucide-react";
import React from "react";

const JobCard = (props: TJobData) => {
  const { time, startDate, endDate, jobTitle, location, tech, describtion } =
    props;
  const formattedStartDate = format(startDate, "dd/MM/yyyy");
  const formattedEndDate = format(endDate, "dd/MM/yyyy");

  return (
    <div className="mb-8">
      <div className="text-secondary-foreground/80 text-sm flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <Calendar className="w-4 h-4" />
          <span>{formattedStartDate}</span>
          <span>-</span>
          <span>{formattedEndDate}</span>
        </div>
        <div className="flex gap-2 items-center">
          <Clock className="w-4 h-4" />
          <span>{time.duration}</span>
          <span className="lowercase">{time.type}</span>
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-2">
        <div className="text-2xl capitalize">{jobTitle}</div>
        <div className="">
          <h2 className="text-muted-foreground/70 text-xs">Description</h2>
          <p className="text-secondary-foreground/80 text-justify text-sm">
            {describtion}
          </p>
        </div>
        <div>
          <h2 className="text-muted-foreground/70 text-xs">Location</h2>
          <p className="text-secondary-foreground/80 text-justify text-sm">
            {location}
          </p>
        </div>
        <div className="">
          <h2 className="text-muted-foreground/70 text-xs">Tech Stack</h2>
          <div className="flex gap-4 mt-2">
            {tech.map((t, i) => (
              <div
                key={i}
                className="transition flex-col justify-center flex gap-2 items-center"
              >
                <div className="transition w-8 h-8">
                  {React.cloneElement(t.icon, {
                    className: "w-8 h-8",
                  })}
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  {t.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
