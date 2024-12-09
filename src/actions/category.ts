import { API_URL } from "@/const";
import { Post } from "@/types";

export const GetAllCategory = async () => {
  try {
    const res = await fetch(`${API_URL}/category`); // Assuming the endpoint for posts is "/posts"

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
