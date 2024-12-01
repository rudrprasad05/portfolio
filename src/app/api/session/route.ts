import { NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<NextResponse> {
  const cookieStore = await cookies();

  const token = cookieStore.get("token");
  console.log(token);
  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const response = await fetch("http://localhost:8080/protected", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token.value}`,
      },
    });

    if (response.ok) {
      const data = await response.json();
      return NextResponse.json(data, { status: 200 });
    } else {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }
  } catch (error) {
    console.error("Error fetching protected resource:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}