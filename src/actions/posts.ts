import { SettingValues } from "@/app/components/admin/edit/Settings";
import { API_URL } from "@/const";
import { Category, FullPost, Post } from "@/types";

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

export const GetOnePostWithAllRelatedTables = async (id: string) => {
  try {
    const res = await fetch(`${API_URL}/posts?id=${id}`); // Assuming the endpoint for posts is "/posts"

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data: { message: string; post: FullPost } = await res.json();
    return data.post;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return undefined;
  }
};

export const UpdatePost = async (id: number, postdata: SettingValues) => {
  try {
    const res = await fetch(`${API_URL}/post/update`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, data: postdata }),
    });

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data: { title: string } = await res.json();

    return data.title;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return "undefined";
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
