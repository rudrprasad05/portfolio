import { JOBS_DATA } from "@/data";
import { TJobData } from "@/types";
import clsx from "clsx";
import { Clock, MapPin } from "lucide-react";

const JobsSection = (props: TJobData) => {
  const { startDate, describtion, jobTitle, location, endDate, time } = props;
  return (
    <>
      <div className="grid place-content-start grid-cols-12 gap-4 items-center min-h-[200px]">
        <div className="text-muted-foreground/70 col-span-2 h-full flex flex-col justify-between text-sm">
          <div>{startDate}</div>
          <div className="">{endDate}</div>
        </div>
        <div className="col-span-1 h-full flex flex-col items-center gap-2 py-1">
          <div
            content=""
            className="aspect-square rounded-full w-4 h-4 border-solid border-2 border-muted-foreground/40"
          ></div>
          <div
            content=""
            className="rounded-full h-full w-[2px] bg-muted-foreground/40"
          ></div>
          <div
            content=""
            className="aspect-square rounded-full w-4 h-4 border-solid border-2 border-muted-foreground/40"
          ></div>
        </div>

        <div className="col-span-9 min-h-[200px]">
          <div className="mb-3 flex flex-col gap-1">
            <div className="text-xl font-bold">{jobTitle}</div>
            <div className=" text-muted-foreground/70 text-sm flex items-center justify-between">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {location}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <div className="flex items-center gap-2">
                  <span>{time.duration}</span>
                  <span>{time.type.toLowerCase()}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-justify text-primary/90">{describtion}</div>
        </div>
      </div>
      <div
        className={clsx(
          "grid place-content-start grid-cols-12 gap-4 items-center ",
          JOBS_DATA[JOBS_DATA.length - 1]?.startDate == startDate
            ? "hidden"
            : "grid"
        )}
      >
        <div className="col-span-2"></div>
        <div className="col-span-1 h-full flex flex-col items-center gap-2 py-1">
          <div
            content=""
            className="rounded-full w-[2px] h-[50px] border border-muted-foreground/20 border-dashed"
          ></div>
        </div>
      </div>
    </>
  );
};

export default JobsSection;
