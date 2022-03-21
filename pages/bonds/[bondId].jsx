import axios from "axios";

import HomeLayout from "../../layouts/home/home";
import { Container } from "../../styledComponents/Bond/bonds.styled";
import Chips from "../../components/Bonds/Chips";
import { GetFriends } from "../../http-requests/api";
const Bonds = ({ user }) => {
  return (
    <Container>
      <div className="search">
        <input type="search" placeholder="search bonds" />
      </div>
      {user.length < 0 ? (
        <p style={{ color: "gray" }}>no bonds added</p>
      ) : (
        <div className="grid">
          {user && user.map((val) => <Chips user={val} key={val._id} />)}
        </div>
      )}
    </Container>
  );
};

export async function getServerSideProps(context) {
  const token = context.req.cookies["token"];
  const id = context.params.bondId;

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const res = await axios.get(`${GetFriends}/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = res.data.data;

  return {
    props: { user: data },
  };
}

export default Bonds;

Bonds.getLayout = function PageLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
