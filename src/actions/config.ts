"use server";

import { cookies } from "next/headers";

export const CheckConnection = async () => {
  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  if (!token) return;
  const response = await fetch("http://localhost:8080/admin", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token.value}`,
    },
  });
  return response;
};
