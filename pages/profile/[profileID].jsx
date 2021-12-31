import { useState, useEffect } from "react";
import {
  faCity,
  faEllipsisV,
  faFile,
  faFlag,
  faHeart,
  faMapMarker,
  faPeopleArrows,
  faSmile,
  faTag,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileLayout from "../../layouts/profile/profile";
import {
  Banner,
  ProfileBody,
  ProfileUser,
} from "../../styledComponents/Profile/profile.styled";
import {
  Posts,
  PostIcon,
  Post,
} from "../../styledComponents/Homepage/home.styled";

import axios from "axios";
import { GetUser, PostBase } from "../../http-requests/api";
import { useSelector } from "react-redux";
import { format } from "timeago.js";

const Profile = ({ user }) => {
  const { id, token } = useSelector((state) => state.loginReducer);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState();
  const [refresh, setRefresh] = useState(false);

  const getPosts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${PostBase}/user/posts/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setLoading(false);
      setPosts(res.data.data);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      <Banner>
        <img
          src="/assets/images/banner.jpg"
          alt="banner"
          className="bannerImg"
        />
        <img src="https://picsum.photos/50/50" className="bannerUserImg" />
      </Banner>
      <ProfileUser>
        <span>{user.username}</span>
        <span>Nice to meet you</span>
      </ProfileUser>
      <ProfileBody>
        <div className="profileBodyLeft">
          <Post>
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <img
                src="https://picsum.photos/50/50"
                style={{ borderRadius: "50%" }}
              />
              <textarea placeholder="What's on your mind?"></textarea>
            </div>
            <hr
              style={{ width: "90%", marginTop: "20px", marginBottom: "20px" }}
            />
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
          {loading && (
            <p
              style={{ textAlign: "center", padding: "10px", fontSize: "13px" }}
            >
              Fetching Posts
            </p>
          )}
          {posts && posts.length == 0 ? (
            <p style={{ textAlign: "center", fontSize: "13px" }}>
              No posts added
            </p>
          ) : (
            posts.map((post) => (
              <Posts key={post._id}>
                <div className="postTop">
                  <div className="postTopLeft">
                    <img
                      src={
                        user.profilePicture
                          ? user.profilePicture
                          : "https://picsum.photos/50/50"
                      }
                      style={{ borderRadius: "50%" }}
                    />
                    <p>{user.username}</p>
                    <p style={{ color: "gray", fontSize: "13px" }}>
                      {format(post.createdAt)}
                    </p>
                  </div>
                  <div className="postTopRight">
                    <FontAwesomeIcon icon={faEllipsisV} />
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
                      }}
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
                      }}
                    >
                      <FontAwesomeIcon icon={faHeart} color="#ffffff" />
                    </div>
                    <p>23 people liked this</p>
                  </div>
                  <div className="postComments">
                    <p style={{ color: "gray" }}>9 comments</p>
                  </div>
                </div>
              </Posts>
            ))
          )}
        </div>
        <div className="profileBodyRight">
          <div>
            <h3>User Information</h3>
            <div className="userInfo">
              <div className="info">
                <FontAwesomeIcon icon={faCity} />
                <span>City:</span>
                <span>Madrid</span>
              </div>
              <div className="info">
                <FontAwesomeIcon icon={faFlag} />
                <span>From:</span>
                <span>Mexico</span>
              </div>
              <div className="info">
                <FontAwesomeIcon icon={faPeopleArrows} />
                <span>Relationship:</span>
                <span>Single</span>
              </div>
            </div>
            <div className="userFriends">
              <h3>Bonds</h3>
              <div className="friends">
                {user.followers.concat(user.following).map((bonds, id) => (
                  <div className="img" key={id}>
                    <img src="https://picsum.photos/80/80" />
                    <span>Jane doe</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ProfileBody>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const token = context.req.cookies["token"];
  const profileId = context.params.profileId;

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const res = await axios.get(`${GetUser}/${profileId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = res.data.data;

  return {
    props: { user: data },
  };
};

// export async function getStaticProps(context) {
//   const token = context.req.cookies["token"];
//   const res = await axios.get(`${GetUser}/${context.params.profileId}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   const data = res.data.data;

//   return {
//     props: { posts: data },
//   };
// }

// export async function getStaticPaths() {
//   const res = await axios.get(`${GetUser}/accounts`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   const allusers = res.data;

//   const ids = allusers.map((id) => {
//     return id._id;
//   });

//   const paths = ids.map((id) => {
//     return { params: { profileId: id.toString() } };
//   });
//   return {
//     paths,
//     fallback: false,
//   };
// }

export default Profile;

Profile.getLayout = function PageLayout(page) {
  return <ProfileLayout>{page}</ProfileLayout>;
};
