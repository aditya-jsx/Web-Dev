"use client"

import axios from "axios";
import { useRef } from "react";

export default function SignUp(){

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    function sendPostRequest(){
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        axios.post("http://localhost:3000/api/v1/signup", {
            email,
            password
        })
    }


    return(
        <div className="h-screen w-full flex flex-col items-center justify-center gap-2">

            <input type="text" className="h-10 pl-2 w-60 border rounded-xl" placeholder="email" ref={emailRef} />
            <input type="text" className="h-10 pl-2 w-60 border rounded-xl" placeholder="password" ref={passwordRef} />

            <h1 className="text-3xl">
                <button className="p-2 border-2 rounded-xl transform duration-100 cursor-pointer" onClick={sendPostRequest}>
                    SignIn page
                </button>
            </h1>
        </div>
    )
}

//! 1) this has to be a client component as this is a signin component and we have to add a submit button which will use an onClick handler, as when we click this button then we have to send a request to the backend about the sign up, so this has to be a client component

//! 2) to understand the backend of signup, go to api/v1/signup/route.ts