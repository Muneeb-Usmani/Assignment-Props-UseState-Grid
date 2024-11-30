import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex text-white justify-between px-5 py-4 rounded-md bg-stone-800 border-opacity-90 border-4 border-b-yellow-500 font-semibold">
        <div>
          <span className="text-yellow-500 mr-3">  <Link href="https://github.com/Muneeb-Usmani" target="_blank">
              Github
            </Link></span>
          Class 11 Assignment
        </div>
        <div>
          <ul className="flex justify-between gap-5">
        <li>
          <Link href="#props" className="hover:text-yellow-400">Props
          </Link>
        </li>
        <li>
          <Link href="#usestate" className="hover:text-yellow-400">UseState
          </Link>
        </li>
        <li>
          <Link href="#grid" className="hover:text-yellow-400">Grid
          </Link>
        </li>
      </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
