import { Post } from "@/types";

export const GetAllPosts = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL; // Access the API URL from environment variables

  try {
    const res = await fetch(`${apiUrl}/posts`); // Assuming the endpoint for posts is "/posts"

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
