import { Loader2 } from "lucide-react";
import React from "react";
import LayoutContainer from "./components/LayoutContainer";

export default function loading() {
  return (
    <LayoutContainer>
      <div className="flex flex-col gap-2 grow my-auto justify-center items-center">
        <Loader2 className=" animate-spin w-16 h-16 stroke-1" />
        <h1>Loading</h1>
      </div>
    </LayoutContainer>
  );
}