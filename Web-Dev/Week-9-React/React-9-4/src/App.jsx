//! Children in React

// import { useState } from "react";
// import "./index.css";

// function App() {
//   return (
//     <>
//       <div className="flex flex-col">

//         {/* we can pass strings in props */}
//         {/* <Card innerContent={"hi there"} /> */}

//         {/* we can pass html inside the props */}
//         {/* <Card
//           innerContent={
//             <div className="text-green-400">
//               What do you want to put here <br /> <br />
//               <input className="bg-white rounded-md" type="text" />
//             </div>
//           }
//         /> */}
//         {/* both of these cards are using generic card components */}
//         {/* instead of passing components like this, we can pass it like this */}

//         {/* this is easier to pass children inside a wrapper component */}
//         <Card>
//           <div className="text-green-400">
//             <h1>Title 1</h1>
//             <p>some random information</p>
//           </div>
//         </Card>

//         {/* and like this as well */}
//         <Card>
//           <h1>Title 2</h1>
//           <p>some random information</p>
//         </Card>
//           {/* whatever we pass in these card tags will become the children component and will be rendered in the Card component. */}

//       </div>
//     </>
//   );
// }

// // we have to name the prop as children.
// function Card({ children }) {
//   return (
//     <div className="bg-black p-10 m-10 rounded-2xl text-white">
//       {children}
//     </div>
//   );
// };

// export default App;

//! lists and keys

// function App(){

//   //? instead of this we can pass info as props as well

//   // const todos = [{
//   //   title: "Go to gym",
//   //   done: true
//   // }, {
//   //   title: "Learn react",
//   //   done: false
//   // }]

//   const todoComponents = todos.map(todo => <Todo
//     title = {todo.title} done = {todo.done} />)

//   return(
//     <>
//       <div>
//         {/* {todoComponents} */}

//         {/* we can simply to this as well */}
//         <Todo title={"Go to Gym"} done={true}/>
//         <Todo title={"Learn React"} done={false}/>
//         {/* every time we do this, react will show an error that every item of the list should have a key, it can throw some issues while rendering as react will confuse while rendering it if the components are not placed in order,
//!        this is asked in interviews
//         1) key is like an index to every item present in the list.
//         2) it can lead to performance issues
//         3) if these components got flipped somehow in the array then react will be confused which one to render and which one to not.
//         4) react can figure out differences very well if we give keys to every component in the list.
//         5) keys should be uniques so that components maintains separate identity during re-renders
//  */}

//       </div>
//     </>
//   )
// }

// function Todo({title, done}){
//   return (
//     <>
//       <div>
//         {title} - {done? "nice" : "not nice" }
//       </div>
//     </>
//   )

// }

// export default App;

// ! class based components and funtion components

// previously the components are written in the form of a class and but now everyone used function components.
// Class components are  classes that extend React.Component, while functional components are simpler and can use Hooks.

// import React, { Component } from 'react';

// function App(){
//   return(
//     <>
//       <ClassCounter />
//     </>
//   )
// }

// class ClassCounter extends Component {
//     state = { count: 0 };

//     increment = () => {
//         this.setState({ count: this.state.count + 1 });
//     };

//     render() {
//         return (
//             <div>
//                 <p>Count: {this.state.count}</p>
//                 <button onClick={this.increment}>Increment</button>
//             </div>
//         );
//     }
// }

// export default App;























//! Error boundary:- only works in class based components.

// import React from 'react';

// function App() {
//   return (
//     <>

//       {/* this is how we wrap the components which can show error */}
//       <ErrorBoundary>
//         <Card1 />
//       </ErrorBoundary>

//       <Card2 />
//     </>
//   );
// }

// function Card1() {
//   // now the error is only in the card1 component but still it'll crash the whole website, to prevent this from happening we can use error boundary in class based components
//   throw new Error("not working");

//   return (
//     <>
//       <div className="bg-blue-400 m-20 p-10 rounded-xl">Hi there</div>
//     </>
//   );
// }
// function Card2() {
//   return (
//     <>
//       <div className="bg-blue-400 m-20 p-10 rounded-xl">Hello Buddy</div>
//     </>
//   );
// }



// // this can be used as a black box, just copy and paste this code, most companies add this in their large code base.

// class ErrorBoundary extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { hasError: false };
//   }

//   static getDerivedStateFromError(error) {
//     return { hasError: true };
//   }

//   componentDidCatch(error, info) {
//     console.error("Error caught:", error, info);
//   }

//   render() {
//     if (this.state.hasError) {
//       return <div className="bg-blue-400 m-20 p-10 rounded-xl">Something went wrong</div>;
//     }

//     return this.props.children;
//   }
// }

// export default App;

















//! Fragments in React
// ~ this is wrapping children inside a parent element, we can do this by two ways, either by wrapping children inside a div or fragment, 
// ~ using fragment is always a better approach ---> <></>



import Fragments from 'react'

function App(){
  return(

    // this present below is called a fragment, it'll make sure that the children are directly present under the root div.
    // <>

    // </>

    //! we can do this same thing in one more way by importing fragments from react
    <Fragments>
      {/* this also does the same thing */}
    </Fragments>

  )
}

export default App