const RightSidebar = () => {
  return (
    <main className="fixed right-0 h-screen w-full  max-xl:max-w-70 max-w-82.5 border-2 bg-blue-300 p-6 max-lg:hidden">
      <section className="h-[45vh] bg-orange-200">
        <h2 className="text-[20px]">Hot Network</h2>
        <div className="mt-6">
          <div className="flex gap-2.5">
            <div className="size-5 shrink-0 border-2"></div>
            <p className="border-2 text-sm">
              Would it be appropriate to point out an error in another paper during a referee report?
            </p>
          </div>
        </div>
      </section>
      <section className="h-[50vh] bg-red-200">
        <h2 className="text-[20px]">Popular Tags</h2>
        <div className="mb-6">
          <div className="flex-between">
            <div className="flex items-center gap-2 bg-purple-400 px-4 py-2">
              <div className="h-3.5 w-4 border-2"></div>
              <p className="text-[10px]">TAILWIND CSS</p>
            </div>
            <p className="text-xs">20152+</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default RightSidebar;
