"use client";

import { usePost } from "@/hooks/usePostContext";
import { Content, ContentType } from "@/types";
import React, { useEffect, useState } from "react";
import H1 from "./H1";
import P from "./P";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { CreateManyContent } from "@/actions/content";

export default function ContentController() {
  const { content, RemoveOneElement, post } = usePost();

  const handleClick = async () => {
    const res = await CreateManyContent(content, post?.id || 1);
    console.log(res);
    console.log(content);
  };

  const switchType = (c: ContentType) => {
    switch (c) {
      case ContentType.P:
        return "Paragraph";
      case ContentType.H1:
        return "Title";
      default:
        return "Invalid";
    }
  };

  return (
    <>
      {content.map((c, index) => (
        <div key={index}>
          <div className="flex justify-between items-center">
            <div className="px-1 py-[1px] w-min h-full bg-secondary-foreground/40 text-secondary-foreground text-xs rounded-t">
              {switchType(c.type || ContentType.CODE)}
            </div>
            <div
              onClick={() => RemoveOneElement(c)}
              className=" h-full px-1 py-[1px] w-min bg-secondary-foreground/40 text-secondary-foreground  text-xs rounded-t"
            >
              <X className="w-3 h-3" />
            </div>
          </div>

          <div className="w-full  rounded-b relative border border-muted-foreground/40 px-3 py-2 mb-4">
            <HandleState c={c} />
          </div>
        </div>
      ))}
      <Button onClick={() => handleClick()}>Submit</Button>
    </>
  );
}

const HandleState = ({ c }: { c: Partial<Content> }) => {
  const { UpdateContent } = usePost();
  const [data, setData] = useState(c.data || "");

  const HandleChange = (e: string) => {
    c.data = e;
    UpdateContent(c);
  };

  switch (c.type) {
    case ContentType.H1:
      return <H1 handleChange={HandleChange} val={c} />;
    case ContentType.P:
      return <P handleChange={HandleChange} val={c} />;

    default:
      return <div>controller</div>;
  }
};
