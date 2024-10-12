import { useState, useEffect } from "react";
import Navbar from "../component/layout/Navbar";
import ThemeSwitch from "../component/common/ThemeSwitch";
import Footer from "../component/layout/Footer";
import Loader from "../component/common/Loader";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="min-h-screen">
          <Navbar />
          <main>
            {children}
            <ThemeSwitch />
          </main>

          <footer>
            <Footer />
          </footer>
        </div>
      )}
    </div>
  );
};

export default DefaultLayout;
