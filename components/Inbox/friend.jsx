import React from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { GetUser } from "../../http-requests/api";

const Friend = ({ id }) => {
  const { token } = useSelector((state) => state.loginReducer);
  const [user, setUser] = React.useState({});
  const getUser = async () => {
    const res = await axios.get(`${GetUser}/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUser(res.data.data);
  };
  React.useEffect(() => {
    getUser();
  }, []);
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
