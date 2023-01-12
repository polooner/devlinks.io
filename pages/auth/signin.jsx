import React, { useRef } from "react";
import { signIn } from "next-auth/react";

export default function Signin() {
  const loginRef = useRef();
  const passwordRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const login = loginRef.current.value;
    const password = passwordRef.current.value;
  };

  return (
    <div className="h-screen bg-black text-white justify-center items-center text-center">
      <form
        onSubmit={submitHandler}
        className="flex flex-col items-center space-y-6 pt-[30%] md:pt-[10%]"
      >
        <h1 className="text-4xl font-black mb-10">
          Sign in to admin dashboard:
        </h1>
        <label className="text-lg font-bold">Login</label>
        <input
          type="text"
          ref={loginRef}
          className="w-[80%] focus:shadow-lg duration-300 focus:shadow-zinc-400 outline-none md:w-[40%] h-8 text-black rounded-lg text-center px-4"
        ></input>
        <label className="text-lg font-bold">Password</label>
        <input
          type="text"
          ref={passwordRef}
          className="w-[80%] focus:shadow-lg duration-300 focus:shadow-zinc-400 outline-none md:w-[40%] h-8 text-black rounded-lg text-center px-4"
        ></input>
        <button
          onClick={() => {
            signIn();
          }}
          type="submit"
          className="bg-sky-300 text-white p-2 rounded-lg font-bold hover:bg-blue-700 duration-300"
        >
          Sign in
        </button>
      </form>
    </div>
  );
}
