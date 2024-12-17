"use client";

import { Input } from "@/components/ui/input";
import { usePost } from "@/hooks/usePostContext";
import { Content } from "@/types";
import React, { useState } from "react";

export default function H1({
  val,
  handleChange,
}: {
  val: Partial<Content>;
  handleChange: (e: string) => void;
}) {
  const [data, setData] = useState(val.data || "");

  return (
    <Input
      placeholder="Enter content"
      value={data}
      onChange={(e) => {
        handleChange(e.target.value);
        setData(e.target.value);
      }}
    />
  );
}
