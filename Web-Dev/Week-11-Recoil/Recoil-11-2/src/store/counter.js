import { atom, selector } from 'recoil';


const counterAtom = atom({
    default: 0,
    key: "counterAtom"
})

export default counterAtom;


//! we Should't do it here, we should do it in a different file called selectors

//! Selector
//! similar to atom, a selector is a function which takes two things as an input
//! 1) first is a key, to get it a unique name
//! 2) second can't be a value, as we are dependent on something else to give us the value, so it gives us a function that lets us derive the state.

//! so second thing is a key called get which is function, this function gets anoither key called "get" as an input(this function is called by recoil to see wheather the state is changed or not), from which we can get any atom that we want, (from where we can get the derived state from any atom).


//! -> now "get" is used to get the derived state of any atom, and here we want the derived state of counterAtom.


export const isEvenSelector = selector({


    //? name of the selector - (1)
    key: "isEvenSelector",

    //? logic of how can you derive some state from another atom - (2)
    get: function({ get }){
        const currentCount = get(counterAtom)
        const isEven = (currentCount%2 === 0) //! if this returns true the current number is even or otherwise it is false.
        return isEven;
    },

  }
);



//! we can also depend on multiple atoms to do some changes



//! the key of each atom and selector should be unique



//! make sure to export the default atom.