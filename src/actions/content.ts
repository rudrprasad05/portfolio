import { API_URL } from "@/const";
import { Content, Post } from "@/types";

export const CreateManyContent = async (
  contents: Partial<Content>[],
  id: number
) => {
  try {
    const res = await fetch(`${API_URL}/content/create`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ contents: contents, id: id }),
    });

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data: { message: string; posts: Post[] } = await res.json();
    return data.posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};
