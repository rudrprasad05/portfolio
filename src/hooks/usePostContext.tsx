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
import {
  ChangePostTitle,
  GetOnePostWithAllRelatedTables,
} from "@/actions/posts";

type StateEnum = "LOADING" | "UPLOADING" | "ERROR" | "IDLE";

// Context type
interface PostContextType {
  post: FullPost | undefined;
  state: StateEnum;
  content: Partial<Content>[];
  setContent: (a: SetStateAction<Partial<Content>[]>) => void;
  UpdateContent: (a: Partial<Content>) => void;
  RemoveOneElement: (a: Partial<Content>) => void;
  ChangeTitle: (a: string) => Promise<void>;
}

// Create context
const PostContext = createContext<PostContextType | undefined>(undefined);

// Provider component
export const PostProvider = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const params = useParams();
  const [post, setPost] = useState<FullPost>();
  const [content, setContent] = useState<Partial<Content>[]>(
    post?.content || []
  );
  const [state, setState] = useState<StateEnum>("LOADING");

  useEffect(() => {
    const fetch = async () => {
      const res: FullPost | undefined = await GetOnePostWithAllRelatedTables(
        params?.id as string
      );
      setPost(res);
      if (res) setContent(res?.content);
      setState("IDLE");
    };
    fetch();
  }, [params]);

  const fetch = async () => {
    const res: FullPost | undefined = await GetOnePostWithAllRelatedTables(
      params?.id as string
    );
    setPost(res);
    if (res) setContent(res?.content);
    setState("IDLE");
  };

  useEffect(() => {
    console.log("post", post);
    console.log("postcontext", content);
  }, [content, post]);

  const ChangeTitle = async (title: string) => {
    const res = await ChangePostTitle(title);
    if (!res) {
      toast.error("Unable to update title");
      return;
    }
    setPost((prev) => {
      if (!prev) return;
      prev.title = res;
      return prev;
    });
  };

  const UpdateContent = (c: Partial<Content>) => {
    setContent((prev) => {
      if (!prev) return []; // Handle the case where prev is undefined or null.

      // Find the index of the content object to update
      const index = prev.findIndex((item) => item.id === c.id); // Assuming `id` is a unique key for each `Content`

      if (index === -1) {
        console.warn("Content to update not found");
        return prev; // Return the original array if the item is not found
      }

      // Create a new array with the updated content
      const newArr = [...prev];
      newArr[index] = { ...prev[index], ...c }; // Merge existing content with the updates
      return newArr;
    });
  };

  const RemoveOneElement = (c: Partial<Content>) => {
    console.log("first");
    setContent((prev) => {
      console.log(prev);
      if (!prev) return [];
      const newArr = prev.filter((item) => item !== c);
      return newArr;
    });
  };

  return (
    <PostContext.Provider
      value={{
        post,
        state,
        content,
        setContent,
        UpdateContent,
        RemoveOneElement,
        ChangeTitle,
      }}
    >
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
