"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand */}
        <div>
          <h2 className="text-3xl font-bold mb-4">Tiles Gallery</h2>
          <p className="text-gray-400 leading-relaxed">
            Discover Your Perfect Aesthetic
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Quick Links</h3>

          <ul className="space-y-3 text-gray-400">
            <li>
              <Link
                href="/"
                className="hover:text-white transition duration-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/all-tiles"
                className="hover:text-white transition duration-300"
              >
                All Tiles
              </Link>
            </li>

            <li></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-xl font-semibold mb-5">Contact Us</h3>

          <div className="space-y-3 text-gray-400">
            <p>Email: rakib@73935@gmail.com</p>
            <p>Phone: +911234568</p>
            <p>Kolkata, India</p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-6">
            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-600 transition duration-300 flex items-center justify-center"
            >
              <FaFacebookF />
            </Link>

            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-pink-500 transition duration-300 flex items-center justify-center"
            >
              <FaInstagram />
            </Link>

            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-gray-700 transition duration-300 flex items-center justify-center"
            >
              <FaGithub />
            </Link>

            <Link
              href="#"
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-blue-500 transition duration-300 flex items-center justify-center"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 py-5 text-center text-sm text-gray-500">
        © 2026 YourBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
