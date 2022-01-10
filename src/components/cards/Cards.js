import React, { useState } from "react";

import "./card.css";
import Share from "../../img/share.svg";
import Info from "../../img/info.svg";
import Chat from "../../img/chatbubble.svg";
import Heart from "../../img/heart.svg";
import HeartFilled from "../../img/heart_filled.svg";

const Cards = ({ userData, sender, socket }) => {
  const [like, setLike] = useState(false);

  const handleLike = () => {
    setLike(true);
    handleSendNotification(1);
  }

  const handleSendNotification = (type) => {
    socket.emit('sendNotification', {
      sender,
      receiver: userData.username,
      type
    })
  }

  return (
    <div className="card">
      <div className="userinfo">
        <img src={userData.userImg} alt="user" className="user-image" />
        <span className="fullname">{userData.fullname}</span>
      </div>
      <div className="user-post-image">
        <img src={userData.postImg} alt="post" />
      </div>
      <div className="interaction">
        {like ? (
          <img src={HeartFilled} alt="heart" className="interaction-icon filled" />
        ) : (
          <img src={Heart} alt="heart" className="interaction-icon" onClick={handleLike}/>
        )}
        <img src={Chat} alt="comment" className="interaction-icon" onClick={() => handleSendNotification(2)}/>
        <img src={Share} alt="share" className="interaction-icon" onClick={() => handleSendNotification(3)}/>
        <img
          src={Info}
          alt="info"
          className="interaction-icon info-icon"
        />
      </div>
    </div>
  );
};

export default Cards;
