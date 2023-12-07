"use client";

import navs from "@/lib/navs";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Leftsidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:block">
      {navs.map((nav, index) => {
        return (
          <Link
            href={nav.href}
            key={index}
            className={`flex items-center p-4 m-4 rounded hover:bg-slate-800 ${
              pathname === nav.href && "bg-red-500"
            }`}
          >
            <nav.icon className="mr-2" />
            <span>{nav.text}</span>
          </Link>
        );
      })}
    </aside>
  );
}
