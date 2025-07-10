// import { useRecoilState,useRecoilValue, useSetRecoilState, RecoilRoot } from "recoil";
// import { jobsAtom, networkAtom } from "./atoms"
// import { messagingAtom } from "./atoms"
// import { notificationsAtom } from "./atoms"
// import { totalNotificationCount } from "./atoms"
// import { useMemo } from "react";

// function App(){
//     return(
//         <RecoilRoot>
//             <MainApp />
//         </RecoilRoot>
//     )
// }

// //! 1) we want to make a linkedin like navbar

// //! The app will not work until we wrap the whole comoponent inside the RecoilRoot

// function MainApp(){

//     //! Atoms
//     const networkCount = useRecoilValue(networkAtom)
//     const jobsCount = useRecoilValue(jobsAtom)
//     const messagingCount = useRecoilValue(messagingAtom)
//     const notificationCount = useRecoilValue(notificationsAtom)

//     //! Selector
//     const totalNotifications = useRecoilValue(totalNotificationCount)

//     //! 3) like this
//     // const totalNotifications = useMemo(()=>{
//     //     return jobsCount + messagingCount + networkCount + notificationCount;
//     // }, [jobsCount, messagingCount, networkCount, notificationCount])

//     return(
//         <>
//                 <div className="flex flex-col p-2 gap-2">

//                     <button className="p-2 border-1 bg-blue-200 rounded-xl">Home ()</button>

//                     <button className="p-2 border-1 bg-blue-200 rounded-xl">My Network ({networkCount >= 100 ? "99+" : networkCount})</button>
//                     {/* here we are using conditional rendering that if the count is 100+ then show 99+, which is similar to what happens in LinkedIn */}

//                     <button className="p-2 border-1 bg-blue-200 rounded-xl">Jobs ({jobsCount})</button>

//                     <button className="p-2 border-1 bg-blue-200 rounded-xl">Messaging ({messagingCount})</button>

//                     <button className="p-2 border-1 bg-blue-200 rounded-xl">Notifications ({notificationCount})</button>

//                     {/* //! 2) we want to show out total numbers of notification on the me button */}
//                     {/* go to atom.js */}
//                     <button className="p-2 border-1 bg-blue-200 rounded-xl">Me ({totalNotifications})</button>
//                     {/* //! this can be done by using memo as well (see point 3) */}

//                 </div>
//         </>

//     )
// }

// export default App

//! recoil is not working properly check.
//! this is because the versions of recoil and react were different, so 1) make sure the versions installed are compatible with each other and 2) restart the app after writing recoil code.











































//! Asynchronous Data Queries (values coming from backend)



// import './App.css'
// import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
// import { notifications, totalNotificationSelector } from './atoms'
// import { useEffect } from 'react'
// import axios from 'axios'

// function App() {
//   return <RecoilRoot>
//     <MainApp />
//   </RecoilRoot>
// }

// function MainApp() {



  //! 1) if we weren't using recoil then we had to use a usestate, and for that state there will be an useEffect which will send the backend request to send the data, and then we'll use that state variable to access the things everywhere in the app
  //! 2) see atom.js

//   const [networkCount, setNetworkCount] = useRecoilState(notifications)
//   const totalNotificationCount = useRecoilValue(totalNotificationSelector);



  //! 3) this useEffect is fetching the value from the backend and then updates the data.
//   useEffect(() => {
    // fetch

    //! this link isn't working anymore
//     axios.get("https://sum-server.100xdevs.com/notifications")
//       .then(res => {
//         setNetworkCount(res.data)
//       })
//   }, [])


  //! 4) this is not a right way to do async queries in recoil as, we'll see a flash after reloading the data which is because of the useEffect as first the default value gets rendered then the request goes out then useEffect takes place and updates the value and then the actual values gets rendered,

  //! second problem is that it is a lot of ugly code to look at  


  //! 5) look at atoms.js  

//   return (
//     <>

//       <div className='flex flex-col gap-2'>



//         <button className='p-2 border-1 bg-blue-200 rounded-xl'>Home</button>

//         <button className='p-2 border-1 bg-blue-200 rounded-xl'>My network ({networkCount.networks >= 100 ? "99+" : networkCount.networks})</button>
//         <button className='p-2 border-1 bg-blue-200 rounded-xl'>Jobs {networkCount.jobs}</button>
//         <button className='p-2 border-1 bg-blue-200 rounded-xl'>Messaging ({networkCount.messaging})</button>
//         <button className='p-2 border-1 bg-blue-200 rounded-xl'>Notifications ({networkCount.notifications})</button>

//         <button className='p-2 border-1 bg-blue-200 rounded-xl'>Me ({totalNotificationCount})</button>


//       </div>
//     </>
//   )
// }

// export default App








































//! Atom Family



//! 1) here we want to dynamically make an atom for every todo, because if we just pass the value of the todo as a default value in an atom then every todo will show the same info, so we have to make a new atom for every todo dynamically

//! 2) we can also store the todos inside an array as a default value but here we have to do it without using that.

//! 3) so for doing this we'll have an atom family, from that we'll call todos by using todo ids



// import './App.css'
// import { RecoilRoot, useRecoilState, useSetRecoilState } from 'recoil';
// import { todosAtomFamily } from './atoms';
// import { useEffect } from 'react';

// function App() {
//   return <RecoilRoot>

//     {/*//! -> */}
//     <UpdaterComponent />
    
//     <Todo id={1}/>
//     <Todo id={2} />
//   </RecoilRoot>
// }

// function Todo({id}) {

//     //! 4) suppose we've defined an atom family(todosAtomFamily), now we'll get a specific atom by there like this.
//    const selectTodo = useRecoilState(todosAtomFamily(id));

//     //! 5) now let's see how we define an atom family, go to atoms.js  



//     // const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

//   return (
//     <>
//       {selectTodo.title}
//       {selectTodo.description}
//       <br />
//     </>
//   )
// }


// //! -> lets make a component that can modify the todos

// function UpdaterComponent(){


//     const updateTodo = useSetRecoilState(todosAtomFamily(2))


//     useEffect(()=>{
//         setTimeout(()=>{
//             updateTodo({
//                 id: 2,
//                 title: "2",
//                 description: "new todo"
//             })
//         }, 5000)
//     }, [])


//     return(
//         <div></div>
//     )
// }





// export default App





//! and if we only give any specific id more than one time and make changes in that todo, then all the todos with that id will change their values (see -> marked points)








































//! Selector Family (see atoms.js for this topic)


// import './App.css'
// import { RecoilRoot, useRecoilState } from 'recoil';
// import { todosAtomFamily } from './atoms';


// function App() {
//   return <RecoilRoot>
//     <Todo id={1}/>
//     <Todo id={2} />
//   </RecoilRoot>
// }


// function Todo({id}) {
//    const [todo, setTodo] = useRecoilState(todosAtomFamily(id));

//   return (
//     <>
//       {todo.title}
//       {todo.description}
//       <br />
//     </>
//   )
// }



// export default App




















//! useRecoilStateLoadable, useRecoilValueLoadable (see atoms.js)

import './App.css'
import { RecoilRoot, useRecoilState, useRecoilStateLoadable, useRecoilValueLoadable } from 'recoil';
import { todosAtomFamily } from './atoms';
import { Suspense } from 'react';


function App() {
  return <RecoilRoot>

    {/*//~ this'll show only 1 loading instead of showing loading for every todo */}
    <Suspense fallback={"loading...."}> 
        <Todo id={1}/>
        <Todo id={2} />
    </Suspense>
  </RecoilRoot>
}


function Todo({id}) {

    //! useRecoilStateLoadable
    const [todo, setTodo] = useRecoilStateLoadable(todosAtomFamily(id));

    //! useRecoilValueLoadable
    // const todo = useRecoilValueLoadable(todosAtomFamily(id));

    //! here this todo is not just a bunch of todos, it has a few things
    //! {
    //?      contents -  it has the contents
    //?      state - this represents whether or not the get function has resolved(or returned a value for the first time), if we console todo.state the it'll show loading till the time the data being fetched, after completing, it'll show hasValue, if the fetch or any async operation failed then it'll return hasError.
    //!   }

    //! so we can so this
    if (todo.state === 'loading'){
        return <div>
            {/* something or loader, or a skeleton so that the user can know that something is loading */}
            loading....
        </div>
    } else if(todo.state === 'hasValue'){
        return(
            <>

              {/* now we'll make it contents instead of only todo.title */}
              {todo.contents.title}
              {todo.contents.description}
              <br />
            </>
        )
    }else if(todo.state === 'hasError'){
        return <div>
            Error while getting data from backend....
        </div>
    }
}



export default App



//! useRecoilStateLoadable is for getting both the value and the setter function
//! while useRecoilValueLoadable is for getting only the value




//* learn about suspense and error boundary for handling errors.