import { PostBase } from "../../http-requests/api";
import axios from "axios";
import HomeLayout from "../../layouts/home/home";
import PostComponent from "../../components/Post";
import toast, { Toaster } from "react-hot-toast";

const Post = ({ posts }) => {
  return (
    <>
      <Toaster />
      {posts && posts.length > 0 ? (
        posts.map((post) => {
          return (
            <PostComponent
              key={post._id}
              toast={toast}
              post={post}
              // reload={forceRefresh}
            />
          );
        })
      ) : (
        <p style={{ color: "gray", fontSize: "14px" }}>no liked posts!</p>
      )}
    </>
  );
};

export const getServerSideProps = async (context) => {
  const token = context.req.cookies["token"];
  const id = context.params.userId;

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const res = await axios.get(`${PostBase}/liked/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = res.data.data;

  return {
    props: { posts: data },
  };
};

export default Post;

Post.getLayout = function PageLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
