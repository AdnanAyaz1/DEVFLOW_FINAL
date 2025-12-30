import SidebarLink from "@/components/navigation/SidebarLink";
import { sidebarLinks } from "@/constants/NavLinks";

const NavLinks = () => {
  return (
    <div className="flex flex-col space-y-6 max-xl:items-center">
      {sidebarLinks.map((link, key) => {
        return <SidebarLink key={key} imageUrl={link.imgURL} route={link.route} label={link.label} />;
      })}
    </div>
  );
};

export default NavLinks;
