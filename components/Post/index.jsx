import { useState, useCallback } from "react";
import { Posts } from "../../styledComponents/Homepage/home.styled";
import axios from "axios";
import { useSelector } from "react-redux";
import { format } from "timeago.js";
import { useRouter } from "next/dist/client/router";
import Image from "next/image";
import PostModal from "../PostModal";
import {
  faEllipsisV,
  faHeart,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PostBase, PostComment } from "../../http-requests/api";

const PostComponent = ({ toast, post, reload }) => {
  const { id, token } = useSelector((state) => state.loginReducer);
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const modalOpen = () => {
    setOpen(true);
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
    <>
      {open ? (
        <PostModal open={open} setOpen={setOpen} postID={post._id} />
      ) : null}
      <Posts>
        <div className="postTop">
          <div className="postTopLeft">
            <Image
              src={
                post.user.profilePicture
                  ? post.user.profilePicture
                  : "https://picsum.photos/50/50"
              }
              width="50px"
              height="50px"
              alt="user profile"
              className="postImg"
              onClick={() => router.replace(`/profile/${post.user._id}`)}
            />
            <p>{post.user.username}</p>
            <p style={{ color: "gray", fontSize: "13px" }}>
              {format(post.createdAt)}
            </p>
          </div>
          {post.user._id === id ||
            (post.user === id && (
              <div className="postTopRight" onClick={toggle}>
                <FontAwesomeIcon icon={faEllipsisV} />
                {displayPopover && (
                  <div className="popover">
                    <p>Edit Post</p>
                    <p> Delete Post</p>
                  </div>
                )}
              </div>
            ))}
        </div>
        <div className="postdesc" style={{ padding: "10px 0px" }}>
          {post.description && post.description}
        </div>
        <div className="postBody">
          <Image
            src={
              post.img.includes("cloudinary")
                ? post.img
                : "/assets/images/ppl.jpg"
            }
            width="100%"
            height="50px"
            alt="post image"
            objectFit="cover"
            layout="responsive"
            onClick={() => modalOpen()}
          />
        </div>
        <div className="postFooter">
          <div className="postLikes">
            <div
              style={{
                borderRadius: "50%",
                background: "#0078B9",
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
            {/* <div
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
            </div> */}
            {post.likes.length > 0 ? (
              <p style={{ color: "gray", fontSize: "14px" }}>
                {post.likes.length} person/people liked this
              </p>
            ) : (
              ""
            )}
          </div>
          {post.comment.length > 0 && (
            <div className="postComments">
              <p style={{ color: "gray", fontSize: "14px" }}>
                {post.comment.length} comment(s)
              </p>
            </div>
          )}
        </div>
      </Posts>
    </>
  );
};

export default PostComponent;
