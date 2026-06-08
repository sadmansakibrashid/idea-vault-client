"use client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
const Navbar = () => {
  return (
  <div className="bg-white py-3">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
      <ul className="flex gap-3">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/ideas"}>Ideas</Link>
        </li>
        <li>
          <Link href={"/add-idea"}>Add Idea</Link>
        </li>

        <li>
          <Link href={"/My-Ideas"}>My Ideas</Link>
        </li>
        <li>
          <Link href={"/My-Interactions"}>My Interactions</Link>
        </li>
      </ul>

    

      <ul className="flex items-center gap-3">
        <li>
          <Link href={"/profile"}>Profile</Link>
        </li>
     <li>
              <Link href={"/login"}>Login</Link>
            </li>
            <li>
              <Link href={"/Register"}>Sign Up</Link>
            </li>
        
      </ul>
    </nav>
  </div>
  );
};

export default Navbar;