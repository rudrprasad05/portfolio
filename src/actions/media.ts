import { SettingValues } from "@/app/components/admin/edit/Settings";
import { API_URL } from "@/const";
import { Category, FullPost, Media, Post } from "@/types";

export const GetAllMedia = async () => {
  try {
    const res = await fetch(`${API_URL}/media?_=${Date.now()}`); // Assuming the endpoint for posts is "/posts"

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    const data: { message: string; media: Media[] } = await res.json();
    return data.media;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};
