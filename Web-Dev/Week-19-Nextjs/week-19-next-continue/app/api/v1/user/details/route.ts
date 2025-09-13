//! 1) format for writing be in this file 

import { NextResponse } from "next/server";


export function GET(){

    return NextResponse.json({
        username: "Aditya",
        email: "aditya@gmail.com"
    })

}
//! 2) this is how we write a get endpoint in nextjs
//! 3) we can add some more endpoints here like post put and other as well

export function PUT(){

    return NextResponse.json({
        username: "Aditya",
        email: "aditya@gmail.com"
    })

}

export function POST(){

    return NextResponse.json({
        username: "Aditya",
        email: "aditya@gmail.com"
    })

}

//! 4) now go back to the page.tsx of the user folder











//! NOTE:- 

//! one thing to know, there are two type of exports

//! 1) default export which we export like this 
// export default function NavBar;
//! and import like this
// import NavBar from "@components/NavBar";

//! 2) constant export which we export like this
// export function Navbar;
//! and import like this
// import { Navbar } from "@components/NavBar"