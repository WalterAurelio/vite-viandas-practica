import React, { useContext } from "react";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { DarkModeContext } from "../contexts/DarkModeContext";

function BotonDarkMode() {
  const { darkMode, setDarkMode, darkClass } = useContext(DarkModeContext);

  return (
    <button
      type="button"
      className={`boton-darkmode ${darkClass}`}
      onClick={() => { setDarkMode(!darkMode) }}
    >
      <MdOutlineDarkMode className="desactivado" />
      <MdDarkMode className="activado" />
    </button>
  );
}

export default BotonDarkMode;
