import { pool } from "@/lib/db"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const { firstName, lastName, email, role, password } = await req.json()
    
    const existing = await pool.query(
      `SELECT * FROM users WHERE email = $1`,
      [email]
    )

    if (existing.rows.length > 0) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    await pool.query(
      `INSERT INTO users (first_name, last_name, email, role, password) VALUES($1, $2, $3, $4, $5)`,
      [firstName, lastName, email, role, hashedPassword]
    )

    return NextResponse.json({ message: "Signup Successful" })

  } catch(error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 })
  }
}