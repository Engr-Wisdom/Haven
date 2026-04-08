import { pool } from "@/lib/db";
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json()
        const result = await pool.query(
            `SELECT * FROM users WHERE email = $1`,
            [email]
        )

        if (result.rows.length === 0) {
            return NextResponse.json({ error: "User not found" },  { status: 400 })
        }

        const user = result.rows[0]

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 400 })
        }

        return NextResponse.json({
            message: "Login Successful", 
            user: {
                id: user.id,
                email: user.email,
                role: user.role
            }
        })
    } catch(error) {
        return NextResponse.json({ error: "Server error" }, { status: 500 })
    }
}