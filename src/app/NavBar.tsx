"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import FullPageNav from "./MobileNav";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navList = [
    {
      name: "Index",
      route: "/",
    },
    {
      name: "Who Me",
      route: "about",
    },
    {
      name: "What I Did",
      route: "projects",
    },
    {
      name: "Reach Me",
      route: "contact",
    },
  ];

  return (
    <div>
      {/* Navigation for big displays */}
      <div className="hidden md:flex h-20 w-full items-center justify-center mb-10">
        <div className="flex flex-row gap-10 md:gap-6 sm:gap-3 p-4 md:p-2 sm:p-1 border-black bg-secondaryDark rounded-3xl text-white shadow-primaryDark shadow-xl">
          {navList.map((nav) => (
            <li
              key={nav.name}
              className="list-none hover:text-complementary text-lg md:text-base sm:text-base"
            >
              <Link
                href={nav.route}
                className="hover:bg-hoverBg px-3 py-1 rounded-md"
              >
                {nav.name}
              </Link>
            </li>
          ))}
        </div>
      </div>

      {/* Navigation for mobile displays */}
      <div className="md:hidden flex justify-between items-center p-4">
        <Image
          src="/menuIcon.png"
          alt="Menu Icon"
          width={40}
          height={40}
          className="cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
        {isOpen && (
          <FullPageNav navList={navList} setIsOpen={setIsOpen} />
        )}
      </div>
    </div>
  );
};

export default NavBar;
