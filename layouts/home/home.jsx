import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";
import NavBar from "./nav";
import Footer from "./footer";
import {
  Wrapper,
  WrapperMid,
} from "../../styledComponents/Homepage/home.styled";
import SideBarLeft from "../../components/HomeComponents/sidebar-left";
import SideBarRight from "../../components/HomeComponents/sidebar-right";

const HomeLayout = ({ children }) => {
  const paths = ["/inbox", "/bonds/[bondId]"];
  const router = useRouter();
  console.log(router.pathname);
  return (
    <>
      {paths.includes(router.pathname) ? (
        <>
          <NavBar />
          {children}
          <Footer />
        </>
      ) : (
        <>
          <NavBar />
          <Wrapper>
            <SideBarLeft />
            <WrapperMid>{children}</WrapperMid>
            <SideBarRight />
          </Wrapper>
          <Footer />
        </>
      )}
    </>
  );
};

export default HomeLayout;
