import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="text-center justify-center space-x-[10%] pt-6 font-black text-md">
      <Link
        href="/about"
        className="hover:text-zinc-400 duration-300 hover:shadow-2xl"
      >
        About
      </Link>
      <Link
        href="/"
        className="hover:text-zinc-400 duration-300 hover:shadow-2xl"
      >
        Main
      </Link>
      <Link
        href="/contact"
        className="hover:text-zinc-400 duration-300 hover:shadow-2xl"
      >
        Contact
      </Link>
    </nav>
  );
}
