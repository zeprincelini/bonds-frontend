import NavBar from "../../components/HomeComponents/nav";
import Footer from "../../components/HomeComponents/footer";

const HomeLayout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default HomeLayout;
