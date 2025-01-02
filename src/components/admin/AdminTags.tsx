import { Category } from "@/types";
import React from "react";

import NewTagModal from "./NewTagModal";
import CategoryCard from "./CategoryCard";

export default function AdminTags({ categorys }: { categorys: Category[] }) {
  return (
    <div className="w-full my-6 flex flex-col gap-6">
      <div className="w-full flex justify-between">
        <div className="text-xl">Categories</div>
        <NewTagModal />
      </div>
      {categorys.length == 0 && (
        <div className="w-full h-[120px] border border-dashed rounded-lg flex items-center justify-center">
          <div className="text-center text-muted">No Categories</div>
        </div>
      )}
      <div className="grid grid-cols-6 gap-4 w-full">
        {categorys.length > 0 &&
          categorys.map((c) => <CategoryCard key={c.id} category={c} />)}
      </div>
    </div>
  );
}
