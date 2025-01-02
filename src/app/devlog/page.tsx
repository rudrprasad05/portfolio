"use client";

import { GetAllPosts } from "@/actions/posts";
import FullWidthContainer from "@/components/global/FullWidthContainer";
import PaddedContainer from "@/components/global/PaddedContainer";
import { Skeleton } from "@/components/ui/skeleton";
import { Post, PostCategory } from "@/types";
import React, { useEffect, useState } from "react";

const Page = () => {
  const [posts, setPosts] = useState<Post[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const postsData = await GetAllPosts();
      setPosts(postsData);
      setLoading(false);
    };

    fetchPosts();
  }, []);

  return (
    <PaddedContainer>
      <FullWidthContainer>
        <div className="flex flex-col gap-2">
          <h1 className="text-5xl">Devlog</h1>
          <p className="text-lg text-muted-foreground/90">
            A detailed look into my employment history
          </p>
        </div>
        <div className="mt-6">
          {loading ? (
            <Skeleton className="w-full h-48" />
          ) : (
            posts?.map((p) => (
              <div key={p.id} className="py-2">
                {p.title}
              </div>
            ))
          )}
        </div>
      </FullWidthContainer>
    </PaddedContainer>
  );
};

export default Page;
