// import './App.css'
// import {useState} from 'react'

// function App() {
//   return (
//     <>
//       <h1>Counter</h1>
//       <Counter />
//     </>
//   )
// }

// function Counter(){

//   const [count, setCount] = useState(0);

//   function increaseCount(){
//     setCount(count + 1);
//   } 

//   function decreaseCount(){
//     setCount(count - 1);
//   } 
//   function resetCount(){
//     setCount(0);
//     // if i do setCount = 0; then it will not work because it will show assignment to constant variable.
//   } 

//   return(
//     <>
//       <h1>{count}</h1>
//       <button onClick={increaseCount}>Increase</button>
//       <button onClick={decreaseCount}>Decrease</button>
//       <button onClick={resetCount}>Reset</button>
//     </>
//   )
// }

// export default App

//! useState👆👆👆👆👆







// !-------------------------------------------------------------------------------------------------------------------------------------------

// ! useEffect👇👇👇👇👇


// now i want to change this counter into a clock, starts from 1 keep going up after every one sec, 
// we can do this by using setInterval but after some time the screen will go crazy, because that setInterval is being called again and again bcuz the Counter component is being called again and again,
// the counter component is called multiple times, bcuz react calls a component function whenever the state changes.

// if the state is not changing then the component is called only once.

// import { useState, useEffect } from 'react'

// function App(){
//   return(
//     <>
//     <Counter />
//     {/* <Counter /> // if we call the counter component two times then the react will call the counter component two times. */}
//     </>
//   )
// }


//! life cycle events - mounting, re-rendering, unmounting
//! first render is called mounting
// function Counter(){

  // const [count, setCount] = useState(0)

  // setInterval(function(){
  //   setCount(count + 1);
  // }, 1000)
  //? using setIntertval here start a new interval everytime the component is called.

  //? we want to render this clock only in the first render, not everytime, that first render is called a life cycle event or mounting event.





  //* for this we'll wrap out setInterval in a useEffect hook.

  // useEffect(function(){
  //   setInterval(function(){
  //     setCount(count => count + 1)
  //   }, 1000)
  // }, [])
  //~ this empty array is called dependency array, it will tell react to call this function only once, when the component is first rendered.
  //~ this will make sure that the code inside the hook is called only once, next time it'll be ignored.

  //~ now if we don't pass count as a dependency in the dependency array then it will not work, bcuz we can't use the state variable inside the useEffect, without passing it as a dependency.
  //~ so we have to pass it as a function


//   console.log("Counter called")

//   function increaseCount(){
//     setCount(count + 1);
//   }
//   return(
//     <>
//       <h1>{count}</h1>
//       <button onClick={increaseCount}>Increase</button>
//     </>
//   )
// }

// export default App

//! -----------------------------------------------------------------------------------------------------------------------------------------



//! -----------------------------------------------------------------------------------------------------------------------------------------


  //! Conditional Rendering

  //~ we want to render this counter function sometimes and don't want to render it some other times.


// import { useState, useEffect } from "react";

// function App(){

//   const [counterVisible, setCounterVisible] = useState(true);

//   useEffect(function(){
//     setInterval(function(){    // starts the clock
//       setCounterVisible(c => !c)
//     }, 5000);
//   }, [])
  
//   // this will toggle the counterVisible state every 5 seconds. this is called conditional rendering.

  
//   return(
//     <>
//       <h1>Counter</h1>
//       {counterVisible ? <Counter></Counter>:null }
//       {/* if Counter vaiable is visible then render Counter Component  */}
//     </>
//   )
// }

// function Counter(){
 
//   const [count, setCount] = useState(0);


//     // -----new code-----
//     useEffect(function(){  // starts the clock
//       console.log("on mount")
//       let clock = setInterval(function(){
//         console.log("from inside setInterval")
//         setCount(count => count + 1);
//       }, 1000)

//       return function(){  // stops the clock
//         console.log("on unmount")
//         clearInterval(clock); // this is called cleanup, stops the clock when the component unmounts.
//       }
      
//     }, [])
//     // ----new code----

//   // now this mounting and unmounting condition will only work when the dependency array is empty, if we pass any dependency then it will not work.

  
//   // make sure to pass the count as a function, here is the one line code for doing the same.



//   // ---prev code---
//   // useEffect(function(){  // starts the clock
//   //   setInterval(function(){
//   //     setCount(count => count + 1);
//   //   }, 1000)
//   // }, [])
  
//   // even if this code looks visually correct but it still has some performance issue, whenever it mounts it starts a clock but we didn't stopped the clock.
//   // more and more clock will be started whenever the component mounts and never stopped, this is called memory leak.

//   // we have to stop the clock when the component unmounts, this is called cleanup.
//   // as react doesn't know when the clocl should stop, we have to tell react to stop the clock when the component unmounts.
//   // return function of a useEffect is called when the component unmounts.



  
//   function increaseCount(){
//     setCount(count + 1);
//   }

//   return(
//     <>
//       <h1>{count}</h1>
//       <button onClick={increaseCount}>Increase</button>
//     </>
//   )
// }

// export default App







//!----------------------------------------------------------------------------------------------------







// ! now we'll learn that useEffect, dependency Array, and cleanup is:-


import { useState, useEffect } from "react"



function App(){
  
  const [count, setCount] = useState(0)

  function Increase(){
    setCount(count => count+1);
  }

  
  return(
    <>
      <Counter count={count} />   
      {/*   1) passed the count as a prop to a component  */}
      {/*   just as we pass an argument to a function   */}

      
      <button onClick={Increase}>Increase</button>
    </>
  )
}





// 2)this component is receiving some props as an argument.
// we can name it anything but naming it props is a good practice.
function Counter(props){


  useEffect(function(){
    console.log("on mount")

    return function(){
      console.log("on unmount")
    }
  }, [])


  // 5) so we pass the variable which is changing as a dependency in the dependency array, and we can see that the useEffect is called whenever the variable changes.and inside that useEffect we can write our logic.
  // 6) so first useEffect will only works when the component mounts, and the second useEffect will work whenever the props.count changes.
  // 7) it'll only work when the variable passed in the dependency array changes, will not work when any other variable changes, and we can pass more than one variable in the dependency array.if we want to run same logic whenever any of the passed variable changes.
  useEffect(function(){
    console.log("props.count changed")

    return function(){
      console.log("cleanup of 2nd useEffect")
      // this will not called at the first time, it will be called when the props.count changes, it'll clean the previous props.count.
    }
  }, [props.count])

  return(
    <>
      {/* 3)this will render */}
      {/* because we haven't defined count in this function */}

      {/* 4) now inside this component we want to run some logic whenever this prop.count changes, i don't want to run logic when a component mounts, instead i want to run some logic whenever count variable changes, this is where we use dependency array */}
      <h1>Counter! {props.count}</h1>
    </>
  )

  // we might want to run some logic when a state variable changes, this is when we use dependency array.
 
}



export default App

// in use Effect we've learnt that whenever a component mounts, it calls the function inside the useEffect, and whenever the component unmounts, it calls the return function inside the useEffect.


// !--------------------------------------------------------------------------------------------------------------------------------------------