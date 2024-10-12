const Loader = () => {
  return (
    <div
      className={[
        "fixed top-0 left-0 w-full h-full flex justify-center items-center bg-white opacity-80 z-50",
      ].join(" ")}
    >
      <div className="loader-container">
        <div className="loader animate-spin rounded-full h-32 w-32 border-t-2 border-blue-400"></div>
        <div className="ripple"></div>
      </div>
    </div>
  );
};

export default Loader;
