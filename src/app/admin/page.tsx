import AdminPosts from "../components/admin/AdminPosts";
import AdminTags from "../components/admin/AdminTags";
import FullWidthContainer from "../components/global/FullWidthContainer";
import PaddedContainer from "../components/global/PaddedContainer";
import { GetAllCategory } from "@/actions/category";
import { GetAllPosts } from "@/actions/posts";
import React from "react";

const page = async () => {
  const res = await GetAllPosts();
  const cats = await GetAllCategory();
  console.log(cats);
  return (
    <PaddedContainer>
      <FullWidthContainer>
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl">Admin</h1>
        </div>
        <AdminPosts cats={cats} posts={res} />
        <AdminTags categorys={cats} />
      </FullWidthContainer>
    </PaddedContainer>
  );
};

export default page;
