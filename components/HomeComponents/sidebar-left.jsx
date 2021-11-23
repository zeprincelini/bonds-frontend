import Link from "next/dist/client/link";
import { useRouter } from "next/dist/client/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faCog, faList } from "@fortawesome/free-solid-svg-icons";
import {
  WrapperLeft,
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
      <Link href="/settings" passHref>
        <WrapperLeftLinks pathname={router.pathname}>
          <FontAwesomeIcon icon={faCog} />
          <li>Settings</li>
        </WrapperLeftLinks>
      </Link>
      <Link href="/logout" passHref>
        <WrapperLeftLinks pathname={router.pathname}>
          <FontAwesomeIcon icon={faSignOutAlt} />
          <li>Log out</li>
        </WrapperLeftLinks>
      </Link>
    </WrapperLeft>
  );
};

export default SideBarLeft;
