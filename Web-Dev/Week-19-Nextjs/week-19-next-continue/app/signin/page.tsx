"use client"

export default function SignIn(){
    return(
        <div className="h-screen w-full flex items-center justify-center">
            <h1 className="text-6xl">
                SignIn page
            </h1>
        </div>
    )
}
//! this have to be a client component as this is a signin component and we have to add a submit button which will use an onClick handler, as when we click this button then we have to send a request to the backend about the sign in, so this has to be a client component