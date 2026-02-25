import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";


export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, name, password, role } = body;
        console.log("Received registration data: ", { email, name, role });
        if (!email || !name || !password ) {
            return NextResponse.json({ message:"Missing fields"}, { status: 400 });
        }

        // Validate input
        if (!password || password.length < 2) {
            return NextResponse.json(
                { error: "Password must be at least 8 characters" },
                { status: 400 }
            );
        }

        // Check if user already exists
        const existingUser = await db.user.findUnique({
            where: {
                    email,
            }
        });

        if (existingUser && existingUser.email === email) {
                return NextResponse.json(
                    { error: "Email already registered" },
                    { status: 400 }
                );
        }

        const passwordHash = await bcrypt.hash(password, 12);
        
        const user = await db.user.create({
            data: {
                email,
                name,
                passwordHash,
                password,
                role: role !== "" ? role : "BUYER",
            },
        });
        console.log("User created: ", user);
        // Send verification
        

        return NextResponse.json({
            success: true,
            message: "User registered successfully. Please verify your email.",
            user
        });
    } catch (error) {
        console.error("Registration error: ", error);
        return new NextResponse("Internal Server Error", { status: 500 });
    }
}