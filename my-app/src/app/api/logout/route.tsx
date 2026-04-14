import { NextResponse } from "next/server";

export async function POST() {
  const res = NextResponse.json({
    message: "Logged out successfully",
  });

  // 🍪 DELETE COOKIE
  res.cookies.set("user_id", "", {
    httpOnly: true,
    path: "/",
    expires: new Date(0),
  });

  return res;
}