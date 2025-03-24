import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Copyright */}
          <div>
            <div className="mb-4">
              <Logo width="120px" />
            </div>
            <p className="text-sm text-gray-400">
              &copy; {new Date().getFullYear()} DevUI. All Rights Reserved.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-white transition" to="/">
                  Features
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/">
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/">
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-white transition" to="/">
                  Account
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/">
                  Help
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/">
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-100 mb-4">Legals</h3>
            <ul className="space-y-2">
              <li>
                <Link className="hover:text-white transition" to="/">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="hover:text-white transition" to="/">
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Socials */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-500">
            Follow us on{" "}
            <Link to="/" className="text-blue-400 hover:underline">
              Twitter
            </Link>
            ,{" "}
            <Link to="/" className="text-blue-400 hover:underline">
              LinkedIn
            </Link>{" "}
            &{" "}
            <Link to="/" className="text-blue-400 hover:underline">
              GitHub
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
