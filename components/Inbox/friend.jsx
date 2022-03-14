import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { GetUser } from "../../http-requests/api";
import Image from "next/image";

const Friend = ({ chat, id }) => {
  const { token } = useSelector((state) => state.loginReducer);
  const [user, setUser] = React.useState({});
  const friendId = chat.members.find((m) => m !== id);

  React.useEffect(() => {
    const getUser = async () => {
      const res = await axios.get(`${GetUser}/${friendId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(res.data.data);
    };
    getUser();
  }, [id, friendId, token]);
  return (
    <div className="friends">
      <Image
        src={
          user.profilePicture?.length > 0
            ? user.profilePicture
            : "https://picsum.photos/50/50"
        }
        alt=""
        width="50px"
        height="50px"
        className="rounded-img"
      />
      <span>{user.username}</span>
    </div>
  );
};

export default Friend;
