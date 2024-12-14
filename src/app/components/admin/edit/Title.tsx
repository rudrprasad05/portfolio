"use client";

import { usePost } from "@/hooks/usePostContext";
import React from "react";

export default function Title() {
  const { post } = usePost();
  return <div>{post?.title}</div>;
}
