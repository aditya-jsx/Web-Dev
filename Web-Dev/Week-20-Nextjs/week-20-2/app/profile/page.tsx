// "use client"

import axios from "axios"
import { useEffect, useState } from "react"

// export default function Profile(){

//     const [profilePicture, setProfilePicture] = useState("");

//     useEffect(()=>{
//         const reponse = axios.get("http://localhost:3000/api/profile", {
//             headers: {
//                 Authorization: localStorage.getItem("token")
//             }
//         }).then(res => {
//             setProfilePicture(res.data.avatarUrl)
//         })
//     }, [])


//     return(
//         <div className="">
//             {profilePicture}
//         </div>
//     )
// }

//! 1) first we'll see an empty page then the js bundle will hydrate the html with the interaction after a few seconds, then only we'll be able to see the response

//! 2) now we'll think that this is how we can do auth in nextjs, but here the problem is that we are not using the benefits of server side rendering

//! 3) we have to make sure to get the users details in the initial request.


//! 4) lets see how we can do that using ssr


//! this is how we should do fetch calls to use the benefit of ssr
// export default async function Profile(){

//     // const response = await axios.get("http://localhost:3000/api/profile", {
//     //         headers: {
//     //             Authorization: localStorage.getItem("token")
//     //         }
//     // });

//     //! for now let's ignore the above code for sometime, and return this instead

//     const profilePicture = "http://cat.png";

//     return(
//         <div className="">
//             {profilePicture}
//         </div>
//     )
// }
//! we can see that now the initial html that next returns will contain this info as this info is server side rendered















//! 5) but if we use this original code then it'll throw an error that localStorage is not defined
//! make sure to remove the "use client" before running the below code, otherwise, there will be infinite requests going from the client

export default async function Profile(){

    const response = await axios.get("http://localhost:3000/api/profile", {
            headers: {
                authorization: localStorage.getItem("token")
            }
    });

    const profilePicture = response.data.avatarUrl;

    return(
        <div className="">
            {profilePicture}
        </div>
    )
}

//! it'll give an error that the localStorage is not defined as there is no such thing as localStorage on the server.
//! we can never send the token in the first request, so the request to fetch the users info will never work.