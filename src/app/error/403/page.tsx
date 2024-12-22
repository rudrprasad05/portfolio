"use client";

import { Loader2 } from "lucide-react";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Error403() {
  const router = useRouter();

  useEffect(() => {
    Cookies.remove("token");

    const timer = setTimeout(() => {
      router.push("/auth/login");
    }, 1000);

    return () => clearTimeout(timer);
  }, [router]);
  return (
    <div className="w-full h-full grid place-items-center">
      <div className="flex flex-col gap-4 items-center text-center">
        <div className="text-3xl">Error 403. Forbidden</div>
        <div className="text-sm flex gap-2 items-center">
          Redirecting
          <Loader2 className="animate-spin" />
        </div>
      </div>
    </div>
  );
}
