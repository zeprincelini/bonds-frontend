import { useState, useEffect } from "react";
import Head from "next/head";
import axios from "axios";
import HomeLayout from "../layouts/home/home";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FriendsPosts } from "../http-requests/api";
import toast, { Toaster } from "react-hot-toast";
import PostComponent from "../components/Post";
import PostForm from "../components/Post/PostForm";

export default function Home({ token, id }) {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState();
  const [refresh, setRefresh] = useState(false);

  const forceRefresh = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    const getAllPosts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${FriendsPosts}/${JSON.parse(id)}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setLoading(false);
        setPosts(
          res.data.data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          )
        );
      } catch (err) {
        setLoading(false);
      }
    };
    getAllPosts();
  }, [refresh, id, token]);
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
      <div style={{ marginBottom: "40px" }}>
        <PostForm toast={toast} reload={forceRefresh} />
      </div>
      {loading && (
        <div style={{ textAlign: "center", padding: "10px" }}>
          <FontAwesomeIcon
            icon={faSpinner}
            color="#f04f2f"
            className="fa-spin"
          />
        </div>
      )}
      {posts && posts.length > 0 ? (
        posts.map((post) => {
          return (
            <PostComponent
              key={post._id}
              toast={toast}
              post={post}
              reload={forceRefresh}
            />
          );
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

  return {
    props: { token, id },
  };
}

Home.getLayout = function PageLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
