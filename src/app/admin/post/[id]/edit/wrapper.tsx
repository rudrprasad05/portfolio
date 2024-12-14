"use client";

import Loading from "@/app/admin/loading";
import Title from "@/app/components/admin/edit/Title";
import PaddedContainer from "@/app/components/global/PaddedContainer";
import { usePost } from "@/hooks/usePostContext";
import React from "react";

export default function ClientWrapper() {
  const { state } = usePost();
  if (state == "LOADING") {
    return <Loading />;
  }
  return (
    <PaddedContainer>
      <Title />
    </PaddedContainer>
  );
}
