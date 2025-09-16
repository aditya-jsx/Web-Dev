import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    // ideally we have to check whetherthe user detail is present in the db or not, 
    // then only we should proceed nut here let's consider user is present andis giving the correct details

    const body = await req.json();

    const username = body.username;
    const password = body.password;

    // check in the db

    const userId = 1;
    const token = jwt.sign({userId}, "SECRET");

    return NextResponse.json({
        token
    });
}


//! 1) the backend code for signin in next looks like this
//! now lets create a page for signin (go to /signin/page.tsx)