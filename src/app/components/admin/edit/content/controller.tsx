"use client";

import { usePost } from "@/hooks/usePostContext";
import { Content, ContentType } from "@/types";
import React from "react";
import H1 from "./H1";
import P from "./P";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function ContentController() {
  const { content } = usePost();

  const handleClick = () => {
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
      {content.map((c) => (
        <div>
          <div className="flex justify-between items-center">
            <div className="px-1 py-[1px] w-min h-full bg-secondary-foreground/40 text-secondary-foreground text-xs rounded-t">
              {switchType(c.type || ContentType.CODE)}
            </div>
            <div className=" h-full px-1 py-[1px] w-min bg-secondary-foreground/40 text-secondary-foreground  text-xs rounded-t">
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
  switch (c.type) {
    case ContentType.H1:
      return <H1 val={c} />;
    case ContentType.P:
      return <P val={c.data} />;

    default:
      return <div>controller</div>;
  }
};
