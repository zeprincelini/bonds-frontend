import HomeLayout from "../layouts/home/home";
const Bonds = () => {
  return <div>bonds here</div>;
};

export default Bonds;

Bonds.getLayout = function PageLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
