"use client";

import { Input } from "@/components/ui/input";
import { Content } from "@/types";
import React, { useState } from "react";

export default function P({
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
      className="text-6xl"
    />
  );
}
