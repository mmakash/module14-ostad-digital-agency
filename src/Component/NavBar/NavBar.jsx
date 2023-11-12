import React from "react";
import { NavLink } from "react-router-dom";


const NavBar = () => {
  return (
    <div className="navbar bg-teal-200 px-20">
    <div className="navbar-start">
      <p>Design<span className="text-yellow-500">AGENCY</span></p>
    </div>
    <div className="navbar-center lg:flex">
      <ul className="menu lg:menu-horizontal sm:menu-dropdown px-1">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/team">Team</NavLink></li>
        <li><NavLink to="/service">Service</NavLink></li>
        <li><NavLink to="/project">Project</NavLink></li>
        <li><NavLink to="/testimonial">Testimonial</NavLink></li>
      </ul>
    </div>
    <div className="navbar-end">
      <a className="btn btn-outline">Login</a>
      <a className="btn btn-success ml-2">Register</a>
    </div>
  </div>
  );
};

export default NavBar;
