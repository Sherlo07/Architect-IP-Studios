import React, { useState } from "react";

import { MdOutlineMenu } from "react-icons/md";
import buildingicon from "../assets/buildingicon.png";
import { Link } from "@tanstack/react-router";

const Navbar = () => {
  const [menubtn, setMenuBtn] = useState(false);

  const nav = [
    { id: 1, name: "", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Projects", path: "/projects" },
    { id: 4, name: "Gallery", path: "/gallery" },
    { id: 5, name: "Contact", path: "/contact" },
  ];

  return (
    <div className="  flex justify-between bg-transparent shadow-md p-2 sm:w-full">
      {/* Logo */}
      <a href="/">
        <img
          src={buildingicon}
          className="h-8  pl-15 max-lg:p-2 max-lg:h-12 "
          alt="LinkedIn"
        />
      </a>

      {/* Desktop Nav */}
      <ul className="flex text-semibold gap-9 pr-14 max-lg:hidden">
        {nav.map((item, index) => (
          <Link key={item.id} to={item.path}>
            <li
              key={index}
              className="text-semibold cursor-pointer hover:text-red-500 transition duration-300"
            >
              {item.name}
            </li>
          </Link>
        ))}
      </ul>

      {/* Mobile Menu Button */}

      <button
        onClick={() => setMenuBtn(!menubtn)}
        className="lg:hidden text-2xl"
      >
        <MdOutlineMenu />
      </button>

      {/* Mobile Nav - Conditionally Rendered */}
      {menubtn && (
        <ul
          className="absolute top-12 right-2
         bg-white w-40 shadow-md rounded-lg p-4 space-y-3"
        >
          {nav.map((item) => (
            <Link key={item.id} to={item.path}>
              {" "}
              <li
                key={item.id}
                className="cursor-pointer text-gray-800 hover:text-red-500 transition duration-300"
              >
                {item.name}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
