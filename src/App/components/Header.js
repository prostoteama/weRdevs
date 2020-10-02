import React, { useRef } from "react";
import "./styles/Header.scss";
import logo from "../../img/main-logo.jpg"; // relative path to image

export const Header = () => {
  const ref = useRef();
  const toggle = () => {
    ref.current.classList.toggle("active");
  };
  return (
    <div className="wrapper">
      <div className="header">
        <a className="header__logo_link" href="/">
          <img className="header__img" src={logo} alt="Logo" />
        </a>
        <i
          className="fas fa-align-justify header__toggle-button"
          onClick={toggle}
        ></i>

        <ul className="header__pages" ref={ref}>
          <li>
            {" "}
            <a href="/" className="active">Home</a>
          </li>
          <li>
            {" "}
            <a href="/">About Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
