import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";


//! 1) here we have to return the profile image of the user
export function GET(req: NextRequest){

    //! initially we should do that
    // const headers = req.headers;
    // const authorizationHeader = headers["authorization"];
    // const decoded = jwt.decode(authorizationHeader, "SECRET");
    // const userId = decoded.userId;

    //! and then check whether the user is present or not in the DB, then hit the DB to send the userProfile



    return NextResponse.json({
        avatarUrl: "https://images.google.com/cat.png"
    })
}

//! 2) go to 