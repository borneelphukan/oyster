import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [selectedLink, setSelectedLink] = useState<string | null>(null);
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const [showBlogNav, setShowBlogNav] = useState<boolean>(false);
  const [showMobileBlogNav, setMobileBlogNav] = useState<boolean>(false);

  // Refs to detect clicks outside the dropdowns
  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  const handleLinkClick = (linkText: string) => {
    setSelectedLink(linkText);
  };

  useEffect(() => {
    setSelectedLink("Home");
  }, []);

  const toggleMobileMenu = () => {
    setShowMobileMenu((prevShowMobileMenu) => !prevShowMobileMenu);
  };

  const toggleBlogNav = () => {
    setMobileBlogNav((prevShowMobileBlogNav) => !prevShowMobileBlogNav);
  };

  // Close desktop dropdown when clicking outside
  useEffect(() => {
    const handleClickOutsideDesktop = (event: MouseEvent) => {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target as Node)
      ) {
        setShowBlogNav(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideDesktop);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideDesktop);
    };
  }, []);

  // Close mobile dropdown when clicking outside
  useEffect(() => {
    const handleClickOutsideMobile = (event: MouseEvent) => {
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target as Node)
      ) {
        setMobileBlogNav(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutsideMobile);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMobile);
    };
  }, []);

  return (
    <nav className="relative top-0 left-0 w-full bg-gray-950 py-1 px-6 flex flex-col">
      <div className="flex items-center mb-4 pt-2">
        <div className="flex items-center pt-2">
          <h2 className="text-left text-3xl font-semibold mb-2 text-white">
            <span className="text-cyan-500">O</span>YSTER.IO
          </h2>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="hidden lg:flex justify-center space-x-8 my-4">
        <Link
          to="/"
          className={`text-white hover:text-gray-300 uppercase ${
            selectedLink === "Home" ? "selected" : ""
          }`}
          onClick={() => handleLinkClick("Home")}
        >
          Home
        </Link>

        {/* Portfolio */}
        <Link
          to="/Portfolio"
          className={`text-white hover:text-gray-300 uppercase ${
            selectedLink === "Portfolios" ? "selected" : ""
          }`}
          onClick={() => handleLinkClick("Portfolios")}
        >
          Screens
        </Link>

        {/* Services */}
        <Link
          to="/Services"
          className={`text-white hover:text-gray-300 uppercase ${
            selectedLink === "Services" ? "selected" : ""
          }`}
          onClick={() => handleLinkClick("Services")}
        >
          Tools
        </Link>

        {/* More Dropdown */}
        <div className="relative" ref={desktopDropdownRef}>
          <button
            type="button"
            className={`text-white hover:text-gray-300 uppercase flex items-center focus:outline-none ${
              selectedLink === "Blogs" ? "selected" : ""
            }`}
            onClick={() => {
              handleLinkClick("Blogs");
              setShowBlogNav((prev) => !prev);
            }}
            aria-haspopup="true"
            aria-expanded={showBlogNav}
          >
            More
            <svg
              className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                showBlogNav ? "transform rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {showBlogNav && (
            <ul className="absolute left-0 mt-2 w-52 bg-slate-100 border rounded border-white shadow-lg">
              <li className="py-2 px-4 hover:bg-slate-200">
                <Link
                  className="text-black hover:text-blue-400 block"
                  to="/Blogs/Developer"
                  onClick={() => {
                    handleLinkClick("Blogs");
                    setShowBlogNav(false);
                  }}
                >
                  FAQ
                </Link>
              </li>
              <li className="py-2 px-4 hover:bg-slate-200">
                <Link
                  className="text-black hover:text-blue-400 block"
                  to="/Blogs/Widgets"
                  onClick={() => {
                    handleLinkClick("Blogs");
                    setShowBlogNav(false);
                  }}
                >
                  Widgets
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Mobile Menu (Dropdown) */}
      <div
        className={`lg:hidden flex flex-col items-center justify-center mt-1 space-y-2 transition-max-height duration-500 ease-in-out overflow-hidden ${
          showMobileMenu ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <Link
          to="/"
          className={`text-white hover:text-gray-300 text-center uppercase ${
            selectedLink === "Home" ? "selected" : ""
          }`}
          onClick={() => {
            handleLinkClick("Home");
            toggleMobileMenu();
          }}
        >
          Home
        </Link>

        {/* Portfolio */}
        <Link
          to="/Portfolio"
          className={`text-white hover:text-blue-400 text-center uppercase ${
            selectedLink === "Portfolio" ? "selected" : ""
          }`}
          onClick={() => {
            handleLinkClick("Portfolio");
            toggleMobileMenu();
          }}
        >
          Screens
        </Link>

        {/* Services */}
        <Link
          to="/Services"
          className={`text-white hover:text-blue-400 text-center uppercase ${
            selectedLink === "Services" ? "selected" : ""
          }`}
          onClick={() => {
            handleLinkClick("Services");
            toggleMobileMenu();
          }}
        >
          Tools
        </Link>

        {/* More Dropdown for Mobile */}
        <div className="relative w-full" ref={mobileDropdownRef}>
          <button
            type="button"
            className={`w-full text-white hover:text-blue-400 text-center uppercase flex items-center justify-center focus:outline-none ${
              selectedLink === "Blogs" ? "selected" : ""
            }`}
            onClick={() => {
              handleLinkClick("Blogs");
              toggleBlogNav();
            }}
            aria-haspopup="true"
            aria-expanded={showMobileBlogNav}
          >
            More
            <svg
              className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                showMobileBlogNav ? "transform rotate-180" : ""
              }`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {showMobileBlogNav && (
            <ul className="mt-2 text-sm px-5 bg-black w-full">
              <li className="py-2">
                <Link
                  to="/Blogs/Developer"
                  className="text-white hover:text-blue-400 block text-center"
                  onClick={() => {
                    toggleMobileMenu();
                    setMobileBlogNav(false);
                  }}
                >
                  FAQ
                </Link>
              </li>
              <li className="py-2">
                <Link
                  to="/Blogs/Widgets"
                  className="text-white hover:text-blue-400 block text-center"
                  onClick={() => {
                    toggleMobileMenu();
                    setMobileBlogNav(false);
                  }}
                >
                  Widgets
                </Link>
              </li>
            </ul>
          )}
        </div>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div className="lg:hidden flex items-center justify-end m-1">
        <button
          onClick={toggleMobileMenu}
          className="text-white hover:text-blue-400 focus:outline-none pb-2"
          aria-label="Toggle Mobile Menu"
          aria-expanded={showMobileMenu}
        >
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {showMobileMenu ? (
              // Close Icon
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              // Hamburger Icon
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            )}
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
