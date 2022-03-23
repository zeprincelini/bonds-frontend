import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Image from "next/image";
import { SearchUsers } from "../../http-requests/api";
import toast from "react-hot-toast";
import HomeLayout from "../../layouts/home/home";
import { Card, Container } from "../../styledComponents/search/search.styled";

const Search = ({ token }) => {
  const { searchValue } = useSelector((state) => state.searchReducer);

  const [data, setData] = useState([]);
  console.log(searchValue);

  useEffect(() => {
    const searchDb = async () => {
      try {
        const res = await axios.get(SearchUsers, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            search: searchValue || "",
          },
        });
        setData(res.data.data);
      } catch (err) {
        toast.error(err.message ? err.message : err.response.data);
      }
    };
    searchDb();
  }, [searchValue]);
  return (
    <div>
      {data.length > 0 ? (
        <Container>
          {data.map((item) => (
            <Card key={item._id}>
              <div
                style={{ width: "100%", height: "150px", textAlign: "center" }}
              >
                <Image
                  src={
                    item.profilePicture.length > 0
                      ? item.profilePicture
                      : "https://picsum.photos/50/50"
                  }
                  width="100%"
                  height="100%"
                  objectFit="cover"
                  alt="profile"
                />
              </div>
              <p className="search-name">{item.username}</p>
            </Card>
          ))}
        </Container>
      ) : (
        <p style={{ color: "gray" }}>nothing found</p>
      )}
    </div>
  );
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
    props: { token },
  };
}

export default Search;

Search.getLayout = function PageLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
