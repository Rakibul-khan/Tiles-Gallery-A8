"use client";
import { authClient, useSession } from "@/lib/auth-client";
import { Button, Link } from "@heroui/react";
import { Avatar } from "@heroui/react";
import { signOut } from "better-auth/api";
import { redirect, usePathname } from "next/navigation";

const Navbar = () => {
  const { data, isPending } = useSession();
  const pathname = usePathname();
  // console.log(data?.user);
  const handleSignOut = async () => {
    await authClient.signOut();
    redirect("/");
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
            <Link
              className={` text-lg text-gray-600 no-underline ${pathname === "/" ? "underline text-gray-800" : "text-gray-800"}`}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`text-lg no-underline text-gray-600 ${pathname === "/all-tiles" ? "underline text-gray-800" : "text-gray-800"}`}
              href="/all-tiles"
            >
              All Tiles
            </Link>
          </li>
          <li>
            <Link
              className={`text-lg no-underline text-gray-600 ${pathname === "/my-profile" ? "underline text-gray-800" : "text-gray-800"}`}
              href="/my-profile"
            >
              My Profile
            </Link>
          </li>
        </ul>
        {data?.user ? (
          <div className="flex gap-2 items-center">
            <Avatar>
              <Avatar.Image alt={data?.user.name} src={data?.user.image} />
              <Avatar.Fallback>{data?.user.name[0]}</Avatar.Fallback>
            </Avatar>
            <Button className="bg-red-500 no-underline" onClick={handleSignOut}>
              LogOut
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-3">
            <Link
              className="no-underline flex gap-2 items-center"
              href="/auth/signin"
            >
              <Button>Login</Button>
            </Link>
            <Link className="no-underline" href="/auth/signup">
              {" "}
              <Button>Sign Up</Button>
            </Link>
          </div>
        )}
      </header>
    </nav>
  );
};

export default Navbar;
