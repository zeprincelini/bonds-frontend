import Head from "next/head";
import axios from "axios";
import HomeLayout from "../layouts/home/home";
import { FriendsPosts } from "../http-requests/api";
import toast, { Toaster } from "react-hot-toast";
import PostComponent from "../components/Post";
import PostForm from "../components/Post/PostForm";

export default function Home({ posts }) {
  return (
    <>
      <Toaster />
      <Head>
        <title>Bonds</title>
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="social network, bonds, relationship, friendship, love, fun, entertainment"
        />
      </Head>
      <div>
        <PostForm toast={toast} />
      </div>
      {posts.length > 0 ? (
        posts.map((post) => {
          return <PostComponent key={post._id} toast={toast} post={post} />;
        })
      ) : (
        <p style={{ color: "gray", fontSize: "14px" }}>no posts yet!</p>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const token = context.req.cookies["token"];
  const id = context.req.cookies["id"];

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const res = await axios.get(`${FriendsPosts}/${JSON.parse(id)}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = res.data.data;

  return {
    props: { posts: data },
  };
}

Home.getLayout = function PageLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
