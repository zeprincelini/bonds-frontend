import Link from "next/dist/client/link";
import { useRouter } from "next/dist/client/router";
import { useDispatch } from "react-redux";
import { LogOut } from "../../redux/features/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt, faHome, faCog } from "@fortawesome/free-solid-svg-icons";
import {
  WrapperLeft,
  SignOut,
  WrapperLeftLinks,
} from "../../styledComponents/Homepage/home.styled";

const SideBarLeft = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const signout = () => {
    LogOut(dispatch, router);
  };
  return (
    <WrapperLeft>
      <div>
        <Link href="/" passHref>
          <WrapperLeftLinks pathname={router.pathname}>
            <FontAwesomeIcon icon={faHome} />
            <li>Home</li>
          </WrapperLeftLinks>
        </Link>
        <Link href="/settings" passHref>
          <WrapperLeftLinks pathname={router.pathname}>
            <FontAwesomeIcon icon={faCog} />
            <li>Settings</li>
          </WrapperLeftLinks>
        </Link>
      </div>
      <div>
        <hr />
        <div>
          <SignOut onClick={() => signout()}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            <li>Log out</li>
          </SignOut>
        </div>
      </div>
    </WrapperLeft>
  );
};

export default SideBarLeft;
