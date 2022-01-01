import { PostBase } from "../../http-requests/api";
import axios from "axios";
import HomeLayout from "../../layouts/home/home";
import PostComponent from "../../components/Post";
import toast, { Toaster } from "react-hot-toast";

const Post = ({ post }) => {
  return (
    <>
      <Toaster />
      <PostComponent toast={toast} post={post} />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const token = context.req.cookies["token"];
  const postId = context.params.postId;

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const res = await axios.get(`${PostBase}/${postId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = res.data.data;

  return {
    props: { post: data },
  };
};

export default Post;

Post.getLayout = function PageLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
