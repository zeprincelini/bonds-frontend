import { useState } from "react";
import Link from "next/dist/client/link";
import {
  faBars,
  faCog,
  faHome,
  faLink,
  faSignOutAlt,
  faThumbsUp,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LogOut } from "../../redux/features/api";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { useRouter } from "next/dist/client/router";

const Floater = styled.div`
  position: fixed;
  left: 0px;
  top: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 5px 10px 5px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  background: #f04f2f;
  cursor: pointer;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 2;
  transition: 0.45s ease-in-out;
  background: rgba(0, 0, 0, 0.7);
  @media (max-width: 768px) {
    display: block;
  }
`;

const FloatNav = styled.div`
  position: fixed;
  right: 0;
  background: #fff;
  width: 190px;
  z-index: 1;
  height: 100vh;
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  a {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 0px;
    border-radius: 7px;
    li {
      list-style: none;
      color: gray;
    }
  }
`;

const Close = styled.div`
  width: 30px;
  height: 30px;
  cursor: pointer;
  border-radius: 50%;
  background: #f04f2f;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FloatingNav = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.loginReducer);
  const router = useRouter();
  const signOut = () => {
    LogOut(dispatch, router);
  };
  return (
    <>
      {!show && (
        <Floater onClick={() => setShow(true)}>
          <FontAwesomeIcon icon={faBars} color="#fff" />
        </Floater>
      )}
      <Overlay
        style={{
          transform: `${show ? "translateX(0px)" : "translateX(6500px)"}`,
        }}
      >
        <FloatNav>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Close onClick={() => setShow(false)}>
              <FontAwesomeIcon icon={faTimes} color="#FFF" />
            </Close>
          </div>
          <Link href="/">
            <a>
              <FontAwesomeIcon icon={faHome} color="#F04F2F" />
              <li>Home</li>
            </a>
          </Link>
          <Link href={`/profile/${id}`}>
            <a>
              <FontAwesomeIcon icon={faUser} color="#F04F2F" />
              <li>Profile</li>
            </a>
          </Link>
          <Link href={`/bonds/${id}`}>
            <a>
              <FontAwesomeIcon icon={faLink} color="#F04F2F" />
              <li>Bonds</li>
            </a>
          </Link>
          <Link href={`/post/${id}`}>
            <a>
              <FontAwesomeIcon icon={faThumbsUp} color="#F04F2F" />
              <li>Liked Posts</li>
            </a>
          </Link>
          <Link href="/settings">
            <a>
              <FontAwesomeIcon icon={faCog} color="#F04F2F" />
              <li>Settings</li>
            </a>
          </Link>
          <div onClick={() => signOut()}>
            <a>
              <FontAwesomeIcon icon={faSignOutAlt} color="#F04F2F" />
              <li>Log out</li>
            </a>
          </div>
        </FloatNav>
      </Overlay>
    </>
  );
};

export default FloatingNav;
