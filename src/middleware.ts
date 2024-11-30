// middleware.ts
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function middleware(req: any) {
  const cookieStore = cookies();
  const url = req.nextUrl.clone();
  url.pathname = "/auth/login";

  const token = cookieStore.get("token")?.value;
  if (!token) {
    return NextResponse.redirect(url);
  }

  // Validate token via backend
  const isValid = fetch("http://localhost:8080/protected", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!isValid) {
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
