import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <div>
        <p className="logo">Blog</p>

        <ul>
          <li>
            <NavLink activeclassname="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to="/blog">
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
