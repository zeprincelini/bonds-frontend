import React from "react";
import { WrapperLeft } from "../../styledComponents/Inbox/inbox.styled";

const FriendsList = () => {
  return (
    <WrapperLeft>
      <div className="search">
        <input type="search" placeholder="search bonds" />
      </div>
      <div className="friends">
        <img
          src="https://picsum.photos/50/50"
          style={{ borderRadius: "50%" }}
        />
        <span>john doe</span>
      </div>
      <div className="friends">
        <img
          src="https://picsum.photos/50/50"
          style={{ borderRadius: "50%" }}
        />
        <span>john doe</span>
      </div>
      <div className="friends">
        <img
          src="https://picsum.photos/50/50"
          style={{ borderRadius: "50%" }}
        />
        <span>john doe</span>
      </div>
    </WrapperLeft>
  );
};

export default FriendsList;
