import React, { useState } from "react";
import { HiOutlineLightningBolt } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="bg-gray-100 flex items-center justify-between p-4">
      {/* logo section */}
      <Link to="/" className="inline-flex items-center">
        <HiOutlineLightningBolt className="h-8 w-8 text-blue-500" />
        <span className="font-bold text-xl ml-2 text-gray-800">Book Store</span>
      </Link>
      {/* navbar section */}
      <ul className="lg:flex hidden space-x-8">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/books"
            className={({ isActive }) => (isActive ? "text-blue-500" : "")}
          >
            Books
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
