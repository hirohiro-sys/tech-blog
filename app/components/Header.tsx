import Link from "next/link";
import React from "react";
import { SiCoffeescript } from "react-icons/si";

const Header = () => {
  return (
    <header className="py-5 px-10 border-b flex justify-between items-center bg-gray-200 text-black">
      <div>
        <h1 className="text-3xl font-extrabold">
          <Link href="/" className="flex items-center">
            <SiCoffeescript className="mr-2"/>
            TechBlog
          </Link>
        </h1>
      </div>
    </header>
  );
};

export default Header;
