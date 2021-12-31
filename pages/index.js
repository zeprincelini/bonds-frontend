import { useRef, useState, useCallback } from "react";
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
import { FriendsPosts, PostBase } from "../http-requests/api";
import { format } from "timeago.js";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/dist/client/router";

export default function Home({ posts }) {
  const { token, id } = useSelector((state) => state.loginReducer);
  const router = useRouter();
  const handleFile = useRef();
  const desc = useRef();
  const [img, setImg] = useState();
  const grabFile = () => {
    handleFile.current.click();
  };
  const uploadFile = (e) => {
    setImg(e.target.files[0]);
  };

  const createPost = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("user", id);
    formData.append("description", desc.current.value),
      formData.append("postImg", img);
    try {
      const res = await axios.post(`${PostBase}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "file.type",
        },
      });
      toast.success(res.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  const likePost = async (postId) => {
    try {
      const res = await axios.put(
        `${PostBase}/${postId}/like`,
        { userId: id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(res.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  const [displayPopover, setDisplayPopover] = useState(false);
  const toggle = useCallback(() => {
    setDisplayPopover(!displayPopover);
  }, [displayPopover]);
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
      <Post onSubmit={createPost} encType="multipart/form-data">
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <img
            src="https://picsum.photos/50/50"
            style={{ borderRadius: "50%" }}
          />
          <textarea placeholder="What's on your mind?" ref={desc}></textarea>
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
          <PostIcon onClick={grabFile}>
            <FontAwesomeIcon icon={faFile} color="red" />
            <p>Photo or Video</p>
            <input
              type="file"
              ref={handleFile}
              accept=".png,.jpg,.jpeg"
              onChange={uploadFile}
              name="postImg"
              hidden
            />
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
          <button type="submit">share</button>
        </div>
      </Post>
      {posts.length > 0 ? (
        posts.map((post) => {
          return (
            <Posts key={post._id}>
              <div className="postTop">
                <div className="postTopLeft">
                  <img
                    src={
                      post.user.profilePicture
                        ? post.user.profilePicture
                        : "https://picsum.photos/50/50"
                    }
                    style={{ borderRadius: "50%" }}
                  />
                  <p>{post.user.username}</p>
                  <p style={{ color: "gray", fontSize: "13px" }}>
                    {format(post.createdAt)}
                  </p>
                </div>
                <div className="postTopRight" onClick={toggle}>
                  <FontAwesomeIcon icon={faEllipsisV} />
                  {displayPopover && (
                    <div className="popover">
                      <p>Edit Post</p>
                      <p> Delete Post</p>
                    </div>
                  )}
                </div>
              </div>
              <div className="postdesc" style={{ padding: "10px 0px" }}>
                {post.description && post.description}
              </div>
              <div className="postBody">
                <img
                  src={
                    post.img.includes("cloudinary")
                      ? post.img
                      : "assets/images/ppl.jpg"
                  }
                  width="100%"
                  height="auto"
                  style={{ objectFit: "contain", cursor: "pointer" }}
                  onClick={() => router.replace(`post/${post._id}`)}
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
                    onClick={() => likePost(post._id)}
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
                  {post.likes.length > 0 ? (
                    <p style={{ color: "gray", fontSize: "14px" }}>
                      {post.likes.length} person/people liked this
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="postComments">
                  <p style={{ color: "gray", fontSize: "14px" }}>9 comments</p>
                </div>
              </div>
            </Posts>
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
