// middleware.ts
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { API_URL } from "./const";
import { toast } from "sonner";

export async function middleware(req: NextRequest) {
  const cookieStore = cookies();
  const url = req.nextUrl.clone();

  url.pathname = "/auth/login";

  const token = cookieStore.get("token")?.value;
  if (!token) {
    return NextResponse.redirect(url);
  }

  // Validate token via backend
  const isValid = await fetch(API_URL + "/token", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (isValid.status == 403) {
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
