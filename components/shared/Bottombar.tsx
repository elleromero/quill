import navs from "@/lib/navs";
import Link from "next/link";

export default function Bottombar() {
  return (
    <footer className="bg-green-500 flex md:hidden">
      {navs.map((nav, index) => {
        return (
          <Link
            href={nav.href}
            key={index}
            className="flex flex-col items-center flex-1 p-2 hover:bg-slate-800"
          >
            <nav.icon className="mr-2" />
            <span>
              {nav.text.length > 8 ? nav.text.slice(0, 8) + "..." : nav.text}
            </span>
          </Link>
        );
      })}
    </footer>
  );
}
