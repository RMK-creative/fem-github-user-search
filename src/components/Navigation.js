import React from "react";
import "./_navigation.css";
import sun from "../assets/icon-sun.svg";

const Navigation = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar__logo">
        dev<span>f</span>inder
      </h1>
      <div className="navbar__theme-switch__wrapper">
        <p className="navbar__theme-switch">light</p>
        <img src={sun} alt="theme set to light mode" />
        {/* <p className="navbar__theme-switch">Dark</p> */}
      </div>
    </nav>
  );
};

export default Navigation;
