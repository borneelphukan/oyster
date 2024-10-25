import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Transition,
} from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom"; // Ensure you have react-router-dom installed
import { Fragment, useState } from "react";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const navigation = [
  { name: "Home", href: "/" },
  { name: "Screens", href: "/screens" },
  { name: "Tools", href: "/tools" },
  // "Widgets" has been moved to a dropdown under "More"
];

const userNavigation = [
  { name: "Your Profile", href: "/profile" },
  { name: "Settings", href: "/settings" },
  { name: "Sign out", href: "/signout" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  // State to manage active navigation item
  const [activeNav, setActiveNav] = useState<string>("Home");

  return (
    <Disclosure as="header" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
            <div className="relative flex h-16 justify-between">
              {/* Logo Section */}
              <div className="relative z-10 flex px-2 lg:px-0">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <h2 className="text-left text-3xl font-semibold mb-2 text-white">
                      <span className="text-cyan-500">O</span>YSTER
                    </h2>
                  </Link>
                </div>
              </div>

              {/* Search Bar */}
              <div className="relative z-0 flex flex-1 items-center justify-center px-2 sm:absolute sm:inset-0">
                <div className="w-full sm:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon
                        aria-hidden="true"
                        className="h-5 w-5 text-gray-400"
                      />
                    </div>
                    <input
                      id="search"
                      name="search"
                      type="search"
                      placeholder="Search"
                      className="block w-full rounded-md border-0 bg-gray-700 py-1.5 pl-10 pr-3 text-gray-300 placeholder:text-gray-400 focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <div className="relative z-10 flex items-center lg:hidden">
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className={`${open ? "hidden" : "block"} h-6 w-6`}
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className={`${open ? "block" : "hidden"} h-6 w-6`}
                  />
                </DisclosureButton>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
                {/* Notification Button */}
                <button
                  type="button"
                  className="relative flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="h-6 w-6" />
                </button>

                {/* Profile Dropdown */}
                <Menu as="div" className="relative ml-4 flex-shrink-0">
                  <div>
                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        alt=""
                        src={user.imageUrl}
                        className="h-8 w-8 rounded-full"
                      />
                    </MenuButton>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <MenuItem key={item.name}>
                          {({ active }) => (
                            <Link
                              to={item.href}
                              className={`block px-4 py-2 text-sm text-gray-700 ${
                                active ? "bg-gray-100" : ""
                              }`}
                            >
                              {item.name}
                            </Link>
                          )}
                        </MenuItem>
                      ))}
                    </MenuItems>
                  </Transition>
                </Menu>
              </div>
            </div>

            {/* Global Navigation (Desktop) */}
            <nav
              aria-label="Global"
              className="hidden lg:flex lg:space-x-8 lg:py-2"
            >
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  aria-current={activeNav === item.name ? "page" : undefined}
                  className={classNames(
                    activeNav === item.name
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "inline-flex items-center rounded-md px-3 py-2 text-sm font-medium"
                  )}
                  onClick={() => setActiveNav(item.name)}
                >
                  {item.name}
                </Link>
              ))}

              {/* More Dropdown with Transition */}
              <Menu as="div" className="relative">
                <MenuButton
                  className={classNames(
                    activeNav === "More" ||
                      activeNav === "FAQ" ||
                      activeNav === "Widgets"
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "inline-flex items-center rounded-md px-3 py-2 text-sm font-medium focus:outline-none"
                  )}
                  onClick={() => setActiveNav("More")}
                >
                  <span>More</span>
                  <svg
                    className="ml-1 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </MenuButton>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <MenuItems className="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <MenuItem>
                      {({ active }) => (
                        <Link
                          to="/faq"
                          className={`block px-4 py-2 text-sm text-gray-700 ${
                            active ? "bg-gray-100" : ""
                          }`}
                          onClick={() => setActiveNav("FAQ")}
                        >
                          FAQ
                        </Link>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <Link
                          to="/widgets"
                          className={`block px-4 py-2 text-sm text-gray-700 ${
                            active ? "bg-gray-100" : ""
                          }`}
                          onClick={() => setActiveNav("Widgets")}
                        >
                          Widgets
                        </Link>
                      )}
                    </MenuItem>
                  </MenuItems>
                </Transition>
              </Menu>
            </nav>
          </div>

          {/* Mobile Navigation with Smooth Transition */}
          <Transition
            show={open}
            as={Fragment}
            enter="transition ease-out duration-300 transform"
            enterFrom="-translate-y-4 opacity-0"
            enterTo="translate-y-0 opacity-100"
            leave="transition ease-in duration-200 transform"
            leaveFrom="translate-y-0 opacity-100"
            leaveTo="-translate-y-4 opacity-0"
          >
            <DisclosurePanel as="nav" aria-label="Global" className="lg:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as={Link}
                    to={item.href}
                    aria-current={activeNav === item.name ? "page" : undefined}
                    className={classNames(
                      activeNav === item.name
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    onClick={() => setActiveNav(item.name)}
                  >
                    {item.name}
                  </DisclosureButton>
                ))}

                {/* More Dropdown (Mobile) with Transition */}
                <Disclosure as="div" className="space-y-1">
                  {({ open: openMore }) => (
                    <>
                      <DisclosureButton
                        className={classNames(
                          activeNav === "More" ||
                            activeNav === "FAQ" ||
                            activeNav === "Widgets"
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium focus:outline-none"
                        )}
                        onClick={() => setActiveNav("More")}
                      >
                        <span>More</span>
                        <svg
                          className={`ml-2 h-5 w-5 transform transition-transform ${
                            openMore ? "rotate-180" : "rotate-0"
                          }`}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.584l3.71-4.354a.75.75 0 111.14.976l-4.25 5a.75.75 0 01-1.14 0l-4.25-5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </DisclosureButton>
                      <Transition
                        show={openMore}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-150"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <DisclosurePanel className="space-y-1">
                          <Link
                            to="/blogs/faq"
                            className={classNames(
                              activeNav === "FAQ"
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "block rounded-md px-6 py-2 text-base font-medium"
                            )}
                            onClick={() => setActiveNav("FAQ")}
                          >
                            FAQ
                          </Link>
                          <Link
                            to="/blogs/widgets"
                            className={classNames(
                              activeNav === "Widgets"
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "block rounded-md px-6 py-2 text-base font-medium"
                            )}
                            onClick={() => setActiveNav("Widgets")}
                          >
                            Widgets
                          </Link>
                        </DisclosurePanel>
                      </Transition>
                    </>
                  )}
                </Disclosure>
              </div>
              <div className="border-t border-gray-700 pb-3 pt-4">
                <div className="flex items-center px-4">
                  <div className="flex-shrink-0">
                    <img
                      alt=""
                      src={user.imageUrl}
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-white">
                      {user.name}
                    </div>
                    <div className="text-sm font-medium text-gray-400">
                      {user.email}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon aria-hidden="true" className="h-6 w-6" />
                  </button>
                </div>
                <div className="mt-3 space-y-1 px-2">
                  {userNavigation.map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as={Link}
                      to={item.href}
                      className={classNames(
                        activeNav === item.name
                          ? "bg-gray-900 text-white"
                          : "text-gray-400 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      onClick={() => setActiveNav(item.name)}
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
                </div>
              </div>
            </DisclosurePanel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
