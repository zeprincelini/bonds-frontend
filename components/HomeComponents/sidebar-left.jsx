import Link from "next/dist/client/link";
import { useRouter } from "next/dist/client/router";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { LogOut } from "../../redux/features/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignOutAlt,
  faThumbsUp,
  faCog,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import {
  WrapperLeft,
  SignOut,
  WrapperLeftLinks,
} from "../../styledComponents/Homepage/home.styled";

const SideBarLeft = () => {
  const { id } = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  const router = useRouter();

  const signout = () => {
    LogOut(dispatch, router);
  };
  return (
    <WrapperLeft>
      <div>
        <Link href={`/profile/${id}`} passHref>
          <WrapperLeftLinks pathname={router.pathname}>
            <FontAwesomeIcon icon={faUser} />
            <li>Profile</li>
          </WrapperLeftLinks>
        </Link>
        <Link href="/settings" passHref>
          <WrapperLeftLinks pathname={router.pathname}>
            <FontAwesomeIcon icon={faCog} />
            <li>Settings</li>
          </WrapperLeftLinks>
        </Link>
        {/* <Link href={`/post/${id}`} passHref>
          <WrapperLeftLinks pathname={router.pathname}>
            <FontAwesomeIcon icon={faThumbsUp} />
            <li>Liked Posts</li>
          </WrapperLeftLinks>
        </Link> */}
        <Link
          href={{
            pathname: "/post/[profileId]",
            query: { profileId: id },
          }}
          passHref
        >
          <WrapperLeftLinks pathname={router.pathname}>
            <FontAwesomeIcon icon={faThumbsUp} />
            <li>Liked Posts</li>
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
