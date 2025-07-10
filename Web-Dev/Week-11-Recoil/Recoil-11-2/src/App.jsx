//?  Notes:- https://petal-estimate-4e9.notion.site/Recoil-1247dfd107358016bdb1ea1bb52e4a68

// import { useState } from "react"


//! Recoil - is one of State Management Libraries present out there
//! libraries increases the bundle size but still we use them, because it makes our life easier and also improve the performance.

// helps to render the only component whose variable is changed, suppose in linkedIn, if notifications changes, then only the notification tab re-renders not the whole top bar.

//! making a counter app using context api

// import { createContext, useContext, useState } from "react";

// const CountContext = createContext();

// function App(){

//   function CountContextProvider({children}){
//     const [value, setValue] = useState(0);

//     return <CountContext.Provider value={{value, setValue}}>
//       {children}
//     </CountContext.Provider>
//   }

// function Increment(){
//     const {value, setValue} = useContext(CountContext)
//     return <button onClick={()=>{setValue(value + 1)}} className="mx-1 mt-5 border-1 border-blue-300 rounded-xl p-1 cursor-pointer">Increment</button>
// }

// function Decrement(){
//     const {value, setValue} = useContext(CountContext)
//     return <button onClick={()=>{setValue(value - 1)}} className="mx-1 mt-5 border-1 border-blue-300 rounded-xl p-1 cursor-pointer">Decrement</button>
// }

// function Value(){
//     const { value } = useContext(CountContext)
//     return <p className="ml-2 mt-4">Value: {value}</p>
// }

//   return(
//     <>

//     <CountContextProvider>

//       <Increment />
//       <Decrement />
//       <Value />

//     </CountContextProvider>

//     </>
//   )
// }

// export default App;

















//! Atom: - Atoms are units of state that can be read from and written to from any component. When an atom’s state changes, all components that subscribe to that atom will re-render.

//! 1) now we'll put the atom in a differrent file as it is a good practice
//! 2) see counter.js (upper code)
//! 3) wrap the Counter app in Recoil Root



// import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
// import { counterAtom } from "../src/store/counter.js";
// // import { useState } from "react";

// function App() {
//   return (
//     <>
//       <RecoilRoot>
//         <Counter />
//       </RecoilRoot>
//     </>
//   );
// }


// export default App;






// function Counter() {
//   //! 4) now we dont't need any state variables
//   // const [count, setCount] = useState(0);

//   return (
//     <>

//       {/* 5) not even passing down the state variables anymore */}
//       {/* <CurrentCount count={count} /> */}
//       {/* <br /> */}
//       {/* <Increase setCount={setCount} /> */}
//       {/* <Decrease setCount={setCount} /> */}


//       <CurrentCount />
//       <br />
//       <Increase />
//       <Decrease />







//     </>
//   );
// }

// //! 5) removing all the props as well

// function Increase() {

//   //! to use the setCount we have to use the hook useSetRecoilState();

//   //! 7) this component has now subscribed to the setter of this Atom

//   const setCount = useSetRecoilState(counterAtom);
//   function increase() {
//     setCount(c => c + 1);
//   }

//   return (
//     <>
//       <button onClick={increase}>Increase</button>
//     </>
//   );
// }

// function Decrease(  ) {

//   //! 7) this component has now subscribed to the setter of this Atom
  
//   const setCount = useSetRecoilState(counterAtom);
//   function decrease() {
//     setCount(c => c - 1);
//   }

//   return (
//     <>
//       <button onClick={decrease}>Decrease</button>
//     </>
//   );
// }


// //! 6) To use the value of the state we have to use the hook useRecoilValue(), which gives us the default value of the Atom

// function CurrentCount() {

//   //! this component has now subscribed to the value of this Atom
//   const count = useRecoilValue(counterAtom);
//   return (
//     <>
//       {count}
//     </>
//   );
// }


// Itne ghante time waste kiya ispe 2 din waste karne ke baad pta chala ki react or recoil ke version match nahi ho rhe the, dono ke latest version update kiye tab jaake chala :-(



//! useRecoilValue gets both the value and the setter





























//! Memo

//! we can make useState more better by using something called Memo.
//! if a parent component re-renders then all of it's child elements will also re-render, so we can day that if a state variable changes then the parent component will re-render and it'll also re-render all of it's child components.
//! But if you wrap your component in a memo, then only if prop/state in that child changes, only then it re-renders


//! if we pass the prop in the children, then even if it is memoized, it'll still re-render




// import { useState, useEffect, memo } from 'react'

// function App(){
//   return(
//     <>
//       <Counter />
//     </>
//   )
// }


// //! 3) finally only the counter component will re-render after every 3 seconds.

// function Counter(){

//   const [count, setCount] = useState(0)

//   useEffect(()=>{
//     setInterval(()=>{
//       setCount(c => c + 1)
//     },3000)
//   }, [])


//   return(
//     <div>
//       <Increase />
//       <Decrease />
//       <CurrentCount />
//     </div>
//   )
// }

// //! 2) we'll do this to all the components that we don't want to re-render.

// const Increase = memo(function(){

//   function increase(){ 
    
//   }

//   return(
//     <div>
//       <button onClick={increase}>Increase</button>
//     </div>
//   )
// })


// const Decrease = memo(function(){

//   function decrease(){

//   }
//   return(
//     <div>
//       <button onClick={decrease}>Decrease</button>
//     </div>
//   )
// })

// //! 1) we don't want this component to re-render as it is not accepting any props and no state variables are present here which are being updated so we'll make it a memo funciton.
// //! A Memo is a function which accepts a function.

// const CurrentCount = memo(function(){
//   return(
//     <div>
//       1
//     </div>
//   )
// })

// export default App





































//! Recoil vs Context
// in context, if the whole state changes then every component that is related to it will re-render even if they're using the variable that is not changed.
// in recoil, it provides us selectors that are associated with each state variable in the global state, the component will only re-render if the selector of the state that it is using changes.


//! Selectors - this is one more thing that recoil provides us, selectors are associated with each state variable in the global state, the component will only re-render if the selector of the state that it is using changes.

//& Look in assests
//& look in counter.js (bottom code)


import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import counterAtom, { isEvenSelector } from "./store/counter.js"
import "./index.css"





//! the application was crashing because we forgot to wrap the app component inside a recoil root
function App(){
    return(

        <>
        <RecoilRoot>
            <Button />
            <br />
            <Counter />
            <br />
            <br />
            <Even />
        </RecoilRoot>
        </>
    )
}

export default App



function Button(){

    const setCount = useSetRecoilState(counterAtom)
    function increase(){
        setCount(c => c + 2)
    }

    function decrease(){
        setCount(c => c - 1)
    }

    return(
        <>
            <div className="flex gap-4">
                <button onClick={increase}>Increase</button>
                <button onClick={decrease}>Decrease</button>
            </div>
        </>
    )
}



//! it is subscribed to the atom as it needs the real value.
function Counter(){

    const count = useRecoilValue(counterAtom)

    return(
        <>
            {count}
        </>
    )
}



// this is subscribing for a derived state (the Selector)

function Even(){

    //! the hook that we use will be the same.
    const even = useRecoilValue(isEvenSelector);
     

    return(
        <>
            {even ? "Even" : "Odd"}
        </>
    )
}


//! useRecoilState gets both the value and the state
//! const [count, setCount] = useRecoilState(name_of_atom)



//! read about "set" function in recoil - it basically updates the state variable's value that the selector is using.