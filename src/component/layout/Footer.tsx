import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white text-center py-8">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <div className="w-full max-w-screen-xl grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 px-4 md:px-8">
          {/* Column 1 */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-left text-3xl font-semibold mb-2">
              <span className="text-cyan-500">O</span>YSTER
            </h2>
            <p className="text-sm text-left text-slate-300 leading-6">
              All the data you seek, in one place.
            </p>
          </div>

          {/* Column 2 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2">Product</h2>
            <ul className="text-center md:text-left px-6 md:px-24">
              <li className="py-2">
                <Link
                  className="text-sm text-slate-300 hover:text-blue-400"
                  to="#"
                >
                  Features
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="text-sm text-slate-300 hover:text-blue-400"
                  to="#"
                >
                  What's new?
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="text-sm text-slate-300 hover:text-blue-400"
                  to="#"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Team</h2>
            <ul className="text-center md:text-left px-6 md:px-24">
              <li className="py-1">
                <Link
                  className="text-sm text-slate-300 hover:text-blue-400"
                  to="#"
                >
                  About Us
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="text-sm text-slate-300 hover:text-blue-400"
                  to="#"
                >
                  Career
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="text-sm text-slate-300 hover:text-blue-400"
                  to="#"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Legal</h2>
            <ul className="text-center md:text-left px-6 md:px-24">
              <li className="py-1">
                <Link
                  className="text-sm text-slate-300 hover:text-blue-400"
                  to="#"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="py-1">
                <Link
                  className="text-sm text-slate-300 hover:text-blue-400"
                  to="#"
                >
                  Terms of Service
                </Link>
              </li>

              <li className="py-1">
                <Link
                  className="text-sm text-slate-300 hover:text-blue-400"
                  to="#"
                >
                  Cancellation Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* All Rights Reserved tagline */}
      <div className="flex flex-col items-center">
        <p className="mt-8 text-sm text-slate-400">
          Oyster &copy; {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
