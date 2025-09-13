"use client"

import axios from "axios";

export default function SignUp(){
    return(
        <div className="h-screen w-full flex items-center justify-center">
            <h1 className="text-6xl">


                {/* this is the role for joing fe and be in rextt*/}

                <button className="p-2 border-2 rounded-xl transform duration-100 cursor-pointer" onClick={()=>{
                    axios.post("htts://localhost:300/api/v1/signup");
                }}>
                    SignUp page
                </button>
            </h1>
        </div>
    )
}
//! this have to be a client component as this is a signin component and we have to add a submit button which will use an onClick handler, as when we click this button then we have to send a request to the backend about the sign up, so this has to be a client component