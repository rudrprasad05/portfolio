import { Skeleton } from "@/components/ui/skeleton";
import React from "react";
import PaddedContainer from "@/components/global/PaddedContainer";

export default function Loading() {
  return (
    <PaddedContainer className="flex flex-col gap-6">
      <div className="flex flex-col space-y-3 w-full">
        <Skeleton className="h-[225px] w-full rounded-xl" />
        <div className="space-y-2 ">
          <Skeleton className="h-4 w-" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>

      <div className="flex flex-col space-y-3 w-full">
        <Skeleton className="h-[225px] w-full rounded-xl" />
        <div className="space-y-2 ">
          <Skeleton className="h-4 w-" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    </PaddedContainer>
  );
}
