"use client";

import { usePost } from "@/hooks/usePostContext";
import { Cog } from "lucide-react";
import React from "react";
import Settings from "./Settings";

export default function Title() {
  const { post } = usePost();
  return (
    <div className="flex justify-between items-center">
      <div className="text-xl capitalize">{post?.title}</div>
      <Settings />
    </div>
  );
}
