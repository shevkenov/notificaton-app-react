import React from "react";
import "./navbar.css";

import notification from "../../img/notifications.svg";
import settings from "../../img/settings.svg";
import mail from "../../img/mail.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="logo">Chat App</h1>
      <div className="icons">
        <div className="iconCon">
          <img
            className="icon"
            src={notification}
            alt="notification"
          />
          <span className="counter">2</span>
        </div>
        <div className="iconCon">
          <img className="icon" src={mail} alt="mail"/>
          <span className="counter">3</span>
        </div>
        <div className="iconCon">
          <img className="icon" src={settings} alt="setting"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
