import { PrismaClient } from '@prisma/client'


//! 1) the logic here is we created a funciton which returns a new instance of the prisma client
// const prismaClientSingleton = () => {
//   return new PrismaClient()
// }

//! if we remove this typescrit will complain
// declare global {
//   var prisma: undefined | ReturnType<typeof prismaClientSingleton>
// }


// @ts-ignore
const prisma = globalThis.prisma ?? PrismaClient()

//! 2) then we want to export this prisma variable which'll either be a window.prisma or call the prismaCilentSingleton function
//! 3) window refer to the gloabal object, where we can store global variables.
//! 4) infact we don't even need the function written below step 1 to get an instance of prisma, we can just call PrismaClient Directly.

// @ts-ignore
if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma
//! this line on running the first time will set globalThis.prisma to a new instance of prisma from line 16.


export default prisma



//! 5) now what will happen is this, in the file where we need the prisma client, we'll import that client from here, and then this file will run again and again, the first time it runs it'll create a new prisma instance, from the sencond time it'll set to globalThis.prisma, so new instances will not be create again and again.

//! 6) go back to signup's page.tsx to see the import