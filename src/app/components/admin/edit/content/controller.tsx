"use client";

import { usePost } from "@/hooks/usePostContext";
import { Content, ContentType } from "@/types";
import React from "react";
import H1 from "./H1";
import P from "./P";

export default function ContentController() {
  const { content } = usePost();

  return (
    <>
      {content.map((c) => (
        <HandleState c={c} />
      ))}
    </>
  );
}

const HandleState = ({ c }: { c: Partial<Content> }) => {
  switch (c.type) {
    case ContentType.H1:
      return <H1 val={c.data} />;
    case ContentType.P:
      return <P val={c.data} />;

    default:
      return <div>controller</div>;
  }
};
