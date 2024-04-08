import React, { useState } from "react";
import { IoHomeOutline, IoFastFood } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { TbDiscount2 } from "react-icons/tb";
import { IoIosContact } from "react-icons/io";

function HamburgerMenu() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <button
        className={`hamburger ${isActive ? 'is-active' : ''}`.trimEnd()}
        onClick={() => { setIsActive(!isActive) }}
      >
        <div className="bar"></div>
      </button>
      <nav className={`navbar-mobile ${isActive ? 'is-active' : ''}`.trimEnd()}>
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
          {/* <p>VK</p> */}
          <IoFastFood />
        </div>

        <div className="hamburger-footer">
          <p>VK®2024</p>
        </div>
      </nav>
    </>
  );
}

export default HamburgerMenu;