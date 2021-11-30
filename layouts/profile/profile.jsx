import NavBar from "../home/nav";
import Footer from "../home/footer";
import { Main, Wrapper } from "../../styledComponents/Profile/profile.styled";
import SideBarLeft from "../../components/HomeComponents/sidebar-left";

const ProfileLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      <Wrapper>
        <SideBarLeft />
        <Main>{children}</Main>
      </Wrapper>
      <Footer />
    </>
  );
};

export default ProfileLayout;
