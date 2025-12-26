import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image src={"/icons/logo.svg"} alt="logo" width={24} height={24} />
      <h2 className="font-space-grotesk text-2xl font-semibold">
        Dev<span className="text-primary-100">OverFlow</span>
      </h2>
    </div>
  );
};

export default Logo;
