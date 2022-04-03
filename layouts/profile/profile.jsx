import NavBar from "../home/nav";
import Footer from "../home/footer";
import { Main, Wrapper } from "../../styledComponents/Profile/profile.styled";
import SideBarLeft from "../../components/HomeComponents/sidebar-left";
import FloatingNav from "../../components/mobileNavigation/floater";

const ProfileLayout = ({ children }) => {
  return (
    <>
      <FloatingNav />
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
