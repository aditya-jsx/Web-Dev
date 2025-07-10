//! Context API, Rolling up the State (defining state variables in the lowest parent ancestor, this is what we do until we don't know what state management is, it is a bad practice, we should not define all our state variables in the main component).

//! 1) making a light bulb app, which we can toggle



import "./index.css"
// import { useState } from "react";


// //! 2) breaking our app in compoennts

// function App(){
//   return(
//     <>
//       <LightBulb />
//     </>
//   )
// }


// function LightBulb(){

//   //! 7) here we'll make the state and pass the state variable and functions as props to the respective components.
//   const [bulbOn, setBulbOn] = useState(true);





//   // bulbOn is prop to the BulbState component
//   return(
//     <>
//       <BulbState  bulbOn={bulbOn} />
//       <br />
//       <ToggleBulbState setBulbOn={setBulbOn} />
//     </>
//   )
// }


// //! 3) this will return us a image of a bulb whether glowing or not
// //! 5) here we need a state variable to store the state of the bulb

// //! 8) here we'll catch that prop
// function BulbState({bulbOn}){

//   // const [bulbOn, setBulbOn] = useState(true);
//   //! 6) now we want to access this setBulbOn function in the togglebulbState component, because there we'll be using this function to toggle the state, so now we'll define this state in the parent , for that we'll roll up the state.

//   return(
//     <>
//       {bulbOn ? "bulb On" : "bulb Off"}
//     </>
//   )
// }


// //! 4) this will be used to toggle the state of the bulb
// //! 9) here we'll catch the prop

// function ToggleBulbState({setBulbOn}){

//   function toggleBulb(){
//     setBulbOn(bulbOn => !bulbOn);

//     // setBulbOn(!bulbOn);
//     // if we pass both the value and the function as a prop to this component
//   }

//   return(
//     <>
//       <button onClick={toggleBulb} className="border-2 bg-blue-300 rounded-md px-2">toggle the bulb</button>
//     </>
//   )
// }








// export default App
















//! Prop Drilling
//? When we pass the prop a parent component to a component which is present several layers deep the component tree.

//* 1) to do this we'll define the state variable in the App component and then we'll pass it down to lightbulb component and then to BulbState and ToggleBulbState


// import { useState } from "react";


// function App(){

//   //* 2) defining the useState at parent component
//   const [bulbOn, setBulbOn] = useState(true);

//   return(
//     <>
//       {/*//* 3) passing the state varibale to the Light component, Light component is a child of App component*/}
//       <Light bulbOn={bulbOn} setBulbOn={setBulbOn} />
//     </>
//   )
// }

// //* 4) this child component will catch these props as an argument
// //* 5) this chain of passing of variables in the tree makes our code highlt unreadable and complex, so we don't do this, because there'll be times when we have to pass the variables to the components that don't even use it just because the child components need it.
// function Light({bulbOn, setBulbOn}){

//   // const [bulbOn, setBulbOn] = useState(true);

//   return(
//     <>
//       <LightBulb  bulbOn={bulbOn} />
//       <br />
//       <LightSwitch setBulbOn={setBulbOn} />
//     </>
//   )
// }


// function LightBulb({bulbOn}){

//   return(
//     <>
//       {bulbOn ? "bulb On" : "bulb Off"}
//     </>
//   )
// }


// function LightSwitch({setBulbOn}){

//   function toggleBulb(){
//     setBulbOn(bulbOn => !bulbOn);
//   }

//   return(
//     <>
//       <button onClick={toggleBulb} className="border-2 bg-blue-300 rounded-md px-2">toggle the bulb</button>
//     </>
//   )
// }

// export default App



















//! to remove this problem of prop drilling we use,

//! Context Api: it helps us to share variables to the deep down present component without passing dowm props to each component



// import { useState, createContext, useContext } from "react";

// //! Context 1) To do this we have to define a context for the variable that we need to carry down, the context should always be made in a separate file but for now we are doing that in this file.

// const BulbContext = createContext();
// //! 2) this will wrap the part of our application and provide the context value to all it's descendants, any component that is a child of this can access the context.







// //! 1.1 - we can create our own wrapper component by storing it in separate component

// // whatever we write in the BulbProvider gets stored in the children prop
// // export function BulbProvider({children}){

// //   const [bulbOn, setBulbOn] = useState(true);

// //   return <BulbContext.Provider value={{
// //     bulbOn: bulbOn,
// //     setBulbOn: setBulbOn,
// //   }}>
// //     {children}
// //   </BulbContext.Provider>
// // }


// function App(){

//   const [bulbOn, setBulbOn] = useState(true);

//   return(
//     <>
//       {/* //! Wrapper 3) second step is to wrap the context inside the wrapper to pass the value to it's children */}
//       {/*//! we also needs to tell what we want to send to the descendents */}
//       {/*//! we want to send an object to the chlildren whose bulbOn key value is bulbOn and whose bulb setBulbOn key value is setBulbOn */}
//       <BulbContext.Provider value={{
//         bulbOn: bulbOn,
//         setBulbOn: setBulbOn,
//       }}>

//         <LightBulb  />

//       </BulbContext.Provider>




//       {/*//! 1.2) by using our own wrapper component, looks much cleaner */}
//       {/* <BulbProvider >
//         <LightBulb  />
//       </BulbProvider> */}

//     </>
//   )
// }


// function LightBulb(){

//   return(
//     <>
//       {/* <BulbState  bulbOn={bulbOn} /> */}
//       <BulbState />
//       <br />
//       {/* <ToggleBulbState setBulbOn={setBulbOn} /> */}
//       <ToggleBulbState />
//     </>
//   )
// }




// function BulbState(){
  
//   //! 4) third step, now to use this varible we have to use useContext, useContext comes from react.
//   // using the variable using useContext
//   const { bulbOn } = useContext(BulbContext);

//   return(
//     <>
//       {bulbOn ? "bulb On" : "bulb Off"}
//     </>
//   )
// }


// function ToggleBulbState(){


//   //! A question is why we are using this as an object, because the useContext returns us an object, so here we are destructuring it.
//   const { bulbOn, setBulbOn } = useContext(BulbContext);

//   function toggleBulb(){
//     setBulbOn(bulbOn => !bulbOn);
//   }

//   return(
//     <>
//       <button onClick={toggleBulb} className="border-2 bg-blue-300 rounded-md px-2">toggle the bulb</button>
//     </>
//   )
// }

// export default App;


//! context api makes our code clean but it doesn't optimize our re-renders, while the state management tools like redux, zustand and recoil make out re-renders optimized



















//! Introducing Recoil

import React, { createContext, useContext, useState } from 'react';
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil';

const count = atom({
  key: 'countState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

function Parent() {
  return (
    <RecoilRoot>
      <Incrase />
      <Decrease />
      <Value />
    </RecoilRoot>
  );
}

function Decrease() {
  const setCount = useSetRecoilState(count);
  return <button onClick={() => setCount(count => count - 1)}>Decrease</button>;
}

function Incrase() {
  const setCount = useSetRecoilState(count);
  return <button onClick={() => setCount(count => count + 1)}>Increase</button>;
}

function Value() {
  const countValue = useRecoilValue(count);
  return <p>Count: {countValue}</p>;
}

// App Component
const App = () => {
  return <div>
    <Parent />
  </div>
};

export default App;