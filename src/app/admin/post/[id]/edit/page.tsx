import { GetOnePostWithAllRelatedTables } from "@/actions/posts";
import Title from "@/app/components/admin/edit/Title";
import PaddedContainer from "@/app/components/global/PaddedContainer";
import { PostProvider } from "@/hooks/usePostContext";
import { FullPost } from "@/types";
import React from "react";
import ClientWrapper from "./wrapper";

export default async function page({ params }: { params: { id: string } }) {
  return (
    <PostProvider>
      <ClientWrapper />
    </PostProvider>
  );
}
