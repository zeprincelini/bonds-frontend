import { useState } from "react";
import { Floater } from "../../styledComponents/Homepage/home.styled";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

const FloatNav = styled.div`
  position: fixed;
  right: 0;
  background: #fff;
  width: 150px;
  z-index: 1;
  height: 200px;
  transition: 0.45s ease-in-out;
`;

const FloatingNav = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <Floater onClick={() => setShow(!show)}>
        <FontAwesomeIcon icon={faBars} color="#fff" />
      </Floater>
      <FloatNav
        style={{
          transform: `${show ? "translateX(0px)" : "translateX(250px)"}`,
        }}
      >
        hello
      </FloatNav>
    </>
  );
};

export default FloatingNav;
