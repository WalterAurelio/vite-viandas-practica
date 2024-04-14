import React, { useContext, useState } from "react";
import { IoHomeOutline, IoFastFood, IoCloseOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { TbDiscount2 } from "react-icons/tb";
import { IoIosContact } from "react-icons/io";
import { DarkModeContext } from "../contexts/DarkModeContext";
import { RxHamburgerMenu } from "react-icons/rx";

import BotonDarkMode from "./BotonDarkMode";

function HamburgerMenu() {
  const [isActive, setIsActive] = useState(false);
  const { darkClass } = useContext(DarkModeContext);

  return (
    <>
      <button
        className={`hamburger ${isActive ? 'is-active' : ''}`.trimEnd()}
        onClick={() => { setIsActive(!isActive) }}
      >
        {/* <div className="bar"></div> */}
        <div className="container-iconos">
          <RxHamburgerMenu className="icono-burger" />
          <IoCloseOutline className="icono-close" />
        </div>
      </button>
      <nav className={`navbar-mobile ${isActive ? 'is-active' : ''} ${darkClass}`}>
        <div className="container-bg">
        </div>

        <a href="#">
          <IoHomeOutline className="icono" />
          Inicio
        </a>
        <a href="#">
          <BiCategory className="icono" />
          Categorías
        </a>
        <a href="#">
          <TbDiscount2 className="icono" />
          Promos
        </a>
        <a href="#">
          <IoIosContact className="icono" />
          Contacto
        </a>

        <div className="container-barbecue">
          <IoFastFood className="logo" />
          <p>VK</p>
        </div>

        <div className="container-darkmode">
          <BotonDarkMode />
        </div>

        <div className="hamburger-footer">
          <p>VK®2024</p>
        </div>
      </nav>
    </>
  );
}

export default HamburgerMenu;