import {useState, useEffect} from 'react'




// this is our custom hook
export function usePostTitle(){

    //! making a state that consists of an empty object
    const [posts, setPosts] = useState({});


    //! function which will fetch the content from the link and convert it into json.
    //! then we'll pass it into setPosts to update the state variable
    async function getPosts(){
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        const json = await response.json();
        setPosts(json);
    }


    //! we are using useEffect because we want that whenever the component mounts the getPosts function gets called.
    //! (IMP) -> here we didn't wrote the getPosts func inside the useEffect because we had to make this function an asynchronous function which we can't pass directly as an argument inside the useEffect, we can't do - useEffect(async function()=>{})
    useEffect(()=>{
        getPosts();
    }, [])


    return posts.title;
}


//? for creating a hook we can also use a js file instead of a jsx file.









//! now we want to create the actual useFetch hook, which is a generic hook, which will take a url as an input and give us the data related to that url


// export function useFetch(url){

//     // for this we have to make a state variable, which stores the data
//     const [finalData, setFinalData] = useState({});
//     const [loading, setLoading] = useState(true);

//     // fetch the data from the url and convert it into a json file and updates the state variable
//     async function getDetails(){
//         setLoading(true);
//         const response = await fetch(url);
//         const json = await response.json();
//         setFinalData(json);
//         setLoading(false);
//     }



//     // a useEffect for whenever this component renders for the first time, we want to getDetails
//     // useEffect(() => {
//     //     getDetails();
//     // }, [])
//     //! 1.1) what if this url is changed, then it'll not render the component again, because with empty dependency array it only works for the first mount


//     //! 1.2) for this we have to pass the url in the dependency array, so that the effect also takes place when the url changes
//     useEffect(() => {
//         getDetails();
//     }, [url])


//     // returns the Data, exporting finalData as an object
//     return {
//         finalData, loading
//     }

//     // now in app.jsx
// }


//! this useFetch has some bugs that we need to solve, checks points









//? for the loading part, before that request call we'll set it to true, and after that request call we'll set it to false.













// Get the data after every 10s
export function useFetch(url, retryTime){

    const [finalData, setFinalData] = useState({});
    const [loading, setLoading] = useState(true);

    async function getDetails(){
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setFinalData(json);
        setLoading(false);
    }

    useEffect(() => {
        getDetails();
    }, [url])

    useEffect(() => {
        const reFetch = setInterval(getDetails, retryTime * 1000)


        // cleanup function
        return (
            ()=>{
                clearInterval(reFetch);
            }
        )
    })


    return {
        finalData, loading
    }

    // now in app.jsx
}