const JobsSection = ({
  date,
  content,
}: {
  date: string;
  content: string;
  isLast: boolean;
}) => {
  return (
    <div className="grid place-content-start grid-cols-12 gap-4 items-center min-h-[200px]">
      <div className="text-muted-foreground/70 col-span-2 h-full">{date}</div>
      <div className="col-span-1 h-full flex flex-col items-center gap-2 py-1">
        <div
          content=""
          className="grow rounded-full w-4 h-4 border-solid border-2 border-muted-foreground/40"
        ></div>
        <div
          content=""
          className="rounded-full w-[2px] h-full bg-muted-foreground/40"
        ></div>
      </div>
      <div className="col-span-9 min-h-[200px]">{content}</div>
    </div>
  );
};

export default JobsSection;
