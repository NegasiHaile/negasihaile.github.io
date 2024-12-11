"use client"; // Mark this as a Client Component

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation"; // Import usePathname to get the current route
import { IconBook, IconMicrophone, IconProjects } from "@/utils/icons";
import IconHome from "@/utils/icons/IconHome";

const NavBar = () => {
  const pathname = usePathname(); // Use usePathname to get the current route
  const nav_items = [
    {
      id: 0,
      title: "Projects",
      route: "/projects",
      icon: <IconProjects />,
    },
    {
      id: 1,
      title: "Publications",
      route: "/publications",
      icon: <IconBook />,
    },
    {
      id: 2,
      title: "Blogs",
      route: "/blogs",
      icon: <IconMicrophone />,
    },
  ];

  return (
    <nav className="block justify-center md:flex md:justify-between items-center space-y-3 px-1 py-3 border-b mb-5">
      <div className="flex w-full justify-center md:justify-start">
        <div className="flex w-fit items-center space-x-1">
          <IconHome className="size-7" />
          <Link href={"/"} about="negasihaile" className="font-bold text-3xl">
            Negasi Haile A.
          </Link>
        </div>
      </div>

      <div className="flex justify-center items-center text-sm">
        {nav_items.map((item, i) => {
          // Determine if the link is active by checking if the route matches the current path
          const isActive = pathname === item.route; // Check if the current path matches the route

          return (
            <Link
              key={i}
              href={item.route}
              about="negasihaile"
              className={`flex items-center space-x-1 px-3 py-1 rounded-sm transition-all opacity-65 ${
                isActive
                  ? "bg-slate-200 hover:opacity-70 dark:bg-slate-800/70 opacity-95" // Active link styling
                  : "hover:opacity-35"
              }`}
            >
              {item.icon ?? null}
              <span>{item.title}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
