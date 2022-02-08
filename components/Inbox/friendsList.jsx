import { WrapperLeft } from "../../styledComponents/Inbox/inbox.styled";
import Friend from "./friend";

const FriendsList = ({ conversation, id, setCurrentChat, getChat }) => {
  return (
    <WrapperLeft>
      <div className="search">
        <input type="search" placeholder="search bonds" />
      </div>
      {conversation &&
        conversation.map((val) => (
          <div
            key={val._id}
            onClick={() => {
              setCurrentChat(val);
              getChat(val._id);
            }}
          >
            <Friend chat={val} id={id} />
          </div>
        ))}
    </WrapperLeft>
  );
};

export default FriendsList;
