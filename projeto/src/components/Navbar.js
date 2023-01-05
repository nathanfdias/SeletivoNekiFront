import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import LogoNeki2 from "../Assets/Logo2-Neki.png";

const Navbar = ({ navbarLinks }) => {
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <nav className="navbar">
      <span className="navbar_logo"><img className="navbar_logo_image" src={LogoNeki2}/></span>
      {menuClicked ? (
        <FiX size={25} className={"navbar_menu"} onClick={toggleMenuClick} />
      ) : (
        <FiMenu
          size={25}
          className={"navbar_menu"}
          onClick={toggleMenuClick}
        />
      )}
      <ul
        className={
          menuClicked ? "navbar_list navbar_list--active" : "navbar_list"
        }
      >
        <li className="navbar_item">
            <Link className="navbar_link" to="/">Home</Link>
        </li>
        <li className="navbar_item">
            <Link className="navbar_link" >Skills</Link>
        </li>
        <li className="navbar_item">
            <Link className="navbar_link" >Logout</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;