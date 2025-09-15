//! Notes - https://petal-estimate-4e9.notion.site/NextJS-Part-3-1637dfd107358090800ff3aaed7a5b3c

export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <h1 className="text-6xl">
        Hellooo!
      </h1>
    </div>
  );
}


//! Route Groups

//! first let's start with the types of routing that Nextjs allows
//! - (), the route folder with the parenthesis will be ignored by router, and the inside route will be used
//! for example - suppose we have an auth folder like this (auth)/signup and signin
//! then for accessing the signin and signup routes we just have to visit the /signin and /signup route, as the router will ignore the (auth) folder

//! the benefit of these parenthesis folder is that it lets us structure the application and can also be used if we want to use a layout for the inside pages








//! slug - unique name for a specific page




//! Dynamic Routes

//! -> A folder of file in the form [slug] defines a dynamic parameter in the route example - (/blog/[slug] might match /blog/hello-world or /blog/another-post), Inside our components we can access the parameters via params.slug

//! To understand this lets create an assignment, where if the user hits the route http://localhost:3000/posts/1 then they should see the information on post/1 of the api and so on

//! api = https://jsonplaceholder.typicode.com/todos/1

//! Go to /todos/[todoId]/page.tsx















//! [...] Catch-All Segment

//! -> This is generally for much longer routes as some projects can have a nested folder structure whose route can be very long and we have to take care of that routes as well, for that we use this catch-all segment

//! -> lets take an example of the 100x website which has a nested folder structure, so the routes for specific courses can be handled by the dynamic routing, but for the nested folder structure inside the courses has to be handled by the catch-all segment, which means whatever comes after this route will be handled by the catch-all segment's page.tsx

//! Go to /todos/[todoId]/page.tsx




//! Note :-
//! So what if we have to same folder structures like /(auth)/user/page.tsx AND /(marketing)/user/page.tsx, now if we hit the user route, which page should get rendered???
//! the answer to this question is that nextjs will throw an error that you can't have two parallel pages


















//! Catch all [[...slug]]

//! -> this is similar to the previous one, the problem with the previous one was that it'll not handle to todos routes but it'll all the routes after it
//! using this double brackets catch all like this [[...todoId]], the page.tsx of [[...todoId]] will start to handle the todos route as well

//! so either we can create a page.tsx inside the todos route or we can use [[...todoId]]




























//! Static Site Generation

//! this means that it is created only once it'll never be changed
//! so how it is useful? 

//! let's suppose we have a file which is not synamic and does not require any SSR so we can serve these files directly as static sites by converting them into html and then serving them to everyone.

//! so how we do it?

//! Nextjs is smart to tell which files can be made static and which can't be, so it automatically converts those files into static sites during the build and then it serves those files directly to everyone.

//! the dynamic pages will be not made into static sites by Nextjs automatically, but we can force them to be static sites.















//! Note:- 

//! We know that the server side components are rendered on the server, while the client side components are also renderend first on the server(converted into html) and then they are hydrated to the client, which means when the client side's component html reaches the client, React's JS bundle "hydrates" static html by attaching event listeners and interactive behaviours to make it fully functional React Application.

//! it is much optimal to use server side components




//! Hydration :-

//! Hydration is the process by which a client-side JavaScript framework (such as React) takes over an already rendered HTML page and makes it interactive.
//! there are also some "hydration errors" that we get when the html rendered on the server doesn't match with the html when it runs on the client

//! A common example of this is using a Date function as on the server when it runs, it'll show a different time and when it runs on the client again it'll show a different time, which'll make both the htmls appear different.

//! first the normal html comes and then after a short period of time, the interactive elements gets attached to it.
//! first the normal html comes then after some time the page.js will run and check whether the server side rendered is same as the client side rendered, if yes then it'll attack the interactive features, if no then it'll throw a hydration error

//! So client side components are also server side rendered, but client side hydrated.