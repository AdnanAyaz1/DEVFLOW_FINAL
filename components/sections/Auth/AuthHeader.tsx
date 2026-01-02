import Image from "next/image";

const AuthHeader = ({ heading, description }: { heading: string; description?: string }) => {
  return (
    <div className="flex-between mb-10">
      <div className="space-y-2.5">
        <h4 className="h4-bold">{heading}</h4>
        <p className="p2-regular dark:text-gray-light text-gray-dark">{description}</p>
      </div>
      <Image src={"/icons/logo.svg"} alt="Logo" height={50} width={50} />
    </div>
  );
};

export default AuthHeader;
