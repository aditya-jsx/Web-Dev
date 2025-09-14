"use client"

import axios from "axios";
import { useRef } from "react";

export default function SignUp(){

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    //! 2) this is how we send a request on a mext backend from a next frontend

    function sendPostRequest(){
        const userEmail = emailRef.current?.value;
        const userPassword = passwordRef.current?.value;

        axios.post("http://localhost:3000/api/v1/signup", {
            userEmail,
            userPassword
        })
    }

    return(
        <div className="h-screen w-full flex flex-col items-center justify-center gap-2">

            <input type="text" className="h-10 pl-2 w-60 border rounded-xl" placeholder="email" ref={emailRef} />
            <input type="text" className="h-10 pl-2 w-60 border rounded-xl" placeholder="password" ref={passwordRef} />

            <h1 className="text-3xl">
                <button className="p-2 border-2 rounded-xl transform duration-100 cursor-pointer" onClick={sendPostRequest}>
                    SignUp page
                </button>
            </h1>
        </div>
    )
}

//! 1) this have to be a client component as this is a signup component and we have to add a submit button which will use an onClick handler, as when we click this button then we have to send a request to the backend about the sign up, so this has to be a client component


//! 3) to understand the frontend of Signin, go to page.tsx of signin