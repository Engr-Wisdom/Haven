import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { pool } from "@/lib/db";

export async function GET() {
  const cookieStore = await cookies();
  const userId = cookieStore.get("user_id")?.value;

  if (!userId) {
    return NextResponse.json({ user: null }, { status: 401 });
  }

  const result = await pool.query(
    "SELECT id, email, role FROM users WHERE id = $1",
    [userId]
  );

  return NextResponse.json({
    user: result.rows[0],
  });
}