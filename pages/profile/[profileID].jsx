import { useState, useEffect } from "react";
import {
  faCity,
  faFlag,
  faPeopleArrows,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileLayout from "../../layouts/profile/profile";
import {
  Banner,
  ProfileBody,
  ProfileUser,
} from "../../styledComponents/Profile/profile.styled";

import axios from "axios";
import { GetUser, PostBase } from "../../http-requests/api";
import { useSelector } from "react-redux";
import PostForm from "../../components/Post/PostForm";
import PostComponent from "../../components/Post";
import toast, { Toaster } from "react-hot-toast";

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

  const forceRefresh = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    getPosts();
  }, [refresh]);
  return (
    <>
      <Toaster />
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
          <PostForm toast={toast} reload={forceRefresh} />
          {loading && (
            <p
              style={{ textAlign: "center", padding: "10px", fontSize: "13px" }}
            >
              Fetching Posts
            </p>
          )}
          {posts && posts.length > 0 ? (
            posts.map((post) => {
              return (
                <PostComponent
                  toast={toast}
                  key={post._id}
                  post={post}
                  reload={forceRefresh}
                />
              );
            })
          ) : (
            <p style={{ textAlign: "center", fontSize: "13px" }}>
              No posts added
            </p>
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
