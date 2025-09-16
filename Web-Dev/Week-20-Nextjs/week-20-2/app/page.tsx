//! Next Auth

//! -> if we want to use server side rendering in Nextjs, we can't use the jwt approach in next js for authorization as we can't send jwt to the server from the localstorage in the first request
//! we can send the jwt in the second request(like this my jwt) to get the data in the json format from the server and render it on the client side

export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center">

    </div>
  );
}



//! 1) to understand this lets make a signin endpoint 
//! go to /api/signin/route.ts