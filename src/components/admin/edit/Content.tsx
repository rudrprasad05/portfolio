"use client";

import { usePost } from "@/hooks/usePostContext";
import React from "react";

export default function Content() {
  const { content } = usePost();
  return <div>{content.length > 0 && content.map((c) => <>{c.type}</>)}</div>;
}
