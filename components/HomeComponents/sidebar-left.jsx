import Link from "next/dist/client/link";
import { useRouter } from "next/dist/client/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faCog,
  faList,
  faPlay,
  faUsers,
  faSave,
  faBookmark,
  faCalendar,
  faQuestion,
} from "@fortawesome/free-solid-svg-icons";
import {
  WrapperLeft,
  WrapperLeftFriends,
  WrapperLeftLinks,
} from "../../styledComponents/Homepage/home.styled";

const SideBarLeft = () => {
  const router = useRouter();
  return (
    <WrapperLeft>
      <Link href="/posts" passHref>
        <WrapperLeftLinks pathname={router.pathname}>
          <FontAwesomeIcon icon={faList} />
          <li>Posts</li>
        </WrapperLeftLinks>
      </Link>
      <Link href="/logout" passHref>
        <WrapperLeftLinks pathname={router.pathname}>
          <FontAwesomeIcon icon={faPlay} />
          <li>Videos</li>
        </WrapperLeftLinks>
      </Link>
      <Link href="/posts" passHref>
        <WrapperLeftLinks pathname={router.pathname}>
          <FontAwesomeIcon icon={faUsers} />
          <li>Groups</li>
        </WrapperLeftLinks>
      </Link>
      <Link href="/settings" passHref>
        <WrapperLeftLinks pathname={router.pathname}>
          <FontAwesomeIcon icon={faCog} />
          <li>Settings</li>
        </WrapperLeftLinks>
      </Link>
      <Link href="/logout" passHref>
        <WrapperLeftLinks pathname={router.pathname}>
          <FontAwesomeIcon icon={faSave} />
          <li>Saved Items</li>
        </WrapperLeftLinks>
      </Link>
      <Link href="/posts" passHref>
        <WrapperLeftLinks pathname={router.pathname}>
          <FontAwesomeIcon icon={faBookmark} />
          <li>Bookmark</li>
        </WrapperLeftLinks>
      </Link>
      <Link href="/posts" passHref>
        <WrapperLeftLinks pathname={router.pathname}>
          <FontAwesomeIcon icon={faCalendar} />
          <li>Events</li>
        </WrapperLeftLinks>
      </Link>
      <Link href="/posts" passHref>
        <WrapperLeftLinks pathname={router.pathname}>
          <FontAwesomeIcon icon={faQuestion} />
          <li>Faq</li>
        </WrapperLeftLinks>
      </Link>
      <hr />
      <WrapperLeftFriends>
        <img
          src="https://picsum.photos/50/50"
          style={{ borderRadius: "50%" }}
        />
        <li>john doe</li>
      </WrapperLeftFriends>
      <WrapperLeftFriends>
        <img
          src="https://picsum.photos/50/50"
          style={{ borderRadius: "50%" }}
        />
        <li>john doe</li>
      </WrapperLeftFriends>
      <WrapperLeftFriends>
        <img
          src="https://picsum.photos/50/50"
          style={{ borderRadius: "50%" }}
        />
        <li>john doe</li>
      </WrapperLeftFriends>
      <WrapperLeftFriends>
        <img
          src="https://picsum.photos/50/50"
          style={{ borderRadius: "50%" }}
        />
        <li>john doe</li>
      </WrapperLeftFriends>
      <WrapperLeftFriends>
        <img
          src="https://picsum.photos/50/50"
          style={{ borderRadius: "50%" }}
        />
        <li>john doe</li>
      </WrapperLeftFriends>
    </WrapperLeft>
  );
};

export default SideBarLeft;
