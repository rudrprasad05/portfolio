"use client";

import Loading from "@/app/admin/loading";
import Content from "@/app/components/admin/edit/Content";
import ContentController from "@/app/components/admin/edit/content/controller";
import NewContent from "@/app/components/admin/edit/NewContent";
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
      <NewContent />
      <ContentController />
    </PaddedContainer>
  );
}
