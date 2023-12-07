import { Home, Search, User, Coffee, Icon, Bell } from "react-feather";

type nav = {
  href: string;
  icon: Icon;
  text: string;
};

const navs: nav[] = [
  {
    href: "/home",
    icon: Home,
    text: "Home",
  },
  {
    href: "/activity",
    icon: Bell,
    text: "Activity",
  },
  {
    href: "/search",
    icon: Search,
    text: "Search",
  },
  {
    href: "/profile",
    icon: User,
    text: "Profile",
  },
  {
    href: "/communities",
    icon: Coffee,
    text: "Communities",
  },
];

export default navs;
