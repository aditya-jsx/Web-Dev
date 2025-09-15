import axios from "axios";

//! 1) this is how we extract the params from the route, and we have to give it a type, and we have ot tell it that it'll be a string
export default async function Todos({params}:{
    params: {
        todoId: string;
    }
}){
    //! 2) then we have to make a request to the api and have to pass the parameter so that the request goes for the corresponding id
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${params.todoId}`);


    return (
        <div className="">
            {response.data.title}
            {response.data.completed}
        </div>
    )
}


//! 3) if we dont give the type to the params then we can access it by 
//! const todoId = (await params).todoId;
//! and we have to await the params as well



//! 4) go back to the root page.tsx








//! 5) now if we talk about the catch-all method then the param that it would return will be an array
//! for checking this line of code written below make sure to convert the todoId folder into a catch-all Segment
// export default async function Todos({params}:any){

//     const postId = (await params).todoId;

//     return (
//         <div className="">
//             {JSON.stringify(postId)}
//         </div>
//     )
// }

//! 6) go back to the root page.tsx