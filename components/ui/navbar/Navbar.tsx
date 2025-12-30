import { Menu } from "lucide-react";

import UserAvatar from "@/components/avatar/UserAvatar";
import { ToggleTheme } from "@/components/dropdown/Theme";
import GlobalSearch from "@/components/search/GlobalSearch";

import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="flex-between bg-light-100 dark:bg-dark-300/70 nav-drop-shadow fixed z-50 h-25 w-full gap-8 p-5.5 backdrop-blur-xl max-sm:p-4 dark:border-0 dark:shadow-none">
      {/* Logo */}
      <Logo />
      {/* Global Search */}
      <GlobalSearch />
      <div className="flex items-center gap-4.5 max-sm:gap-3">
        {/* Theme Toggle */}
        <ToggleTheme />
        {/* User Avatar */}
        <UserAvatar />
        <Menu className="cursor-pointer md:hidden dark:text-white" strokeWidth={2} size={25} />
      </div>
    </nav>
  );
};

export default Navbar;
