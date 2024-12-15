import React from "react";

export default function P({ val }: { val: string | undefined }) {
  if (!val) {
    return (
      <div contentEditable className="text-sm">
        enter value
      </div>
    );
  }
  return <div className="text-sm">{val}</div>;
}
