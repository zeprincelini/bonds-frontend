import { WrapperLeft } from "../../styledComponents/Inbox/inbox.styled";
import Friend from "./friend";

const FriendsList = ({ conversation, id }) => {
  const friendsId = conversation.map((val) => {
    return val.members.find((c) => c !== id);
  });
  return (
    <WrapperLeft>
      <div className="search">
        <input type="search" placeholder="search bonds" />
      </div>
      {friendsId && friendsId.map((val) => <Friend id={val} key={val} />)}
    </WrapperLeft>
  );
};

export default FriendsList;
