import React from "react";

export default function H1({ val }: { val: string | undefined }) {
  if (!val) {
    return <div className="text-6xl">enter value</div>;
  }
  return <div className="text-6xl">{val}</div>;
}
