import { useEffect, useState } from "react";
import Modal from "react-modal";
import { PostBase, PostComment } from "../../http-requests/api";
import axios from "axios";
import { useSelector } from "react-redux";
import { Dialog } from "../../styledComponents/Homepage/home.styled";
import {
  faTimes,
  faThumbsUp,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { format } from "timeago.js";
import toast from "react-hot-toast";

const PostModal = ({ open, setOpen, postID }) => {
  Modal.setAppElement("#__next");
  const { token, id } = useSelector((state) => state.loginReducer);
  const [post, setPost] = useState({});
  const [refresh, setRefresh] = useState(false);
  const [commentVal, setCommentVal] = useState("");

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`${PostBase}/${postID}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setPost(res.data.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getPost();
  }, [postID, refresh, token]);

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
      setRefresh(!refresh);
    } catch (err) {
      console.log(err);
    }
  };

  const createComment = async (val) => {
    try {
      const res = await axios.post(
        PostComment,
        { userId: id, postId: post._id, comment: val },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success(res.data.message);
      setRefresh(!refresh);
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <Modal isOpen={open}>
      <Dialog>
        <div className="post-top">
          <div className="profile">
            <Image
              src={
                post.user?.profilePicture
                  ? post.user?.profilePicture
                  : "https://picsum.photos/50/50"
              }
              width="50px"
              height="50px"
              alt="user profile"
              className="rounded-img"
            />
            <p>{post.user?.username}</p>
            <p style={{ color: "gray", fontSize: "13px" }}>
              {format(post.createdAt)}
            </p>
          </div>
          <button className="close" onClick={() => setOpen(false)}>
            <FontAwesomeIcon icon={faTimes} color="#fff" />
          </button>
        </div>
        <div className="post-body">
          <p>{post && post.description}</p>
          <div>
            <Image
              src={
                post.img?.includes("cloudinary")
                  ? post.img
                  : "/assets/images/ppl.jpg"
              }
              width="100%"
              height="50px"
              alt="post image"
              objectFit="cover"
              layout="responsive"
            />
          </div>
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
            {post.likes?.length > 0 ? (
              <p style={{ color: "gray", fontSize: "14px" }}>
                {post.likes?.length} person/people liked this
              </p>
            ) : (
              ""
            )}
          </div>
          {post.comment?.length > 0 && (
            <div className="postComments">
              <p style={{ color: "gray", fontSize: "14px" }}>
                {post.comment?.length} comment(s)
              </p>
            </div>
          )}
        </div>
        {post.comment?.length > 0 && (
          <div className="comment-list">
            {post.comment
              .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
              .map((msg) => (
                <div key={msg._id} className="comment-body">
                  <div className="comment-body-top">
                    <div className="comment-user">
                      <div>
                        <Image
                          src={
                            msg.user?.profilePicture
                              ? msg.user?.profilePicture
                              : "https://picsum.photos/50/50"
                          }
                          width="50px"
                          height="50px"
                          alt="user profile"
                          className="rounded-img"
                        />
                      </div>
                      <p>{msg.user?.username}</p>
                    </div>
                    <p style={{ color: "gray", fontSize: "13px" }}>
                      {format(msg.createdAt)}
                    </p>
                  </div>
                  <div className="comment-main">{msg.message}</div>
                </div>
              ))}
          </div>
        )}
        <div className="comment-input">
          <input
            type="text"
            placeholder="write comment..."
            name="comment"
            onChange={(e) => setCommentVal(e.target.value)}
          />
          <FontAwesomeIcon
            onClick={() => createComment(commentVal)}
            icon={faPaperPlane}
            color="#f0522d"
            style={{ cursor: "pointer", width: "20px", height: "20px" }}
          />
        </div>
      </Dialog>
    </Modal>
  );
};

export default PostModal;
