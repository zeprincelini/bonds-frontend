import React from "react";
import {
  WrapperMid,
  Message,
  Flex,
} from "../../styledComponents/Inbox/inbox.styled";

const Chat = ({ currentChat, message, user }) => {
  return (
    <WrapperMid>
      {currentChat === null ? (
        <div className="empty">
          <h3>
            Tap a bond to begin
            <br />a conversation
          </h3>
        </div>
      ) : (
        <>
          <div className="chat-container">
            {message &&
              message.map((val) => (
                <Message user={val.sender === user} key={val._id}>
                  <div className="chat-userImg">
                    <img
                      src="https://picsum.photos/50/50"
                      style={{ borderRadius: "50%" }}
                    />
                  </div>
                  <div className="chat-body">
                    <span>Jane foster</span>
                    <div className="chat-text">{val.message}</div>
                    <div className="chat-time">1 hour ago</div>
                  </div>
                </Message>
              ))}
          </div>
          <Flex>
            <textarea
              name="message"
              cols="50"
              rows="5"
              placeholder="Type here"
            ></textarea>
            <button>send</button>
          </Flex>
        </>
      )}
    </WrapperMid>
  );
};

export default Chat;
