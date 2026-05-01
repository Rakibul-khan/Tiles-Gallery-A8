import { Button, Link } from "@heroui/react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
      <header className=" w-11/12 mx-auto flex h-16 items-center justify-between px-6 py-2">
        <div className="flex items-center gap-3">
          <p className="font-bold text-xl">Tiles Gallery</p>
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
        <div>
          <Button>Login</Button>
        </div>
      </header>
    </nav>
  );
};

export default Navbar;
