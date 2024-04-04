import React, { useState } from "react";

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

        <a href="#">Inicio</a>
        <a href="#">Categorías</a>
        <a href="#">Promos</a>
        <a href="#">Contacto</a>
      </nav>
    </>
  );
}

export default HamburgerMenu;