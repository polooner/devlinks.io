import { useSession, signIn, signOut, getSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import AdminForm from "../../components/adminForm";

export default function Admin() {
  async function addResourceHandler(enteredResourceData) {
    const response = await fetch("/api/new-resource", {
      method: "POST",
      body: JSON.stringify(enteredResourceData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();

    console.log(data);
  }

  const { data: session } = useSession();

  if (session) {
    return (
      <main className="justify-center items-center text-center pt-10 h-screen flex flex-col bg-gradient-to-b from-blue-700 to-white">
        <>
          <AdminForm onAddResource={addResourceHandler} />
          <button
            button
            onClick={() => signOut()}
            className="p-2 font-bold m-4 bg-red-500 rounded-xl"
          >
            Sign Out
          </button>
        </>
      </main>
    );
  }

  return (
    <div className="flex flex-col text-center items-middle justify-center pt-20">
      <h1 className="text-4xl font-black bg-gradient-to-b text-transparent via-red-500 bg-clip-text from-white to-black">
        Oops! Unauthorized user.<br></br> Are you sure you need admin access?
        <br></br> Think twice.
      </h1>
      <h1>(you can't access it either way haha)</h1>
      <button
        className="p-2 font-bold m-4 bg-white rounded-xl"
        onClick={() => signIn()}
      >
        Sign In
      </button>
    </div>
  );
}
