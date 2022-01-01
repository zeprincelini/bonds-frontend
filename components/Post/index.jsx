import { useState, useCallback } from "react";
import { Posts } from "../../styledComponents/Homepage/home.styled";
import axios from "axios";
import { useSelector } from "react-redux";
import { format } from "timeago.js";
import { useRouter } from "next/dist/client/router";
import {
  faEllipsisV,
  faHeart,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostBase } from "../../http-requests/api";

const PostComponent = ({ toast, post, reload }) => {
  const { id, token } = useSelector((state) => state.loginReducer);
  const router = useRouter();
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
      if (reload) {
        reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const [displayPopover, setDisplayPopover] = useState(false);
  const toggle = useCallback(() => {
    setDisplayPopover(!displayPopover);
  }, [displayPopover]);

  return (
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
        {post.user._id === id && (
          <div className="postTopRight" onClick={toggle}>
            <FontAwesomeIcon icon={faEllipsisV} />
            {displayPopover && (
              <div className="popover">
                <p>Edit Post</p>
                <p> Delete Post</p>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="postdesc" style={{ padding: "10px 0px" }}>
        {post.description && post.description}
      </div>
      <div className="postBody">
        <img
          src={
            post.img.includes("cloudinary") ? post.img : "assets/images/ppl.jpg"
          }
          width="100%"
          height="auto"
          style={{ objectFit: "contain", cursor: "pointer" }}
          onClick={() => router.replace(`/post/${post._id}`)}
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
};

export default PostComponent;
