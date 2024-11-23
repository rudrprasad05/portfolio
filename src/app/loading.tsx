import { Loader2 } from "lucide-react";
import React from "react";
import LayoutContainer from "./components/LayoutContainer";

export default function loading() {
  return (
    <LayoutContainer>
      <Loader2 className="animate-spin w-16 h-16 stroke-1" />
    </LayoutContainer>
  );
}
