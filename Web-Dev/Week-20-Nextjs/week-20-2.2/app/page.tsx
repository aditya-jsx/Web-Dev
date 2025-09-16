export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <h1 className="text-6xl">
        Helloo!
      </h1>
    </div>
  );
}


//! Here we'll learn about Next Auth, how to do auth with email pass, google, facebook, github etc.

//! first we need to revise the catch all segment [...nextAuth]

//! go to /api/auth/[...nextAuth]/route.ts