"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import React from "react";
const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

    const handleSignOut = async () => {
    await authClient.signOut();
  };

  
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
          <Link href={"/my-ideas"}>My Ideas</Link>
        </li>
        <li>
          <Link href={"/My-Interactions"}>My Interactions</Link>
        </li>
      </ul>
    <ul className="flex items-center gap-3">
        <li>
          <Link href={"/profile"}>Profile</Link>
        </li>
           {user ? (
          <>
            <li>
              <Avatar>
                <Avatar.Image referrerPolicy="no-referrer" alt="John Doe" src={user?.image} />
                <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
            </li>
            <li>
              <Button size="sm" onClick={handleSignOut} variant="danger" className={"rounded-none"}>
                Logout
              </Button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href={"/login"}>Login</Link>
            </li>
            <li>
              <Link href={"/signup"}>Sign Up</Link>
            </li>
          </>
        )}
        
      </ul>
    </nav>
  </div>
  );
};

export default Navbar;