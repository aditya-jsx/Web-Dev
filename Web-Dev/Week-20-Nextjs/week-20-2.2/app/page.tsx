// export default function Home() {
//   return (
//     <div className="h-screen w-full flex items-center justify-center">
//       <h1 className="text-6xl">
//         Helloo!
//       </h1>
//     </div>
//   );
// }




//! Here we'll learn about Next Auth, how to do auth with email pass, google, facebook, github etc.

//! first we need to revise the catch all segment [...nextAuth]

//! go to /api/auth/[...nextAuth]/route.ts

















//! Next Auth (after /api/auth/[...nextauth]/route.ts)

//! Next provides us a hook which we can use to check whether the user is logged in or not and also a signin and a signout function
//! but one thing is that we ave to wrap the component in which we are using the useSession in a session provider to use these features
//! one thing we can do is that we can make a different component for that and then pass it into the main Home component inside the SessionProvider

// "use client"

// import { useSession, signIn, signOut, SessionProvider } from "next-auth/react";

// export default function Home() {

  
//   return (
//     <SessionProvider>
//       <Auth />
//     </SessionProvider>
//   );
// }

// function Auth(){

//   const session = useSession();

//   return (
//     <div className="h-screen w-full flex items-center justify-center">
//       {session.status === "authenticated" && <button onClick={()=>signOut()}>Log Out</button>}
//       {session.status === "unauthenticated" && <button onClick={()=>signIn()}>Sign In</button>}

//       {/* now lets see what that session hook returns us */}
//       {JSON.stringify(session)}
//       {/* it'll return the user details that we provided in the auth endpoint, it'll provide us name and ignore the other fields, but we can make it return those fiels as well  */}
//     </div>
//   )
// }

//! there is one more thing that whenever we change a file, or the page reloads, it automatically signs out, this is because we didn't provided it a next secret, it generates a random one whenever we reload














//! Now if we are using useSession hook then client side rendering is happening, to make this server side we can use getServerSession()


import { getServerSession } from "next-auth";

export default async function Home() {

  const session = await getServerSession();
  
  return (
    <div>
      {JSON.stringify(session)}
    </div>
  );
}

//! now we'll have to set the next secret and nextauth url using a .env
//! and now it'll work as a server side rendered component, as the intial html will return the details of the user.