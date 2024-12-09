import React from "react";

import FullWidthContainer from "../components/global/FullWidthContainer";
import PaddedContainer from "../components/global/PaddedContainer";
import AdminPosts from "../components/admin/AdminPosts";
import { GetAllPosts } from "@/actions/posts";
import AdminTags from "../components/admin/AdminTags";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const page = async () => {
  const res = await GetAllPosts();
  console.log(res);
  return (
    <PaddedContainer>
      <FullWidthContainer>
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl">Admin</h1>
        </div>
        <AdminPosts posts={res} />
        <AdminTags />
      </FullWidthContainer>
    </PaddedContainer>
  );
};

export default page;
