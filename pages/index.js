import {
  faEllipsisV,
  faFile,
  faHeart,
  faMapMarker,
  faSmile,
  faTag,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head";
import axios from "axios";
import HomeLayout from "../layouts/home/home";
import {
  Post,
  PostIcon,
  Posts,
} from "../styledComponents/Homepage/home.styled";
import { FriendsPosts } from "../http-requests/api";

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <title>Bonds</title>
        <meta charSet="utf-8" />
        <meta
          name="keywords"
          content="social network, bonds, relationshp, friendshp, love, fun, entertainment"
        />
      </Head>
      <Post>
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <img
            src="https://picsum.photos/50/50"
            style={{ borderRadius: "50%" }}
          />
          <textarea placeholder="What's on your mind?"></textarea>
        </div>
        <hr style={{ width: "90%", marginTop: "20px", marginBottom: "20px" }} />
        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PostIcon>
            <FontAwesomeIcon icon={faFile} color="red" />
            <p>Photo or Video</p>
          </PostIcon>
          <PostIcon>
            <FontAwesomeIcon icon={faTag} color="green" />
            <p>Tag</p>
          </PostIcon>
          <PostIcon>
            <FontAwesomeIcon icon={faMapMarker} color="blue" />
            <p>Location</p>
          </PostIcon>
          <PostIcon>
            <FontAwesomeIcon icon={faSmile} color="orange" />
            <p>Feelings</p>
          </PostIcon>
          <button>share</button>
        </div>
      </Post>
      {posts.length > 0 ? (
        posts.map((post) => (
          <Posts key={post._id}>
            <div className="postTop">
              <div className="postTopLeft">
                <img
                  src="https://picsum.photos/50/50"
                  style={{ borderRadius: "50%" }}
                />
                <p>Jordan Pierce</p>
                <p style={{ color: "gray", fontSize: "13px" }}>5 mins ago</p>
              </div>
              <div className="postTopRight">
                <FontAwesomeIcon icon={faEllipsisV} />
              </div>
            </div>
            <div className="postBody">
              <img
                src="assets/images/ppl.jpg"
                width="100%"
                height="auto"
                style={{ objectFit: "contain" }}
              />
            </div>
            <div className="postFooter">
              <div className="postLikes">
                <div
                  style={{
                    borderRadius: "50%",
                    background: "skyblue",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "4px",
                    cursor: "pointer",
                  }}
                  onClick={() => like()}
                >
                  <FontAwesomeIcon icon={faThumbsUp} color="#ffffff" />
                </div>
                <div
                  style={{
                    borderRadius: "50%",
                    background: "red",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "4px",
                    cursor: "pointer",
                  }}
                >
                  <FontAwesomeIcon icon={faHeart} color="#ffffff" />
                </div>
                {post.length > 0 ? (
                  <p style={{ color: "gray" }}>
                    {post.likes.length} people liked this people liked this
                  </p>
                ) : (
                  ""
                )}
              </div>
              <div className="postComments">
                <p style={{ color: "gray" }}>9 comments</p>
              </div>
            </div>
          </Posts>
        ))
      ) : (
        <p style={{ color: "gray", fontSize: "14px" }}>no posts yet!</p>
      )}
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await axios(`${FriendsPosts}/617c9c8d663f24849bc63d1a`, {
    headers: {
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxN2M5YzhkNjYzZjI0ODQ5YmM2M2QxYSIsImVtYWlsIjoia2lhQGtsby5jb20iLCJpc0FkbWluIjpmYWxzZSwiaWF0IjoxNjM4NDg2MTEyfQ.YEb3T8Vhnyk6jEmr7Hl2k3VPmPQNVJkdTQR6th8tzNg`,
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
