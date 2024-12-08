"use client";

import React, { useEffect } from "react";

import FullWidthContainer from "../components/global/FullWidthContainer";
import PaddedContainer from "../components/global/PaddedContainer";
import { useSession } from "@/hooks/useSession";
import { useRouter } from "next/navigation";

const page = () => {
  return <div>Welcome to Admin!</div>;
  //   return (
  //     <PaddedContainer>
  //       <FullWidthContainer>
  //         <div className="flex flex-col gap-2">
  //           <h1 className="text-5xl">Admin</h1>
  //           <p className="text-lg text-muted-foreground/90">
  //             A detailed look into my employment history
  //           </p>
  //         </div>
  //       </FullWidthContainer>
  //     </PaddedContainer>
  //   );
};

export default page;
