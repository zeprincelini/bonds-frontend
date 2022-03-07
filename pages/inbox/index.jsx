import { useEffect, useState } from "react";
import Chat from "../../components/Inbox/chat";
import FriendsList from "../../components/Inbox/friendsList";
import HomeLayout from "../../layouts/home/home";
import { Container } from "../../styledComponents/Inbox/inbox.styled";
import axios from "axios";
import { GetChat, GetConversation } from "../../http-requests/api";
import { useSelector } from "react-redux";

const Inbox = () => {
  const { id, token } = useSelector((state) => state.loginReducer);
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [message, setMessage] = useState([]);

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
      console.log(err);
    }
  };

  useEffect(() => {
    getConversations();
  }, [id]);

  const getChat = async (conversationId) => {
    try {
      const res = await axios.get(`${GetChat}/${conversationId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMessage(res.data.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const createChat = async (payload) => {
    try {
      const res = await axios.post(GetChat, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMessage([...message, res.data.data]);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <Container>
      <FriendsList
        conversation={conversations}
        token={token}
        id={id}
        setCurrentChat={setCurrentChat}
        getChat={getChat}
      />
      <Chat
        currentChat={currentChat}
        message={message}
        user={id}
        createChat={createChat}
        setMessage={setMessage}
      />
      <div className="right-sidebar">r</div>
    </Container>
  );
};

export async function getServerSideProps(context) {
  const token = context.req.cookies["token"];

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default Inbox;

Inbox.getLayout = function PageLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
