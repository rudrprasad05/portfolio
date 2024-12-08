import { Post } from "@/types";

const API = process.env.NEXT_PUBLIC_API_URL; // Access the API URL from environment variables

export const GetAllPosts = async () => {
  try {
    const res = await fetch(`${API}/posts`); // Assuming the endpoint for posts is "/posts"

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

export const PING = async () => {
  try {
    const res = await fetch(`${API}/ping`); // Assuming the endpoint for posts is "/posts"

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
