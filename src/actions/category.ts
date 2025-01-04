import { API_URL } from "@/const";
import { Category } from "@/types";

export const GetAllCategory = async () => {
  try {
    const res = await fetch(`${API_URL}/category?_=${Date.now()}`, {
      method: "GET",
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

export const NewCategory = async (name: string) => {
  // title, categoryId, userId
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
