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
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";

const user = {
  name: "Gurdeep",
  email: "gurdeepbhumra@gmail.com",
  imageUrl: "https://eu.ui-avatars.com/api/?name=John+Doe&size=250",
};

const navigation = [
  { name: "Home", href: "/" },
  { name: "Dashboard", href: "/dashboard" },
  { name: "Tools", href: "/tools" },
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
  const [activeNav, setActiveNav] = useState<string>("Home");
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <Disclosure
      as="header"
      className={`bg-gray-800 ${isDarkTheme ? "dark" : ""}`}
    >
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
                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-800 py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {userNavigation.slice(0, -1).map((item) => (
                        <MenuItem key={item.name}>
                          {({ active }) => (
                            <Link
                              to={item.href}
                              className={`block px-4 py-2 text-sm text-gray-700 dark:text-white ${
                                active ? "bg-gray-400 dark:bg-black" : ""
                              }`}
                            >
                              {item.name}
                            </Link>
                          )}
                        </MenuItem>
                      ))}
                      {/* Theme Toggle Button above Sign Out */}
                      <MenuItem>
                        {({ active }) => (
                          <button
                            onClick={toggleTheme}
                            className={`flex items-center justify-between w-full px-4 py-2 text-left text-sm ${
                              isDarkTheme ? "text-white" : "text-gray-700"
                            } ${active ? "bg-gray-400 dark:bg-black" : ""}`}
                          >
                            Theme:
                            <span className="ml-2">
                              {isDarkTheme ? "Dark 🌙" : "Light ☀️"}
                            </span>
                          </button>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ active }) => (
                          <Link
                            to="/signout"
                            className={`block px-4 py-2 text-sm text-gray-700 dark:text-white ${
                              active ? "bg-gray-400 dark:bg-black" : ""
                            }`}
                          >
                            Sign out
                          </Link>
                        )}
                      </MenuItem>
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
            </nav>
          </div>

          {/* Mobile Navigation */}
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
              </div>
              <div className="border-t border-gray-700 pb-3 pt-4">
                <div className="flex items-center px-4">
                  <img
                    alt=""
                    src={user.imageUrl}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="ml-3">
                    <div className="text-base font-medium text-white">
                      {user.name}
                    </div>
                    <div className="text-sm font-medium text-gray-400">
                      {user.email}
                    </div>
                  </div>
                </div>
                <div className="mt-3 space-y-1 px-2">
                  {userNavigation.slice(0, -1).map((item) => (
                    <DisclosureButton
                      key={item.name}
                      as={Link}
                      to={item.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 dark:text-white hover:bg-gray-700 hover:text-white"
                    >
                      {item.name}
                    </DisclosureButton>
                  ))}
                  {/* Theme Toggle Button under Settings and above Sign Out */}
                  <DisclosureButton
                    as="button"
                    onClick={toggleTheme}
                    className="flex items-center justify-between w-full rounded-md px-3 py-2 text-base font-medium text-gray-300 dark:text-white hover:bg-gray-700 hover:text-white"
                  >
                    Theme:
                    <span className="ml-2">
                      {isDarkTheme ? "Dark 🌙" : "Light ☀️"}
                    </span>
                  </DisclosureButton>
                  <DisclosureButton
                    as={Link}
                    to="/signout"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 dark:text-white hover:bg-gray-700 hover:text-white"
                  >
                    Sign out
                  </DisclosureButton>
                </div>
              </div>
            </DisclosurePanel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
