"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Post } from "@/types";
import { format } from "date-fns";
import { Calendar } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export default function PostCard({ post }: { post: Post }) {
  const [imageState, setImageState] = useState<"LOADING" | "ERROR" | "DONE">(
    "LOADING"
  );
  const imageSrc =
    post.featuredImage?.src ||
    `https://mctechfiji.s3.us-east-1.amazonaws.com/devlog/default.png?_=${Date.now()}`;
  return (
    <Card className="flex flex-row p-0">
      <div className="col-span-1 w-1/2">
        {imageState == "LOADING" && (
          <Skeleton className="w-full h-[100px] rounded" />
        )}
        {imageState == "ERROR" && (
          <div className="w-24 h-24" content="">
            ERROR
          </div>
        )}
        <img
          onLoad={() => setImageState("DONE")}
          onError={() => {
            setImageState("ERROR");
          }}
          className="rounded-s-lg w-full object-cover"
          src={imageSrc}
        />
      </div>
      <CardContent className="p-6 col-span-1 w-1/2">
        <div>
          <h1>{post.title}</h1>
          <Link href={"/admin/post/" + post.id + "/edit"}>
            <Badge>Edit</Badge>
          </Link>
        </div>
        <h4 className="flex gap-2 items-center text-muted-foreground/70 text-sm">
          <Calendar className="w-4 h-4" />
          {format(post.createdAt, "dd/MM/yy")}
        </h4>
        {post?.content?.length > 0 && (
          <p className="line-clamp-4">{post.content[0].data}</p>
        )}
        {!post.content && <p className="line-clamp-4">No content</p>}
      </CardContent>
    </Card>
  );
}
