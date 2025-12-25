import { Menu, Search } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex-between fixed w-full gap-8 border-2 border-black p-[22px] max-sm:p-4">
      {/* Logo */}
      <div className="flex items-center gap-2 border-2">
        {/* Image */}
        <div className="size-8 rounded-full border-2"></div>
        {/* Logo Text */}
        <div className="h-8 w-[150px] border-2 max-sm:hidden"></div>
      </div>
      {/* Global Search */}
      <div className="flex w-[600px] items-center gap-4 border-2 p-4 max-sm:hidden">
        <Search className="size-6" />
        <input
          type="text"
          placeholder="Search for anything, questions, tags, users..."
          className="w-full bg-transparent outline-none"
        />
      </div>
      <div className="flex items-center gap-[18px] border-2 max-sm:gap-3">
        {/* Theme Toggle */}
        <div className="size-[30px] border-2"></div>
        {/* User Avatar */}
        <div className="size-[42px] rounded-full border-2"></div>
        <Menu className="md:hidden dark:text-white" strokeWidth={2} size={25} />
      </div>
    </nav>
  );
};

export default Navbar;
