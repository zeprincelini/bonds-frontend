import { useState, useEffect } from "react";
import {
  faCity,
  faFlag,
  faPeopleArrows,
  faSpinner,
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
import { useRouter } from "next/router";
import PostForm from "../../components/Post/PostForm";
import PostComponent from "../../components/Post";
import toast, { Toaster } from "react-hot-toast";

const Profile = ({ user, profileId }) => {
  const { id, token } = useSelector((state) => state.loginReducer);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState();
  const [refresh, setRefresh] = useState(false);
  const [checkBond, setCheckBond] = useState(false);
  const [loadBond, setLoadBond] = useState(false);
  const router = useRouter();

  const getPosts = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${PostBase}/user/posts/${id}`, {
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
      console.log(err);
    }
  };

  const forceRefresh = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    getPosts();
  }, [refresh]);
  const bond = async () => {
    try {
      const res = await axios.put(
        `${GetUser}/${profileId}/follow`,
        { userId: id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLoadBond(!loadBond);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (user.following.includes(profileId)) {
      setCheckBond(true);
      console.log("we here baby");
    }
    setCheckBond(false);
    console.log("we ain't here baby");
  }, [loadBond]);
  return (
    <>
      <Toaster />
      <Banner>
        <img
          src={
            user.coverPhoto.length > 0
              ? user.coverPhoto
              : "/assets/images/banner.jpg"
          }
          alt="banner"
          className="bannerImg"
        />
        <img
          src={
            user.profilePicture.length > 0
              ? user.profilePicture
              : "https://picsum.photos/50/50"
          }
          className="bannerUserImg"
        />
      </Banner>
      <ProfileUser>
        <span>{user.username}</span>
        {/* <span>Nice to meet you</span> */}
        <button onClick={() => bond()}>{checkBond ? "Bail" : "Bond"}</button>
      </ProfileUser>
      <ProfileBody>
        <div className="profileBodyLeft">
          <PostForm toast={toast} reload={forceRefresh} />
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
    props: { user: data, profileId },
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
