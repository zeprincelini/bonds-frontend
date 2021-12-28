import { PostBase } from "../../http-requests/api";
import axios from "axios";
import HomeLayout from "../../layouts/home/home";
import { Posts } from "../../styledComponents/Homepage/home.styled";
import { format } from "timeago.js";
import { faHeart, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Post = ({ post }) => {
  console.log(post);
  return (
    <>
      <Posts>
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
          {/* <div className="postTopRight">
            <FontAwesomeIcon icon={faEllipsisV} />
          </div> */}
        </div>
        <div className="postBody">
          <img
            src="../assets/images/ppl.jpg"
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
