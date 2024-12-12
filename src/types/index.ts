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
export enum ContentType {
  P = "P",
  H1 = "H1",
  H2 = "H2",
  H3 = "H3",
  LINK = "LINK",
  CODE = "CODE",
  IMAGE = "IMAGE",
}

export enum UserType {
  ADMIN = "ADMIN",
  USER = "USER",
}

export type User = {
  id: number;
  email: string;
  name: string;
  hashedPassword: string;
  createdAt: Date;
  type: UserType;
  posts: Post[];
  comments: Comment[];
  media: Media[];
};

export type Post = {
  id: number;
  title: string;
  content: Content[];
  featuredImageId: number | null;
  featuredImage?: Media | null;
  publishedAt: Date;
  authorId: number;
  author: User;
  postCategories: PostCategory[];
  comments: Comment[];
  createdAt: Date;
};

export type Media = {
  id: number;
  size: string;
  src: string;
  createdAt: Date;
  post: Post[];
  userId?: number | null;
  user?: User | null;
};

export type Content = {
  id: number;
  createdAt: Date;
  data: string;
  type: ContentType;
  postId: number;
  post: Post;
};

export type PostCategory = {
  id: number;
  createdAt: Date;
  postId: number;
  post: Post;
  categoryId: number;
  category: Category;
};

export type Category = {
  id: number;
  name: string;
  postCategories: PostCategory[];
};

export type Comment = {
  id: number;
  content: string;
  createdAt: Date;
  postId: number;
  post: Post;
  userId: number;
  user: User;
};
