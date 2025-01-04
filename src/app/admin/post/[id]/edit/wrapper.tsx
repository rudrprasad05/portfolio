"use client";

import ContentController from "@/components/admin/edit/content/controller";
import NewContent from "@/components/admin/edit/NewContent";
import Title from "@/components/admin/edit/Title";
import PaddedContainer from "@/components/global/PaddedContainer";

import { usePost } from "@/hooks/usePostContext";
import React from "react";

export default function ClientWrapper() {
  const { state } = usePost();

  return (
    <PaddedContainer>
      <Title />
      <NewContent />
      <ContentController />
    </PaddedContainer>
  );
}
