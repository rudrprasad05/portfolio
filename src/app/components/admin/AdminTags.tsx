import React from "react";
import NewTagModal from "./NewTagModal";

export default function AdminTags() {
  return (
    <div className="w-full my-6 flex flex-col gap-6">
      <div className="w-full flex justify-between">
        <div className="text-xl">Posts</div>
        <NewTagModal />
      </div>
      {/* {posts.length == 0 && (
        <div className="w-full h-[120px] border border-dashed rounded-lg flex items-center justify-center">
          <div className="text-center">No Posts</div>
        </div>
      )} */}
    </div>
  );
}
