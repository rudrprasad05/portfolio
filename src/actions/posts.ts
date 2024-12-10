import { API_URL } from "@/const";
import { Category, Post } from "@/types";

export const GetAllPosts = async () => {
  try {
    const res = await fetch(`${API_URL}/posts`); // Assuming the endpoint for posts is "/posts"

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

export const NewPost = async (name: string) => {
  try {
    const res = await fetch(`${API_URL}/category/new`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    });

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data: { message: string; category: Category[] } = await res.json();

    return data.category;
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
