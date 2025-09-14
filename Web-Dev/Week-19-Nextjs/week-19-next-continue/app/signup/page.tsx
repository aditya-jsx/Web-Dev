"use client"

import axios from "axios";
import { useRef } from "react";

import { PrismaClient } from "@prisma/client";

// const client = new PrismaClient();

//! 10) importing prisma client from the external file
import client from "../lib/db";


//! 4) we can do the api calls from the frontend as well(this wont correctly now as this is a client component and to use we have to make this component a server component by making it async)
// async function getUserDetails(){
//     try{
//         const user = await client.user.findFirst({});
//         return {
//             email: user?.email,
//             password: user?.password
//         };
//     }catch(e){
//         console.log(e);
//     }
// }

export default async function SignUp(){

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    //! 2) this is how we send a request on a mext backend from a next frontend

    function sendPostRequest(){
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        axios.post("http://localhost:3000/api/v1/signup", {
            email,
            password
        })
    }

    //! 5) this is how we have to store it in a variable to access the code
    // const userInfo = getUserDetails();

    return(
        <div className="h-screen w-full flex flex-col items-center justify-center gap-2">

            <input type="text" className="h-10 pl-2 w-60 border rounded-xl" placeholder="email" ref={emailRef} />
            <input type="text" className="h-10 pl-2 w-60 border rounded-xl" placeholder="password" ref={passwordRef} />

            <h1 className="text-3xl">
                <button className="p-2 border-2 rounded-xl transform duration-100 cursor-pointer" onClick={sendPostRequest}>
                    SignUp
                </button>
            </h1>

            {/* //! 6) getting user details */}
            {/* {
                userInfo && (
                    <h1>
                        {userInfo?.email}
                        {userInfo?.password}
                    </h1>
                )
            } */}
        </div>
    )
}

//! 1) this have to be a client component as this is a signup component and we have to add a submit button which will use an onClick handler, as when we click this button then we have to send a request to the backend about the sign up, so this has to be a client component


//! 3) to understand the frontend of Signin, go to page.tsx of signin


//! 7) and doing this api call in the server will not allow the user to directly make calls to the db, because that ever logic written here stays on the server it never reaches the client, to the client only the final html comes.



//! 8) next thing we have to learn


//! 9) Singleton Prisma Client (this problem in dev mode only)

//! in dev mode whenever we write a new line of code, the whole app compiles again and again which'll run this line of code again and again 
//? const client = new PrismaClient();
//! this will make so many connections with our db and it'll exceed the limit of making connections to the DB.(if the db is in the cloud)
//! so what we want to do here is that across all build this line of code runs only once, fo doing this we can move this lien of code into a separate file(go to app/lib/db.ts)