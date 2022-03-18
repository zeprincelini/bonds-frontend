import React, { useEffect } from "react";
import {
  WrapperMid,
  Message,
  Flex,
} from "../../styledComponents/Inbox/inbox.styled";
import { format } from "timeago.js";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import Image from "next/image";

const Chat = ({ currentChat, message, user, createChat, setMessage }) => {
  const { id } = useSelector((state) => state.loginReducer);
  const [chatPayload, setChatPayload] = React.useState("");
  const [newMessage, setNewMessage] = React.useState(null);
  const scrollRef = React.useRef();
  const socket = React.useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", (data) => {
      setNewMessage({
        sender: data.senderId,
        message: data.message,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    newMessage &&
      currentChat?.members.includes(newMessage.sender) &&
      setMessage((prev) => [...prev, newMessage]);
  }, [newMessage, currentChat, setMessage]);

  useEffect(() => {
    socket.current.emit("addUser", id);
    socket.current.on("allUsers", (users) => console.log(users));
  }, [id]);

  const handleSubmit = () => {
    const data = {
      conversationId: currentChat._id,
      sender: id,
      message: chatPayload,
    };
    const receiverId = currentChat.members.find((user) => user !== id);
    socket.current.emit("sendMessage", {
      senderId: id,
      receiverId,
      message: chatPayload,
    });
    createChat(data);
    setChatPayload("");
  };

  React.useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);
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
                <div ref={scrollRef} key={val._id}>
                  <Message user={val.sender === user}>
                    <div className="chat-userImg">
                      <Image
                        alt="user"
                        src="https://picsum.photos/50/50"
                        width="50px"
                        height="50px"
                        className="rounded-img"
                      />
                    </div>
                    <div className="chat-body">
                      {/* <span>Jane foster</span> */}
                      <div className="chat-text">{val.message}</div>
                      <div className="chat-time">{format(val.createdAt)}</div>
                    </div>
                  </Message>
                </div>
              ))}
          </div>
          <Flex>
            <textarea
              name="message"
              cols="50"
              rows="5"
              placeholder="write something..."
              onChange={(e) => setChatPayload(e.target.value)}
              value={chatPayload}
            ></textarea>
            <button
              onClick={() => {
                handleSubmit();
              }}
            >
              send
            </button>
          </Flex>
        </>
      )}
    </WrapperMid>
  );
};

export default Chat;
