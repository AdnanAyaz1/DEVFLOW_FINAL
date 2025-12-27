const loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-lg">
      <div className="loader"></div>
    </div>
  );
};

export default loading;
