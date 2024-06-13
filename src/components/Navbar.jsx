import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [theme, setTheme] = useState("moon");

  const handleMode = () => {
    if (theme == "moon") {
      setTheme("sun");
      document.querySelector("body").className = "bg-white";
    } else {
      setTheme("moon");
      document.querySelector("body").className =
        "bg-gradient-to-r from-slate-900 to-slate-700 text-blue-500";
    }
  };

  return (
    <div className="flex justify-between">
      <div className="flex space-x-8 items-center pl-3 py-4">
        <img className="w-[50px]" src={Logo} alt="Logo" />
        <Link to="/" className="text-blue-500 text-3xl font-bold">
          Home
        </Link>
        <Link to="/watchlist" className="text-blue-500 text-3xl font-bold">
          Watchlist
        </Link>
      </div>
      <div className="flex items-center mx-4">
        {theme == "moon" ? (
          <i
            id="sun"
            className="fill-current text-blue-500 text-3xl uil uil-sun"
            onClick={handleMode}
          ></i>
        ) : (
          <i
            id="moon"
            className="fill-current text-blue-500 text-3xl uil uil-moon"
            onClick={handleMode}
          ></i>
        )}
      </div>
    </div>
  );
};

export default Navbar;
