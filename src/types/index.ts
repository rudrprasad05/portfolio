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
  tech: TTeckStack[];
};
