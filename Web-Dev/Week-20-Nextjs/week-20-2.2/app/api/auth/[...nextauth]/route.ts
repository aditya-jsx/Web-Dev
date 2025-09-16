import NextAuth from "next-auth"

// const handler = NextAuth({
  
// })

// export { handler as GET, handler as POST }

//! 1) here the NextAuth function that we are calling, returns another function that is stored in the handler, that we are exporting as get and post

//! 2) now if we go to this route, without passing something inside the NextAuth function then it'll tell us the error
//! but it doesn't matter which endpoint we are hitting it'll tell the same error but not on base url /api/auth


//! 3) these all requests are handled by the next-auth library, any request that comes on this route will be handled by the next-auth library









import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";



//! 4) Now how to add logic options, for that we have to give the providers that we want to use in an array, if we want to use email and pass, or 3 credentials login or two or even one, 
//! then we'll use Credential Providers.

const handler = NextAuth({
  providers: [
    CredentialsProvider({
        // then we have to give it a name
        name: "email",

        // then we have to give credentials, what input field we want from them
        credentials: {
            username: { label: "Username", type: "text", placeholder: "Doland" },
            password: { label: "Password", type: "password" }
            // declaring type password in the password credential will make sure that the password is hidden
        },

        // this is, when the user give us the credentials then we hit the db, check if the credentials are correct, if they are correct then we should return the user, otherwise we should return null
        //! this is where we have to write the logic for whether user is present or not, or the password is correct or not
        async authorize(credentials, req) {
            const username = credentials?.username;
            const password = credentials?.password;

            // db request, to check that this username and password are correct
            const user = {
                name: "Aditya",
                id: "1",
                username: "aadi_3432"
            }
            // if they are correct then return the user, otherwise return null
            if(user){
                return user;
            }else{
                return null;
            }
            // this is how we do credential provider based login in NextAuth
            // now we'll see that by going on this route, we have our login setup complete with frontend also
            // after a successful login it'll redirect us back to the homepage
            // if we return null or give wrong email or pass, it'll show an error
        },
    }),



    //! Now in the last one we had to write some code, but for others like google, github etc we just have to add the providers
    GoogleProvider({
    clientId: "Anything",
    clientSecret: "Something"
    }),


    GitHubProvider({
    clientId: "Something",
    clientSecret: "Anything"
    })

    //! now it'll have the google and github signin as well 
    //! by doing these we can add the providers but to make these work we have to provide the clientId and the clientSecret 


    ],
    secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }


//! To kow how can we handle the login anf logout from the home page, go to root's page.tsx