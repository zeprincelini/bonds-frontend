import React from "react";
import Chat from "../../components/Inbox/chat";
import FriendsList from "../../components/Inbox/friendsList";
import HomeLayout from "../../layouts/home/home";
import { Container } from "../../styledComponents/Inbox/inbox.styled";

const Inbox = () => {
  return (
    <Container>
      <FriendsList />
      <Chat />
      <div className="right-sidebar">r</div>
    </Container>
  );
};

export default Inbox;

Inbox.getLayout = function PageLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
