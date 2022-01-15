import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { GetUser } from "../../http-requests/api";

const Friend = ({ chat, id }) => {
  const { token } = useSelector((state) => state.loginReducer);
  const [user, setUser] = React.useState({});
  const friendId = chat.members.find((m) => m !== id);
  const getUser = async () => {
    const res = await axios.get(`${GetUser}/${friendId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUser(res.data.data);
  };
  React.useEffect(() => {
    getUser();
  }, [id]);
  return (
    <div className="friends">
      <img
        src={
          user.profilePicture?.length > 0
            ? user.profilePicture
            : "https://picsum.photos/50/50"
        }
        style={{ borderRadius: "50%" }}
      />
      <span>{user.username}</span>
    </div>
  );
};

export default Friend;
