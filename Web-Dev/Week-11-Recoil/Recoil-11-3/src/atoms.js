// import { atom, selector } from 'recoil';



// export const networkAtom = atom({
//     key: "networkAtom", 
//     default: 102
// })



// export const jobsAtom = atom({
//     key: "jobsAtom", 
//     default: 0
// })


// export const messagingAtom = atom({
//     key: "messagingAtom", 
//     default: 0
// })


// export const notificationsAtom = atom({
//     key: "notificationsAtom", 
//     default: 12
// })


// export const totalNotificationCount = selector({
//     key: "notificationCount",
//     get: ({get})=>{
//         const networkAtomCount = get(networkAtom);
//         const jobsAtomCount = get(jobsAtom);
//         const messagingAtomCount = get(messagingAtom);
//         const notificationsAtomCount = get(notificationsAtom);
//         return networkAtomCount + jobsAtomCount + messagingAtomCount + notificationsAtomCount;
//     }
// })




























//! Asynchronous Data Queries (using backend)



//! 2) but here we've written a atom which includes all the info from that link
//! basically we've consolidated everything in a single atom for our ease.

// import axios from "axios";
// import { atom, selector } from "recoil";






//! 5) to remove the ugly useEffect code, we can make sure the useEffect works inside the atom as an asynchronous function which gets the values from the backend, so that we can use them in the frontend, without defining each value as default

// export const notifications = atom({
//     key: "networkAtom",
//     default: {
//         network: 4, 
//         jobs: 6, 
//         messaging: 3, 
//         notifications: 3
//     }
// });





//! 5.2) for doing that we can think of doing this

// export const notifications = atom({
//     key: "networkAtom",
//     default: async () => {
//         const res = await axios.get("https://sum-server.100xdevs.com/notifications")
//         return res.data
//     }
// });

//! 5.3) but it'll throw an error that the default value for an atom should be synchronous OR, 
//! it can be a Selector which can be asynchronous. This is where the concept of Asynchronous data Queries comes into the picture





//! 6) we can make the default value of atom a selector which can be asynchronous, and we don't have to pass get as an argument as we don't depend on anything. 

// export const notifications = atom({
//     key: "networkAtom",
//     default: selector({
//         key: "networkAtomSelector", 
//         get: async () => {
//             const res = await axios.get("https://sum-server.100xdevs.com/notifications")
//             return res.data
//     }
//     })
// });



//! 7) so this is what we use when we want to initialise axios.get or do some async operation
//! 8) the next thing to learn is how we'll put a loader for the flash that still comes








// export const totalNotificationSelector = selector({
//     key: "totalNotificationSelector",
//     get: ({get}) => {
//         const allNotifications = get(notifications);
//         return allNotifications.network + 
//         allNotifications.jobs + 
//         allNotifications.notifications + 
//         allNotifications.messaging
//     }
// })












//! this adds an artificial delay of 5 secs
// await new Promise(r=> setTimeout(r, 5000)) 

// new Promise(r => setTimeout(r, 5000))
// ->> new Promise(...): Creates a new Promise.

// ->> r => setTimeout(r, 5000): A short arrow function where r is the resolve function of the promise.

// ->> setTimeout(r, 5000): Calls setTimeout to wait 5000 milliseconds (5 seconds) and then calls r(), which resolves the promise.

// ->> The await pauses the async function until the promise resolves.

// ->> So the function effectively sleeps or delays for 5 seconds at that point.








































//! Atom Family ( for todo )



// import { atom, selector } from "recoil";


// import { atomFamily } from "recoil";
// import { TODOS } from "./todos";

// export const todosAtomFamily = atomFamily({
//   key: 'todosAtomFamily',
//   default: id => {
//     return TODOS.find(x => x.id === id)
//   },
// });


//! 5) now here we defined an atomFamily, whose default value is a function which says

//! I know this is a family, tell me which atom do you want(give me the inputs), and i'll return the default value for that particular atom 


//! 6) the logic is that the function is going through the hard-coded values in the todos.js file and trying to find the todo with the passed id.


//! find works similiar to map and filter -  (given this specific id, find the todo which has this specific id, if there exits one then it returns that specific todo, otherwise it returns null)



//! if same atom is asked again and again then it'll only run one time and after that it'll be a cached value, and if we only give any specific id more than one time and make changes in that todo, then all the todos with that id will change their values








//! READ THISSS

//! why we aren't passing the array of todos as the default value of a single atom, because even if one todo changes, all the todos will re-render as they all are linked to the same atom.

//? we'll create an atom family so that if one todo changes the other guys won't re-render as they all belong to separate atoms.









//? atom family returns a function that returns an atom






























//! Selector Family

//! here we'll see how to get the data from the backend instead of a data base



// import { atomFamily, selectorFamily } from "recoil";
// import axios from "axios";

// export const todosAtomFamily = atomFamily({

//   key: 'todosAtomFamily',

//   //! to do async task inside a atomFamily we are using selectorFamily  
//   default: selectorFamily({

//     key: "todoSelectorFamily",
//     get: (id) => async ({get}) => {
//       const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
//       return res.data.todo;
//     },

//   })
// });



//? now the code written for getting the todos from the database was to search the todo with a specific id and then to pass that specific todo with given id.(this was done using atomFamily)

//? now for doing async task inside a atom we were using selector as the default value, so here we have to perform an async operation inside the atomFamily by fetching the data from the sevrer, for doing async task inside the atomFamily we'll use selectorFammily

//! to do async task inside atom -> we use selectors
//! to do async task inside atomFamily -> we use selectorFamily




//! now this selector Family is giving a function as a default value, and that function is returning an async funciton which is doing our task of getting the data from the server.

//! we did this because this has to be a dynammic function which is getting an id and then returning an async function which fetchs the data from the server with that specific id.





//! if we use a selector inside an atom Family then we are making a single selector for every atom of the atomFamily, that's why we should use a selectorFamily inside an atomFamily, to make multiple selectors for multiple Atoms.




//! if multiple requests are made for the same id then there will not be multiple calls, the value will be fetched onkly once and then it'll be cached







































//! useRecoilStateLoadable, useRecoilValueLoadable 


// import { atomFamily, selectorFamily } from "recoil";
// import axios from "axios";

// export const todosAtomFamily = atomFamily({

//   key: 'todosAtomFamily',
//   default: selectorFamily({

//     key: "todoSelectorFamily",
//     get: (id) => async ({get}) => {
//       const res = await axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`);
//       return res.data.todo;
//     },

//   })
// });

