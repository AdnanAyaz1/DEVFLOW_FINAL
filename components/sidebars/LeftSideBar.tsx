const LeftSideBar = () => {
  return (
    <div className="fixed left-0 h-screen max-h-screen max-w-66.5 border-2 bg-amber-300 p-4 max-xl:max-w-56 max-md:hidden lg:p-6">
      <div className="flex items-center gap-4 border-2 lg:p-4">
        {/* icon */}
        <div className="size-6 border-2"></div>
        <h3 className="line-clamp-1 text-lg max-lg:hidden">Ask a Question</h3>
      </div>
    </div>
  );
};

export default LeftSideBar;
