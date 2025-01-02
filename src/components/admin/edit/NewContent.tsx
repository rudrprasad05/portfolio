"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePost } from "@/hooks/usePostContext";
import { Content, ContentType } from "@/types";
import React, { useState } from "react";
import { toast } from "sonner";

const content = ["P", "H1", "H2", "H3", "LINK", "CODE", "IMAGE"];

export default function NewContent() {
  const { post, setContent } = usePost();
  const [contentType, setContentType] = useState<ContentType | undefined>(
    undefined
  );
  const handleClick = () => {
    if (!contentType) {
      toast.error("select a content type first");
      return;
    }
    const c: Partial<Content> = {
      createdAt: new Date(),
      data: "",
      type: contentType,
    };
    setContent((prev) => [...prev, c]);
  };
  return (
    <div className="flex gap-4 items-center w-full">
      <Select
        value={contentType}
        onValueChange={(e) => setContentType(e as ContentType)}
      >
        <SelectTrigger className="w-full grow">
          <SelectValue placeholder="Select a type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {content.map((c, index) => (
              <SelectItem key={index} className="lowercase" value={c}>
                {c}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <Button onClick={() => handleClick()}>Save</Button>
    </div>
  );
}
