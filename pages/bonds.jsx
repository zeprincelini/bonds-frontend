import HomeLayout from "../layouts/home/home";
const Bonds = () => {
  return <div>bonds here</div>;
};

export async function getServerSideProps(context) {
  const token = context.req.cookies["token"];

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default Bonds;

Bonds.getLayout = function PageLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
