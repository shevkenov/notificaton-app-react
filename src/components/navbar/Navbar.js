import React, { useEffect, useState } from "react";
import "./navbar.css";

import notification from "../../img/notifications.svg";
import settings from "../../img/settings.svg";
import mail from "../../img/mail.svg";

const Navbar = ({ socket }) => {
  const [notifications, setNotificatons] = useState([]);
  const [openNotification, setOpenNotification] = useState(false);

  useEffect(() => {
    socket.on("getNotification", ({ type, sender }) => {
      if (type === 1) {
        setNotificatons((prev) => [...prev, { type, sender, action: "liked" }]);
      } else if (type === 2) {
        setNotificatons((prev) => [
          ...prev,
          { type, sender, action: "commented" },
        ]);
      } else if (type === 3) {
        setNotificatons((prev) => [
          ...prev,
          { type, sender, action: "shared" },
        ]);
      }
    });
  }, [socket]);

  return (
    <div className="navbar">
      <h1 className="logo">Chat App</h1>
      <div className="icons">
        <div className="iconCon">
          <img
            className="icon"
            src={notification}
            alt="notification"
            onClick={() => setOpenNotification(!openNotification)}
          />
          {notifications.length > 0 && (
            <span className="counter">
              {notifications.length}
            </span>
          )}
        </div>
        <div className="iconCon">
          <img className="icon" src={mail} alt="mail" />
        </div>
        <div className="iconCon">
          <img className="icon" src={settings} alt="setting" />
        </div>
        {openNotification && (
          <div className="notifications">
            {notifications.map((msg) => (
              <span className="notification">
                {msg.sender} {msg.action} your post
              </span>
            ))}
            {notifications.length > 0 && (
              <button
                className="btn"
                onClick={() => {
                  setNotificatons([]);
                  setOpenNotification(false);
                }}
              >
                Readed
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
