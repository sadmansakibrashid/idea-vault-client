"use client";

import { authClient } from "@/lib/auth-client";
import {
  Avatar,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="bg-white py-3 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Mobile Menu */}
        <div className="lg:hidden">
          <Dropdown>
            <DropdownTrigger>
              <Button isIconOnly variant="light">
                ☰
              </Button>
            </DropdownTrigger>

            <DropdownMenu aria-label="Navigation">
              <DropdownItem key="home" as={Link} href="/">
                Home
              </DropdownItem>

              <DropdownItem key="ideas" as={Link} href="/ideas">
                Ideas
              </DropdownItem>

              <DropdownItem key="add-idea" as={Link} href="/add-idea">
                Add Idea
              </DropdownItem>

              <DropdownItem key="my-ideas" as={Link} href="/my-ideas">
                My Ideas
              </DropdownItem>

              <DropdownItem
                key="my-interactions"
                as={Link}
                href="/my-interactions"
              >
                My Interactions
              </DropdownItem>

              {user ? (
                <DropdownItem
                  key="logout"
                  color="danger"
                  onPress={handleSignOut}
                >
                  Logout
                </DropdownItem>
              ) : (
                <>
                  <DropdownItem key="login" as={Link} href="/login">
                    Login
                  </DropdownItem>

                  <DropdownItem key="signup" as={Link} href="/signup">
                    Sign Up
                  </DropdownItem>
                </>
              )}
            </DropdownMenu>
          </Dropdown>
        </div>

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          IdeaVault
        </Link>


        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center justify-between flex-1 ml-10">
          <ul className="flex gap-5">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li>
              <Link href="/ideas">Ideas</Link>
            </li>

            <li>
              <Link href="/add-idea">Add Idea</Link>
            </li>

            <li>
              <Link href="/my-ideas">My Ideas</Link>
            </li>

            <li>
              <Link href="/my-interactions">
                My Interactions
              </Link>
            </li>
          </ul>


          <ul className="flex items-center gap-4">
            {user ? (
              <>
                <li>
                  <Link href="/profile">
                    <Avatar>
                      <Avatar.Image
                        referrerPolicy="no-referrer"
                        alt={user.name}
                        src={user.image ?? ""}
                      />
                      <Avatar.Fallback>
                        {user.name?.charAt(0)}
                      </Avatar.Fallback>
                    </Avatar>
                  </Link>
                </li>

                <li>
                  <Button
                    size="sm"
                    onClick={handleSignOut}
                    color="danger"
                    className="rounded-none"
                  >
                    Logout
                  </Button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link href="/login">
                    Login
                  </Link>
                </li>

                <li>
                  <Link href="/signup">
                    Sign Up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;