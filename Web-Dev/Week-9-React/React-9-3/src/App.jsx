// import { useState } from "react";
// import Posts from "./Posts";
// import icon from "../src/icon.png"

// function App() {
//   const [posts, setPosts] = useState([]);

//   const postComponents = posts.map((post) =>
//     <Posts
//       name={post.name}
//       subtitle={post.subtitle}
//       time={post.time}
//       image={post.image}
//       description={post.description}
//     />
//   );

//   function addPost(){
//     setPosts([...posts, {
//       name: "Aditya",
//       subtitle: "Web Developer",
//       time: "2m ago",
//       image: icon,
//       description: "learning react"
//     }])
//   }

//   return <>
//     <div style={{height: "100vh", backgroundColor: "gray"}}>
//       <button onClick={addPost}>Add Post</button>
//       <div style={{display: "flex", justifyContent: "center"}}>
//         <div>
//           {postComponents}
//         </div>
//       </div>
//     </div>
//   </>;
// }

// export default App;

// import {useState, useEffect} from 'react'
// import { useState } from "react";
// import icon from "../src/icon.png";
// import { useEffect } from "react";

// function App() {
//   const [count, setCount] = useState(1);

//   // // this is done by just incrementing the count on button click
//   // function increment(){
//   //   setCount(count + 1)
//   // }

//   // same thing should happen automatically after every 2sec.
//   useEffect(function () {
//     let noti = setInterval(function () {

//       // setCount(function (c) {
//       //   return c + 1;
//       // });

//       // easier syntax
//       setCount(c => c + 1)

//     }, 2000);

//     return function () {
//       clearInterval(noti);
//     };
//   }, []);

//   return (
//     <>
//       <span
//         style={{
//           backgroundColor: "red",
//           marginLeft: 40,
//           borderRadius: 10,
//           position: "absolute",
//         }}
//       >
//         {count}
//       </span>
//       <div style={{ paddingTop: 10 }}>
//         <img src={icon} />
//       </div>
//       {/* <button onClick={increment}>Increase Count</button> */}

//       {/* using useEffect */}
//       <button>Increase Count</button>
//     </>
//   );
// }

// export default App;











// import React from "react";
// import { useState, useEffect } from "react";

// function App() {
//   const [currentTab, setCurrentTab] = useState("feed");


//   // this is what happens in linkedin when we click on any tab
//   useEffect(function(){
//     // send a backend request to get the data for the current tab
//     // fetch(), we use this to send a request to the backend, it returns a promise.

    
//     console.log("send a backend request to get the data for the current tab" + currentTab)
//   }, [currentTab])

//   return (
//     <>
//       <button onClick={function(){
//       setCurrentTab("Home");
//       }} style={{ color: currentTab == "Home" ? "red" : "black" }}>
//         Home
//       </button>
//       <button onClick={function(){
//       setCurrentTab("notifications");
//       }} style={{ color: currentTab == "notifications" ? "red" : "black" }}>
//         Notifiations
//       </button>
//       <button onClick={function(){
//       setCurrentTab("jobs");
//       }} style={{ color: currentTab == "jobs" ? "red" : "black" }}>
//         Jobs
//       </button>
//       <button onClick={function(){
//       setCurrentTab("settings");
//       }} style={{ color: currentTab == "settings" ? "red" : "black" }}>
//         Settings
//       </button>
//     </>
//   );
// }

// export default App;













// making a todo app witb api call


// import React from "react";
// import { useState, useEffect } from "react";

// function App() {
//   const [currentTab, setCurrentTab] = useState("feed");
//   const [tabData, setTabData] = useState({});
//   const [loading, setLoading] = useState(true);


//   // this is what happens in linkedin when we click on any tab
//   useEffect(function(){
//     // send a backend request to get the data for the current tab
//     // fetch(), we use this to send a request to the backend, it returns a promise.


//     // this is how we show loading screen
//     setLoading(true);
//     fetch("https://jsonplaceholder.typicode.com/todos/" + currentTab).then(
//       async res => {
//         const json = await res.json();
//         setTabData(json);
//         setLoading(false);
//       });
    
//   }, [currentTab])

//   return (
//     <>
//       <button onClick={function(){
//       setCurrentTab("Home");
//       }} style={{ color: currentTab == "Home" ? "red" : "black" }}>
//         Home
//       </button>
//       <button onClick={function(){
//       setCurrentTab("notifications");
//       }} style={{ color: currentTab == "notifications" ? "red" : "black" }}>
//         Notifiations
//       </button>
//       <button onClick={function(){
//       setCurrentTab("jobs");
//       }} style={{ color: currentTab == "jobs" ? "red" : "black" }}>
//         Jobs
//       </button>
//       <button onClick={function(){
//       setCurrentTab("settings");
//       }} style={{ color: currentTab == "settings" ? "red" : "black" }}>
//         Settings
//       </button>

//       <br></br>
//       {loading ? "Loading..." : tabData.title}
//     </>
//   );
// }

// export default App;

















// cleanup

import {useState, useEffect} from 'react'

function App(){

  const [seconds, setSeconds] = useState(0);

  useEffect(
    function(){
      let clock = setInterval(
        function(){
          return setSeconds(s => s + 1)
        }
      , 1000)


      // removes every previous interval
      return function(){
        clearInterval(clock)
      }
    }
  , [])

  
  return(
    <>
      {seconds}
    </>
  )
    
}


export default App