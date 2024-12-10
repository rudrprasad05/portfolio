import { API_URL } from "@/const";
import { Category, Post } from "@/types";

export const GetAllPosts = async () => {
  try {
    const res = await fetch(`${API_URL}/posts?_=${Date.now()}`); // Assuming the endpoint for posts is "/posts"

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

export const NewPost = async (
  title: string,
  categoryId: number,
  userId: number
) => {
  try {
    const res = await fetch(`${API_URL}/posts/new`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, categoryId, userId }),
    });

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data: { message: string; post: Category[] } = await res.json();

    return data.post;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export const PING = async () => {
  try {
    const res = await fetch(`${API_URL}/ping`); // Assuming the endpoint for posts is "/posts"

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data: Post[] = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};
