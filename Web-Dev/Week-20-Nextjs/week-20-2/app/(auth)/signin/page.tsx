"use client"

import axios from "axios"
import { useRef } from "react";


//! 1) this is how signin supposed to look based on what we've learnt until now
export default function Signin(){

    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    async function sendPostRequest(){
        const email = emailRef.current?.value;
        const password = passwordRef.current?.value;

        const response = await axios.post("http://localhost:3000/api/signin", {
            email,
            password
        })

        localStorage.setItem("token", response.data.token);
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

//! 2) In this code, we've made the user signin by sending the email and password provided by the user to the backend and returning a token from the backend and storing it on the localStorage.

//! 3) now lets make a profile page and also an endpoint for the profile page.
//! go to /api/profile/route.ts