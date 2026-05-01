"use client";
import { authClient, useSession } from "@/lib/auth-client";
import { Button, Link } from "@heroui/react";
import { Avatar } from "@heroui/react";
import { signOut } from "better-auth/api";
import { redirect } from "next/navigation";

const Navbar = () => {
  const { data, isPending } = useSession();
  // console.log(data?.user);
  const handleSignOut = async () => {
    await authClient.signOut();
  };
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className=" w-11/12 mx-auto flex h-16 items-center justify-between px-6 py-2">
        <div className="flex items-center gap-3">
          <p
            onClick={() => redirect("/")}
            className="font-bold text-xl cursor-pointer"
          >
            Tiles Gallery
          </p>
        </div>
        <ul className="flex items-center gap-4">
          <li>
            <Link className="text-lg" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="text-lg" href="/all-tiles">
              All Tiles
            </Link>
          </li>
          <li>
            <Link className="text-lg" href="/profile">
              Profile
            </Link>
          </li>
        </ul>
        {data?.user ? (
          <div className="flex gap-2 items-center">
            <Avatar>
              <Avatar.Image alt="John Doe" src={data?.user.image} />
              <Avatar.Fallback>{data?.user.name[0]}</Avatar.Fallback>
            </Avatar>
            <Button onClick={handleSignOut}>LogOut</Button>
          </div>
        ) : (
          <div>
            <Link href="/auth/signin">
              <Button>Login</Button>
            </Link>
          </div>
        )}
      </header>
    </nav>
  );
};

export default Navbar;
