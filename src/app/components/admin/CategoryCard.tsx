import { Badge } from "@/components/ui/badge";
import { Category } from "@/types";
import React from "react";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <div>
      <Badge variant={"secondary"}>{category.name}</Badge>
    </div>
  );
}
