//! Routing in React

// import { useState, useEffect } from "react";
// import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";
// import "./index.css"




//! BrowserRouter is used for making websites, we'll wrap our website inside BrowserRouter
//! inside Routes we will define all our routes
//! in Route we set the link to the component that needs to be rendered
//! Link is a better way to redirect to a page in a smoother way
//! useNavigate can be used in places where we want the user to navigate without clicking any button. -> 4)

// function App() {
//   return (
//     <>
//       {/*//! 1) this is the top bar which will not change, even if the page changes */}
//       <h1>This is the top bar</h1>

//       <BrowserRouter>

//         {/*//? 3) there is a smoother way to do this thing using Link */}
//         {/* now there is no loading of html again in the backend, and this a true SPA. */}
//         {/* can't use link outside the BrowserRouter*/}
//         <br />
//         <Link to="/">Allen</Link>
//         |
//         <Link to="/about">About</Link>
//         |
//         <Link to="/jobs">Jobs</Link>
//         <br />

//         <Routes>
//           <Route path="/" element={<LandingPage />}></Route>
//           <Route path="/about" element={<AboutPage />}></Route>
//           <Route path="/jobs" element={<JobsPage />}></Route>

//           {/*//? 5) for error page, it happens if we write any address other than the recognized ones */}
//           <Route path="*" element={<ErrorPage />}></Route>
//         </Routes>
//       </BrowserRouter>

//       {/*//! 2) poor way to get to a new page, it'll fetch the whole html again */}
//       {/* <br />
//       <a href="/">Allen</a>
//       |
//       <a href="/about">About</a>
//       |
//       <a href="/jobs">Jobs</a> */}

//     </>
//   );
// }

// function LandingPage() {
//   return <>Welcome to the website</>;
// }
// function AboutPage() {
//   return <>Welcome to the About Section</>;
// }

// function JobsPage() {

//   //! 4) let's suppose we want the user to go back at the home page after staying for 10 secs at the jobs page

//   const navigate = useNavigate();

//   function redirectUser(){

//     // //! simple
//     // navigate("/");
//   }

//   //! 4.2) redirecting after 10 secs {nahi chal raha debug kar!!!!!!!!}
//     useEffect(() => {
//       const redirect = setTimeout(() => {
//         console.log("Mounted");
//         navigate("/");
//       }, 10000);

//       return () => {clearTimeout(redirect)}

//       //? using setTimeout here is better approach, as we don't want to do this repeatedly

//     }, [])

//   return(
//     <>
//       <h6>
//         Welcome to the Jobs Section
//       </h6>
//       <br />
//       {/* <button onClick={redirectUser} className="cursor-pointer">go back to home page</button> */}

//       {/* //! without button click */}
//       {/* //!no need of any button useEffect will automatically work when we go to jobs section */}
//       {/* //* kar liye debug!!!!!! */}
//     </>
//   )
// }

// //! 5) Error page component
// function ErrorPage(){
//   return(
//     <>
//       <h1>Error: Page not found</h1>
//     </>
//   )
// }

// export default App;






















// ! Layouts

// import { useState, useEffect } from "react";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Link,
//   Outlet,
// } from "react-router-dom";

// function App() {

//   //! 5) some people also use an array of objects for the route, they store the path and element in array objects and then iterate over that for the values, can be done for optimization
//   // const routes = [{
//   //   path: "path to page",
//   //   element: "component",
//   // } ,]


//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           {/*//~ for making a layout we have to keep all routes in a single route and then we pass them in a component */}
//           <Route path="/" element={<Layout />}>
//             <Route path="/" element={<LandingPage />}></Route>
//             <Route path="/about" element={<AboutPage />}></Route>
//             <Route path="/jobs" element={<JobsPage />}></Route>
//             <Route path="*" element={<ErrorPage />}></Route>


//             {/*//! 5)  they iterate like this..... in a for loop */}
//             {/* {routes} */}
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }




// //~ this component contains all the routes inside the outlet component, and will be rendered between header and footer, the route needed will be rendered.

// function Layout() {
//   return (
//     <>
//       {/* //! this is our header */}
//       <div className="flex h-[5rem] bg-blue-400 items-center rounded-2xl pl-10 gap-10">
//         <Link to="/">Allen</Link>
//         |
//         <Link to="/about">About</Link>
//         |
//         <Link to="/jobs">Jobs</Link>
//       </div>

//       {/* //! this contains all the routes */}
//       <Outlet />


//       {/* //! this contains our footer */}
//       <div className="flex h-[5rem] bg-red-400 rounded-2xl items-center pl-10">
//         <h5>
//           This is our Footer
//         </h5>
//       </div>
//     </>
//   );
// }

// function LandingPage() {
//   return <>Welcome to the website</>;
// }
// function AboutPage() {
//   return <>Welcome to the About Section</>;
// }

// function JobsPage() {
//   return (
//     <>
//       <h6>Welcome to the Jobs Section</h6>
//     </>
//   );
// }


// //! 5) Error page component
// function ErrorPage() {
//   return (
//     <>
//       <h1>Error: Page not found</h1>
//     </>
//   );
// }

// export default App;
























//! useRef

//! the problem statement is, suppose we have a signIn page with two inputs and a submit button, if nothing is written in the mail of password input then the respective input box should be focused.


// import { useRef } from "react"
// import "./index.css"


// function App(){

//   //! using dom manipulation
//   // function focusOnElement(){
//   //   document.getElementById("email").focus();
//   // }


//   //! using useRef hook
//   const inputRef = useRef();

//   function focusOnElement(){

//     //! now for doing this,
//     // document.getElementById("email").focus()

//     //! we can simply do this
//     inputRef.current.focus();


//     //* this is the first usecase of useRef hook, we are using it to select dom elements.



//   }

//   return(
//     <>
//       Sign In
//       <div className="flex gap-2 mt-2">

//         {/* here we've said that this inputRef refers to this dom element */}
//         <input ref={inputRef} onClick={focusOnElement} id="email" type="text" placeholder="Enter Email" className="border-2 rounded-sm"/>
//         <input type="text" placeholder="Enter Password" className="border-2 rounded-sm"/>
//       </div>
//       <button onClick={focusOnElement} className="bg-blue-200 border-2 mt-2">Submit</button>
//     </>
//   )
// }

// export default App




















//! 2nd usecase of useRef

//! the second usecase of a useRef is that we can give reference to a value in it, such that the component doesn't RE-RENDERS when we update the value, 

//! now the questions is why we are not doing this using useState, because if we use useState, then the component will RE-RENDER if we update the value, but here we don't want the component to re-render so we use useRef.

//* THERE are 3 ways to define variables in react

//! let varible = 1;  rarerly used
//! const [variable, setVariable] = useState();  mostly we use
//! const valueRef = useRef();   or this




// import { useState , useRef, useEffect } from "react"

// function App(){
  
//   // const [count, setCount] = useState(0);

//   //! using a raw variable (1st approach)
//   // let timer = 0;

//   // function startClock(){
//   //   timer = setInterval(function(){
//   //     setCount(c => c + 1);
//   //   } ,1000)
//   // }
//   //! the change that we do here will be overiden as soon as the component re-renders. 



//   // function stopClock(){
//   //   console.log("stop clicked")
//   //   clearInterval(timer);
//   // }
//   //! here the stop button will not work, as everytime the component re-renders the timer will be set to zero, this happens if we use raw variable declaration, but in case of useState the variable is guarded from component re-rendering.








//   //! using a state variable (2nd approach)
//   // const [count, setCount] = useState(0);
//   // const [timer, setTimer] = useState(0);

//   // function startClock(){
//   //   let value = setInterval(function(){
//   //     setCount(c => c + 1);
//   //   } ,1000)
//   //   setTimer(value);
//   // }


//   // function stopClock(){
//   //   console.log("stop clicked")
//   //   console.log(timer);
//   //   clearInterval(timer);
//   // }  
//   //! this is not the best approach because component keeps on re-rendering, it's not optimal because the html is still the same just the value is changing but it is still re-rendering, and we want to have minimum re-renders in our project for optimal performance.







//   //! using useRef (3rd and best approach)
//   const [count, setCount] = useState(0);
//   const timer = useRef();

//   function startClock(){
//     let value = setInterval(function(){
//       setCount(c => c + 1);
//     } ,1000)

//     //!instead of this 
//     // setTimer(value);

//     //! we'll write this
//     timer.current = value;
//     // this will persist across re-renders but it'll not re-render the component

//   }


//   function stopClock(){
//     console.log("stop clicked")
//     console.log(timer.current);
//     clearInterval(timer.current);
//   }  






//   return(
//     <>
//       {count}
//       <br />
//       <div className="flex gap-2 mt-5">
//         <button onClick={startClock} className="cursor-pointer">Start</button>
//         <button onClick={stopClock}  className="cursor-pointer">Stop</button>
//       </div>
//     </>
//   )
// }

// export default App