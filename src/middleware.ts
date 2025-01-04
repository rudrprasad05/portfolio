import { API_URL } from "./const";
// middleware.ts
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { toast } from "sonner";

export async function middleware(req: NextRequest) {
  const cookieStore = cookies();
  const token = cookieStore.get("token")?.value;
  if (!token) {
    return NextResponse.redirect(
      new URL(`/auth/login?redirect=${req.url}`, req.url)
    );
  }

  // Validate token via backend
  try {
    const isValid = await fetch(API_URL + "/token", {
      method: "POST",
      headers: {
        Authorization: `${token}`,
      },
    });
    if (isValid.status == 403) {
      return NextResponse.redirect(req.nextUrl.origin + "/error/403");
    }
  } catch (error) {
    return NextResponse.redirect(req.nextUrl.origin + "/error/500");
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
