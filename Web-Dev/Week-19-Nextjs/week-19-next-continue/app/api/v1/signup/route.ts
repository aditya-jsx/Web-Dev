import { NextRequest, NextResponse } from "next/server";


//! 1) to accept the body here, we use this req object which is of type NextRequest
export async function POST(req: NextRequest){

    //! 2) we are sending a json data from the frontend, so this is how we'll extract it
    const data = await req.json();
    console.log(data);

    return NextResponse.json({
        message: "You have been signed up"
    }
)}

//! 3) for understanding the backend of the signin, go to api/v1/signin/route.ts