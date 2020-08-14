import React from "react";
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav className="flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0 flex flex-row">
       
        <div className="ml-2">
          <Link
            to="/"
            className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold"
          >
            Tailwind Snippets
          </Link>
          <br />
          <span className="text-xs text-grey-dark">Build UI faster</span>
        </div>
      </div>

      <div className="sm:mb-0 self-center mr-10">
        <Link
          to="/layouts"
          className="text-md no-underline text-black hover:text-gray-700 ml-2 px-1"
        >
          Layouts
        </Link>
        <Link
          to="/components"
          className="text-md no-underline text-grey-darker hover:text-gray-700 ml-2 px-1"
        >
          Components
        </Link>
        <Link
          to="/about"
          className="text-md no-underline text-grey-darker hover:text-gray-700 ml-2 px-1"
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
