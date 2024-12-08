import { GetAllPosts, PING } from "@/actions/posts";
import { JOBS_DATA } from "@/data";
import { cookies } from "next/headers";
import React from "react";

import FullWidthContainer from "../components/global/FullWidthContainer";
import PaddedContainer from "../components/global/PaddedContainer";
import UnderConstruction from "../components/global/UnderConstruction";

const page = async () => {
  const cookieStore = cookies();
  // const posts = await PING();
  // console.log(posts);
  console.log(cookieStore.get("token"));

  return (
    <>
      <UnderConstruction />
    </>
  );

  // return (
  //   <PaddedContainer>
  //     <FullWidthContainer>
  //       <div className="flex flex-col gap-2">
  //         <h1 className="text-5xl">Devlog</h1>
  //         <p className="text-lg text-muted-foreground/90">
  //           A detailed look into my employment history
  //         </p>
  //       </div>
  //       {posts?.map((p) => (
  //         <div key={p.id}>
  //           {p.title} {p.content}
  //         </div>
  //       ))}
  //     </FullWidthContainer>
  //   </PaddedContainer>
  // );
};

export default page;
