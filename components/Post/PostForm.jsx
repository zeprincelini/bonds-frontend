import { useState, useRef } from "react";
import { useRouter } from "next/dist/client/router";
import axios from "axios";
import { Post, PostIcon } from "../../styledComponents/Homepage/home.styled";
import {
  faFile,
  faMapMarker,
  faSmile,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { PostBase } from "../../http-requests/api";

const PostForm = (props) => {
  const { token, id, user } = useSelector((state) => state.loginReducer);
  const router = useRouter();
  const [load, setLoad] = useState(false);
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
    formData.append("description", desc.current.value);
    formData.append("postImg", img);
    try {
      setLoad(true);
      const res = await axios.post(`${PostBase}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      props.toast.success(res.data.message);
      setLoad(false);
      if (props.reload) {
        props.reload();
      } else {
        router.reload(window.location.pathname);
      }
    } catch (err) {
      setLoad(false);
      console.log(err);
    }
  };

  return (
    <Post onSubmit={createPost} encType="multipart/form-data">
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <img
          src="https://picsum.photos/50/50"
          style={{ borderRadius: "50%" }}
        />
        <textarea
          placeholder={`What's on your mind ${user.username.split(" ")[0]}?`}
          ref={desc}
        ></textarea>
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
        <button type="submit">{load ? "loading" : "share"}</button>
      </div>
    </Post>
  );
};

export default PostForm;
