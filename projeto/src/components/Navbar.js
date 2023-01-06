import React, { useState, useContext } from "react";
import { Link } from 'react-router-dom';
import "./Navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import LogoNeki2 from "../Assets/Logo2-Neki.png";

import { UserContext } from "../context/auth";

const Navbar = ({ navbarLinks }) => {
  const [menuClicked, setMenuClicked] = useState(false);

  const { logout } = useContext(UserContext);

  const deslogar = () => {
    logout();
}

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
            <Link className="navbar_link" to="/home">Home</Link>
        </li>
        <li className="navbar_item">
            <Link className="navbar_link" to="/skills">Skills</Link>
        </li>
        <li className="navbar_item">
          <button className="navbar-logout" onClick={() => deslogar()}>
            <p className="navbar_link" >Logout</p>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;