"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface SidebarLinkProps {
  imageUrl: string;
  route: string;
  label: string;
}

const SidebarLink = ({ imageUrl, route, label }: SidebarLinkProps) => {
  const path = usePathname();
  const isActive = path.includes(route);
  return (
    <Link
      href={route}
      className={`flex items-center gap-4 rounded-lg p-2 lg:p-4 ${isActive ? "gradient-primary" : ""}`}
    >
      <Image src={imageUrl} alt="label-route" width={24} height={24} className={`${isActive ? "" : "invert-colors"}`} />
      <h3 className={`p1-semibold line-clamp-1 max-xl:hidden ${isActive ? "text-white" : ""}`}>{label}</h3>
    </Link>
  );
};

export default SidebarLink;
