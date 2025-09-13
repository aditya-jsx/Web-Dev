import Link from "next/link";

export default function Home(){
  return (
    <div className="h-screen w-full flex flex-col gap-4 items-center justify-center">
      <h1 className="text-6xl text-center">
        This is Todo App
      </h1>

      <div className="flex gap-4">
        <Link className="border-white rounded border-2 p-2" href="/signup">Sign up to todo app</Link>
        <Link className="border-white rounded border-2 p-2" href="/signin">Sign in to todo app</Link>
      </div>
    </div>
  )
}