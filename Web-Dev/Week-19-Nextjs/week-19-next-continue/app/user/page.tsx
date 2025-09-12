// "use client"
// comment out to see step 2

import axios from "axios";
import { useEffect, useState } from "react";

//! 1) to fetch data from the server like we did in react we can do here, but that'll show error if we don't mark this file as a client side component ("use client"),
// export default function Home() {

//   const [loading, setLoading] = useState(true);
//   const [data, setData] = useState();


//   useEffect(()=>{
//     const response = axios.get("https://dummyjson.com/todos")
//         .then(answer => {
//           setData(answer.data);
//           setLoading(false);
//         })
//   }, [])

//   if(loading){
//     return <div>
//       loading....
//     </div>
//   }

//   return (
//     <div className="h-screen w-full text-6xl flex items-center justify-center">
//       {data.todos[0].todo}
//     </div>
//   );
// }

//! 2) but this is not the right way to do data fetching in nextjs as it doesn't get rid of the problems in react, because in the above the code the request will run in the useEffect which means that it'll run on the client
//! whenever we use useEffect or useState then we have to make that component a client component
//! here the request is going from the client not the nextjs server









//! 3) to make this request through the nextjs server

//! 3.1) first thing we have to do is to make this component async, this does not mean that the component is an async component, this means that whatever logic is written here, will run on the server
export default async function Home() {

  const response = await axios.get("https://dummyjson.com/todos");

  await new Promise(r => setTimeout(r, 5000));

  const data = response.data;

  return (
    <div className="h-screen w-full text-6xl text-center flex items-center justify-center">
      {data?.todos[0].todo}
    </div>
  );
}
//! 3.2) now if we go to localhost and check for the requests going from here, then the initial request will contain the data, as the request is going from the nextjs server to the backend, it gets rendered in the nextjs server first then it is shown on  the frontend

//! this means that this logic code runs on the server, then server created the html, then server rendered the html and then it sent it back.
//! in nextjs, we can talk to database as well like we did here with server, here we can do ( prisma.user.findAll() ) as well or ( mongoose.UserModel.findOne() )


















//! now if the request takes some time to complete then we want to show a loader, but the google crawler will see that the page contains a loader, and it'll not be able to see the contents of the webpage,
//! to use a loader, we make a file called loading.tsx, which is rendered when the page.tsx file is taking time to execute the asyc code, until then next renders whatever is present inside the loading.tsx file, the name of the file should be only this(loading.tsx), now the html that is returned will first show the loading content then it'll show the contents of the page.tsx