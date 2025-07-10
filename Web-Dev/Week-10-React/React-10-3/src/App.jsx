//! Custom hooks - these are hooks which are made by us.
//! 1) it is a function with a name starting with use.
//! 2) it should use a hook inside it.
//! 3) this can be used when we want to use the same logic in two different components then instead of writing that logic in both the components, we'll encapsulate that logic in one place and call it a custom hook.
// for example - we want two counter but want them at different locations and want them to work differently, then instead of writing the logic of two counters in two different components, we'll simply encapsulate that logic in a useCounter custok hook,  and import the variable and function into the component where we want to use it.

// import { useEffect } from "react";
// import { useDebounce } from "./useDebounce";



// syntax

// function useCounter(){
//   const [counter, setCounter] = useState(0);
  
//   return counter;
// }






// import { useState } from "react";
// import "./index.css"



// //! 1) defining a context api
// //! 2) we'll define the state variables that we want into the new Context that we made

// function useCount(){
//   const [count, setCount] = useState(0);

//   function increaseCount(){
//     setCount(c => c + 1);
//   }

//   //! 3) we have to return the things we want to use in other components here. 
//   return {
//     count: count,
//     increaseCount: increaseCount,
//   };
// }


// function App(){



//   //! 4) we have to import the vairables and function stored in useContext api, and we have to store it as an object
//   const {count, increaseCount} = useCount();



//   return(
//     <>
//       <button onClick={increaseCount}>Increase {count}</button>
//     </>
//   )
// }

// export default App;


























//~ Some custom hooks



//! useFetch
//! we'll write this hook in a different file.


// import { useState } from "react";
// import "./index.css"
// import { useFetch } from "./useFetch.jsx"


// using usePostTitle
// function App(){

//   const postTitle = usePostTitle();

//   return(
//     <>
//       {postTitle}
//     </>
//   )
// }

// export default App;










//! using actual useFetch hook
// function App(){


//   // using state variable to store the current page number
//   const [currentPage, setCurrentPage] = useState(1);


//   // we'll destructure the object.
//   const { finalData, loading } = useFetch("https://jsonplaceholder.typicode.com/todos/" + currentPage);
//   // ! end thing - we want another variable from the useFetch hook and that is loading

//   if(loading){
//     return <>
//       "loading....";
//     </>
//   }

//   return(
//     <>

//       {/* changing the page numbers on clicking the buttons */}
//       <button onClick={()=>{setCurrentPage(1)}} style={{margin: "10px", cursor: "pointer"}}>1</button>
//       <button onClick={()=>{setCurrentPage(2)}} style={{margin: "10px", cursor: "pointer"}}>2</button>
//       <button onClick={()=>{setCurrentPage(3)}} style={{margin: "10px", cursor: "pointer"}}>3</button>

//       <br />

//       { JSON.stringify(finalData) }
//       {/* have to do this because can't print an object */}

//     </>
//   )
// }


//? the question after doing this will be, why we have to use it as a hook, why can't we make it as a function in another file and use it, because we can't create functions that uses hook under the hood, if it's using a hook then that function itself is a hook, and all hooks starts with (use).
// export default App;



//! there is still a little bug in this useFetch hook, what if someone want the data from the other pages with the help of buttons





//! there are external libraries for hooks like this, like smr, tanstackm in which we can directly use these hooks by just importing them without writing them by ourself.






//& this can be asked in interviews with more complexity.




















//! now we want to check if the data in any of the 3 tabs is updated or not, to check this we'll re-send the request to the backend in every 10s to get back the current data.



// import { useFetch } from "./useFetch.jsx"
// import { useState } from 'react'
// import "./index.css"

// function App(){

//   const [currentPage, setCurrentPage] = useState(1);

//   const { finalData, loading } = useFetch("https://jsonplaceholder.typicode.com/todos/" + currentPage, 5);

//   if(loading){
//     return <>
//       "loading....";
//     </>
//   }



//   return(
//     <>

//        <button onClick={()=>{setCurrentPage(1)}} style={{margin: "10px", cursor: "pointer"}}>1</button>
//        <button onClick={()=>{setCurrentPage(2)}} style={{margin: "10px", cursor: "pointer"}}>2</button>
//        <button onClick={()=>{setCurrentPage(3)}} style={{margin: "10px", cursor: "pointer"}}>3</button>
//        <br />
//        { JSON.stringify(finalData) }

//     </>
//   )
// }

// export default App;





//& in interviews they can even ask us to make this useFetch hook little more complicated by making the user decide that after how much time he wants to refresh the data, it can be done by passing a argument (retryTime) in the useEffect hook that is handling the refresh, and then we can pass the time as a third parameter in the useFetch hook, done.










































//! usePrev hook
//^ is used in very few places
//^ but very very important for interviews


//! 1) it is supposed to show us the previous value of the state variable
//! 2) but there is a fault in this hook.

// import { useState } from "react";
// import "./index.css"
// import { usePrev } from "./usePrev.jsx"

// function App(){

//     const [state, setState] = useState(0);  // if this becomes 1 => 2
//     const prev = usePrev(state); // this should become 1.


//     return(
//         <>
//             {state}
//             <br />
//             <br />
//             <button onClick={()=>{setState(c => c + 1)}} className="border-1 px-5 py-1 rounded-md cursor-pointer">Click me</button>


//             <p>The previous value was {prev}</p>
//         </>
//     )
// }

// export default App;





































//! useDebounce

//! Debouncing - suppose someone is searching on web, and they'll get suggestions related to their words, for this the software will search in the backend for the related searches, 
//! so doing backend search after every letter he types will increase the load, so we use a debouncing function, which is called after every letter, and it calls the main fetch function if the user stopped typing for a given time period.
//! the reduces the load from the main function that searches the database.
//! this is called debouncing





import { useState, useEffect } from 'react'
import { useDebounce } from "./useDebounce.jsx"


function App(){

    const [inputVal, setInput] = useState("");
    const debounceValue = useDebounce(inputVal, 300);


    function debounceFn(e){
        setInput(e.target.value)
        //! this means the value of the target of the experiment.
    }

    useEffect(()=>{

        // expensive function
        // fetch for example

        console.log("user stopped typing")

    }, [debounceValue])

    return(
        <>
            <input type="text" onChange={debounceFn} className="bg-white border-2 border-white m-10"/>
        </>
    )
}

export default App;



//! don't need to write all these custom hooks by yourself, we can use some websites like these(https://usehooks.com/)

//! but we should definitely know how to write these famous custom hooks as it can asked in the interviews.