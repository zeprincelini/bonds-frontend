import { useState, useEffect, useRef } from "react";
import {
  faCity,
  faFlag,
  faPeopleArrows,
  faSpinner,
  faPlus,
  faTimes,
  faEdit,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileLayout from "../../layouts/profile/profile";
import {
  Banner,
  ProfileBody,
  ProfileUser,
} from "../../styledComponents/Profile/profile.styled";

import axios from "axios";
import { GetUser, PostBase, GetFriends } from "../../http-requests/api";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import PostForm from "../../components/Post/PostForm";
import PostComponent from "../../components/Post";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";

const Profile = ({ user, profileId }) => {
  const { id, token } = useSelector((state) => state.loginReducer);
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [checkBond, setCheckBond] = useState(false);
  const [loadBond, setLoadBond] = useState(false);
  const [friends, setFriends] = useState([]);
  const [tag, setTag] = useState("");
  const router = useRouter();
  const bannerImg = useRef();

  const forceRefresh = () => {
    setRefresh(!refresh);
  };

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${PostBase}/user/posts/${profileId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setLoading(false);
        console.log(res.data.data);
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
    getPosts();
  }, [refresh, profileId, token]);

  useEffect(() => {
    const getCurrentUser = async () => {
      try {
        const res = await axios.get(`${GetUser}/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (res.data.data.following.includes(profileId)) {
          setCheckBond(true);
        } else {
          setCheckBond(false);
        }
      } catch (err) {
        toast.error(err.message);
      }
    };
    getCurrentUser();
  }, [id, loadBond, profileId, token]);

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
      toast.success(res.data.message);
    } catch (err) {
      toast.error("error creating bond");
    }
  };

  useEffect(() => {
    const getFriends = async () => {
      try {
        const res = await axios.get(`${GetFriends}/${profileId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setFriends(res.data.data);
      } catch (err) {
        toast.error(err.message);
      }
    };
    getFriends();
  }, [profileId, token]);

  const getFile = (value) => {
    setTag(value);
    bannerImg.current.click();
  };

  const reloader = () => {
    router.replace(router.asPath);
  };

  const updateProfile = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("userId", profileId);
    formData.append("postImg", file);
    formData.append("tag", tag);
    try {
      const res = await axios.put(`${GetUser}/${profileId}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      bannerImg.current.value = "";
      reloader();
      toast.success(res.data.message);
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <>
      <Toaster />
      <Banner>
        <div style={{ width: "100%", height: "100%", padding: "10px" }}>
          <Image
            src={
              user.coverPhoto.length > 0
                ? user.coverPhoto
                : "/assets/images/banner.jpg"
            }
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="cover"
            alt="banner"
            className="bannerImg"
          />
          <div className="banner-icon" onClick={() => getFile("coverPhoto")}>
            <FontAwesomeIcon icon={faEdit} color="#f04f2f" />
          </div>
        </div>
        <div className="user-img">
          <Image
            src={
              user.profilePicture.length > 0
                ? user.profilePicture
                : "https://picsum.photos/50/50"
            }
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="cover"
            alt="user"
            className="bannerUserImg"
          />
          <div
            className="banner-userIcon"
            onClick={() => getFile("profilePicture")}
          >
            <FontAwesomeIcon icon={faEdit} color="#f04f2f" />
          </div>
        </div>
        <input
          type="file"
          name="banner"
          hidden
          ref={bannerImg}
          onChange={(e) => updateProfile(e)}
        />
      </Banner>
      <ProfileUser>
        <span className="username">{user.username}</span>
        {/* <span>Nice to meet you</span> */}
        {id !== profileId && (
          <button onClick={() => bond()}>
            {checkBond ? (
              <>
                Bail <FontAwesomeIcon icon={faTimes} color="#ffffff" />
              </>
            ) : (
              <>
                Bond <FontAwesomeIcon icon={faPlus} color="#ffffff" />
              </>
            )}{" "}
          </button>
        )}
      </ProfileUser>
      <ProfileBody>
        <div className="profileBodyLeft">
          {id === profileId && (
            <div style={{ marginBottom: "40px" }}>
              {" "}
              <PostForm toast={toast} reload={forceRefresh} />{" "}
            </div>
          )}
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
                {friends &&
                  friends.map((bonds, id) => (
                    <Link href={`/profile/${bonds._id}`} key={id}>
                      <a>
                        <div className="img">
                          <Image
                            src={
                              bonds.profilePicture.length > 0
                                ? bonds.profilePicture
                                : "https://picsum.photos/80/80"
                            }
                            alt="profile"
                            width="80px"
                            height="80px"
                            className="rounded-img"
                          />
                          <span
                            style={{
                              color: "gray",
                              fontSize: "15px",
                              textTransform: "capitalize",
                            }}
                          >
                            {bonds.username}
                          </span>
                        </div>
                      </a>
                    </Link>
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
