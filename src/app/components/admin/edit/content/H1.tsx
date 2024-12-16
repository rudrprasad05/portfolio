"use client";

import { Input } from "@/components/ui/input";
import { usePost } from "@/hooks/usePostContext";
import { Content } from "@/types";
import React, { useState } from "react";

export default function H1({ val }: { val: Partial<Content> }) {
  const { UpdateContent } = usePost();
  const [data, setData] = useState(val.data || "");

  const handleChange = (e: string) => {
    setData(e);
    val.data = e;
    UpdateContent(val);
  };

  return (
    <Input
      placeholder="Enter content"
      value={data}
      onChange={(e) => handleChange(e.target.value)}
      className="text-6xl"
    />
  );
}
