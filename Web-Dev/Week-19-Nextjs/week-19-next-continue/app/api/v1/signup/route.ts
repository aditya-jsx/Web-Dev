// "use server"
// import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();


//! 1) to accept the body here, we use this req object which is of type NextRequest
export async function POST(req: NextRequest){

    //! 2) we are sending a json data from the frontend, so this is how we'll extract it
    const data = await req.json();
    console.log(data);

    //! 3) storing this user info into a db using prisma (go to prisma/schema.prisma)
    await client.user.create({
        data: {
            email: data.email,
            password: data.password
        }
    })
    

    return NextResponse.json({
        message: "You have been signed up"
    }
)}

//! 4) Now form here we'll have to redirect a user straight to the signin page and then they can signin using the email and password they created

//! 5) Now instead of making a db call in an endpoint here we can do this in the frontend as well(go to signup page.tsx in signup)