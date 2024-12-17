"use client";

import { Loader2 } from "lucide-react";
import Cookies from "js-cookie";
import React from "react";

export default function page() {
  Cookies.remove("token");
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
