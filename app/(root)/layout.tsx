import Navbar from "@/components/navbar/Navbar";
import LeftSideBar from "@/components/sidebars/LeftSideBar";
import RightSidebar from "@/components/sidebars/RightSidebar";

const Homelayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      {/* Navbar */}
      <Navbar />
      <div className="flex pt-19.75 md:pt-26.5">
        {/* Left Sidebar */}
        <LeftSideBar />
        {/* Main Content */}
        <section className="mx-auto w-full max-w-3xl lg:pr-16">
          <div className="min-h-screen bg-orange-400 py-6 max-sm:px-4">{children}</div>
        </section>
        {/* Right SideBar */}
        <RightSidebar />
      </div>
    </main>
  );
};

export default Homelayout;
