import Navbar from "@/components/navbar/Navbar";
import LeftSideBar from "@/components/sidebar/LeftSideBar";
import RightSidebar from "@/components/sidebar/RightSidebar";

const Homelayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      {/* Navbar */}
      <Navbar />
      <div className="flex pt-18 md:pt-25">
        {/* Left Sidebar */}
        <LeftSideBar />
        {/* Main Content */}
        <section className="mx-auto w-full md:pl-[12%] lg:max-w-[70%] lg:pr-[13%] lg:pl-0 xl:max-w-[60%] xl:pr-[5%]">
          <div className="bg-light-100 dark:bg-dark-100 min-h-screen py-6 max-sm:px-4">{children}</div>
        </section>
        {/* Right SideBar */}
        <RightSidebar />
      </div>
    </main>
  );
};

export default Homelayout;
