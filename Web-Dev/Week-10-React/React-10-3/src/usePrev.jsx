import { useRef, useEffect } from "react"


export function usePrev(value){
    //! 1) initialized a ref
    const ref = useRef();
    // refs let us store a value, and whenever that value is updated, the component doesn't re-render


    //! 3) in this hook we say that whenever this value changes, set that value to ref variable
    //! 4) so suppose we clicked on button and it changed from 1 => 2, the state variable is set to 2 in other file,  so this useEffect will be called first, right????
    //! NOOOO, react follows the approach of, return first, effect later.
    useEffect(()=>{
        ref.current = value;

    }, [value])



    //! 2) returned its current value
    return  ref.current;

    //! 5) so this should return 2 right?
    //! 6) no it'll return 1
}



//! ---> so whenever this hook will be called with some new value then the ref will be holding the old value, and it'll return the old value first then it'll update the value to 2




//! Problem with this hook ->> For “old” we don’t really mean the “previous” value, but the value from the previous rendering. And who is counting all the renderings*? The useEffect hook of course. So if a new rendering occurs and the value we’re passing to the usePrevious hook isn’t changed, we suddenly don’t get the value we’d expect.




//! Solution

// function usePrevious(value, initial) {
//   const ref = useRef({ target: value, previous: initial });
//   if (ref.current.target !== value) {
//     ref.current.previous = ref.current.target;
//     ref.current.target = value;
//   }
//   return ref.current.previous;
// }