import React, { useState } from "react";

import "./card.css";
import Share from "../../img/share.svg";
import Info from "../../img/info.svg";
import Chat from "../../img/chatbubble.svg";
import Heart from "../../img/heart.svg";
import HeartFilled from "../../img/heart_filled.svg";

const Cards = ({ userData }) => {
  const [like, setLike] = useState(false);
  return (
    <div className="card">
      <div className="userinfo">
        <img src={userData.userImg} alt="user" className="user-image" />
        <span className="username">{userData.username}</span>
      </div>
      <div className="user-post-image">
        <img src={userData.postImg} alt="post" />
      </div>
      <div className="interaction">
        {like ? (
          <img src={HeartFilled} alt="heart" className="interaction-icon filled" onClick={() => setLike(true)}/>
        ) : (
          <img src={Heart} alt="heart" className="interaction-icon" onClick={() => setLike(true)}/>
        )}
        <img src={Chat} alt="comment" className="interaction-icon" />
        <img src={Share} alt="share" className="interaction-icon" />
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
