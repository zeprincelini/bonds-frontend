import { useEffect, useState } from "react";
import Chat from "../../components/Inbox/chat";
import FriendsList from "../../components/Inbox/friendsList";
import HomeLayout from "../../layouts/home/home";
import { Container } from "../../styledComponents/Inbox/inbox.styled";
import axios from "axios";
import { GetConversation } from "../../http-requests/api";
import { useSelector } from "react-redux";

const Inbox = () => {
  const { id, token } = useSelector((state) => state.loginReducer);
  const [conversations, setConversations] = useState([]);
  const getConversations = async () => {
    try {
      const res = await axios.get(GetConversation, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: { id },
      });
      setConversations(res.data.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  useEffect(() => {
    getConversations();
  }, [id]);
  return (
    <Container>
      <FriendsList conversation={conversations} token={token} id={id} />
      <Chat />
      <div className="right-sidebar">r</div>
    </Container>
  );
};

export default Inbox;

Inbox.getLayout = function PageLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
