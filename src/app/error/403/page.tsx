"use client";

import { Loader2 } from "lucide-react";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();

  useEffect(() => {
    Cookies.remove("token");

    const timer = setTimeout(() => {
      router.push("/auth/login");
    }, 1000);

    return () => clearTimeout(timer);
  }, [router]);
  return (
    <div>
      <div>Error 403. Forbidden</div>
      <div>
        <Loader2 className="animate-spin" />
        Redirecting
      </div>
    </div>
  );
}
