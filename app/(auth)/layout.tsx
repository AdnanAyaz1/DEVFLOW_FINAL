import Image from "next/image";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex-center min-h-screen">
      <Image
        src="/images/auth-dark.png"
        alt="Auth-Bg-Image"
        fill
        className="z-0 hidden aspect-square scale-105 dark:inline-block"
      />
      <Image src={"/images/auth-light.png"} alt="Auth-Bg-Light" fill className="scale-105 dark:hidden" />
      <div className="dark:bg-dark-100 bg-light-100 border-light-400 dark:border-dark-300 max-w-125.5 rounded-md relative z-10 w-full border p-8">
        {children}
      </div>
    </div>
  );
};

export default layout;
