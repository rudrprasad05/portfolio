"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  SetStateAction,
  Dispatch,
  useLayoutEffect,
} from "react";
import { useParams, useRouter } from "next/navigation";
import Cookies from "js-cookie";
import { toast } from "sonner";
import { API_URL } from "@/const";
import { Content, FullPost } from "@/types";
import { GetOnePostWithAllRelatedTables } from "@/actions/posts";

type StateEnum = "LOADING" | "UPLOADING" | "ERROR" | "IDLE";

// Context type
interface PostContextType {
  post: FullPost | undefined;
  state: StateEnum;
  content: Content[] | undefined;
  setContent: (a: SetStateAction<Content[] | undefined>) => void;
}

// Create context
const PostContext = createContext<PostContextType | undefined>(undefined);

// Provider component
export const PostProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const params = useParams();
  const [post, setPost] = useState<FullPost | undefined>(undefined);
  const [content, setContent] = useState<Content[] | undefined>(
    post?.content || undefined
  );
  const [state, setState] = useState<StateEnum>("LOADING");

  useLayoutEffect(() => {
    const fetch = async () => {
      const res: FullPost | undefined = await GetOnePostWithAllRelatedTables(
        params?.id as string
      );
      setPost(res);
      setState("IDLE");
    };
    fetch();
  }, []);

  useEffect(() => {
    console.log(content);
  }),
    [content];

  return (
    <PostContext.Provider value={{ post, state, content, setContent }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("PostContext must be used within a PostProvider");
  }
  return context;
};
