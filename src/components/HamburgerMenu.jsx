import React, { useContext, useState } from "react";
import { IoHomeOutline, IoFastFood } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { TbDiscount2 } from "react-icons/tb";
import { IoIosContact } from "react-icons/io";
import { DarkModeContext } from "../contexts/DarkModeContext";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";

function HamburgerMenu() {
  const [isActive, setIsActive] = useState(false);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <>
      <button
        className={`hamburger ${isActive ? 'is-active' : ''}`.trimEnd()}
        onClick={() => { setIsActive(!isActive) }}
      >
        <div className="bar"></div>
      </button>
      <nav className={`navbar-mobile ${isActive ? 'is-active' : ''} ${darkMode ? 'oscuro' : ''}`.trimEnd()}>
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

        <div className={`container-darkmode ${darkMode ? 'oscuro' : ''}`}>
          <button
            type="button"
            className="boton-darkmode"
            onClick={() => { setDarkMode(!darkMode) }}
          >
            <MdOutlineDarkMode className="desactivado" />
            <MdDarkMode className="activado" />
          </button>
        </div>

        <div className="hamburger-footer">
          <p>VK®2024</p>
        </div>
      </nav>
    </>
  );
}

export default HamburgerMenu;