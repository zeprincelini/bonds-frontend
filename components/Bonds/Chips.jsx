import Image from "next/image";
import Link from "next/link";
import { Chip } from "../../styledComponents/Bond/bonds.styled";

const Chips = ({ user }) => {
  return (
    <Chip>
      <Link href={`/profile/${user._id}`}>
        <a>
          <div className="chipBody">
            <Image
              className="img"
              src={
                user.profilePicture.length > 0
                  ? user.profilePicture
                  : "https://picsum.photos/50/50"
              }
              width="50px"
              height="50px"
              alt="profile"
            />
            <p>{user.username}</p>
          </div>
        </a>
      </Link>
    </Chip>
  );
};

export default Chips;
