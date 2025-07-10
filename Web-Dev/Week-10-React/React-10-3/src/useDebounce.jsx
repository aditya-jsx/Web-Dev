// deouncing without react


// let currentClock;
// function searchBackend(){
//     console.log("search started.....");
//     // behind the screen it is, fetch()
// }



// function debounceSearchBackend(){
//     // 3) before we start a new clock we need to clear the old clock
//     clearTimeout(currentClock);

//     // 1) start a clock for 30ms,
//     // 2) if during these 30ms, this function get called again then I'll restart the clock
//     currentClock = setTimeout(searchBackend, 30000);
// }


// 4) we'll call this funciton again and again until the user stops typing.
// debounceSearchBackend();
// debounceSearchBackend();
// debounceSearchBackend();
// debounceSearchBackend();
// debounceSearchBackend();
// debounceSearchBackend();
// debounceSearchBackend();
// debounceSearchBackend();









//! debouncing using react

// import { useRef } from "react";

// export function useDebounce(fn, delay) {
  
//   const currentClock = useRef();

//   const nf = () => {
//     clearTimeout(currentClock.current)
//     currentClock.current = setTimeout(fn, delay)
//   }

//   return nf
// }












//! UseCase, when the user is changing the value of the input then put it inside a state variable


import { useState, useEffect } from "react";

export function useDebounce(value, delay){

  const [debouncedValue, setdebouncedValue] = useState(value);



  useEffect(()=>{
    const handler = setTimeout(()=>{

      setdebouncedValue(value)

    }, delay)

    
    return ()=>{
      clearInterval(handler)
    }
    // when the dependencies changes, the cleanup will be called first and then the values will be updated, eventually the last clock standing will update the value to the current value of the input value

  }, [value, delay]);



  return debouncedValue;
}


//! so basically it takes the value coming from the user and stores it in a state variable, and keeps stopping the previous clocks and running new clocls until the user stops giving new values, when the user stops giving new values it runs the expensive function.