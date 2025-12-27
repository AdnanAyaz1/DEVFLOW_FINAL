import AuthButtons from "@/sections/RootLayout/AuthButtons";
import NavLinks from "@/sections/RootLayout/NavLinks";

const LeftSideBar = () => {
  return (
    <div className="bg-light-100 dark:bg-dark-300/70 left-sidebar-drop-shadow custom-scrollbar fixed left-0 h-[calc(100vh-100px)] w-full overflow-y-auto p-4 max-xl:max-w-[10%] max-md:hidden lg:p-6 xl:max-w-[17%] dark:border-0 dark:shadow-none">
      <div className="space-y-8">
        <NavLinks />
        <AuthButtons />
      </div>
    </div>
  );
};

export default LeftSideBar;
