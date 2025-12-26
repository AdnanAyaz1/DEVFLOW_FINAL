import { sidebarLinks } from "@/constants";

import AuthButtons from "../button/AuthButtons/AuthButtons";
import SidebarLink from "../link/SidebarLink";

const LeftSideBar = () => {
  return (
    <div className="bg-light-100 dark:bg-dark-300/70 left-sidebar-drop-shadow custom-scrollbar fixed left-0 h-screen max-h-screen w-full overflow-y-auto p-4 max-xl:max-w-[10%] max-md:hidden lg:p-6 xl:max-w-[17%] dark:border-0 dark:shadow-none">
      <div className="flex h-full flex-1 flex-col gap-8">
        <div className="flex flex-col space-y-6 max-xl:items-center">
          {sidebarLinks.map((link, key) => {
            return <SidebarLink key={key} imageUrl={link.imgURL} route={link.route} label={link.label} />;
          })}
        </div>
        <AuthButtons />
      </div>
    </div>
  );
};

export default LeftSideBar;
