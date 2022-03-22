import { useState, useRef } from "react";
import axios from "axios";
import Image from "next/image";
import { Post, PostIcon } from "../../styledComponents/Homepage/home.styled";
import {
  faFile,
  faMapMarker,
  faSmile,
  faTag,
  faSpinner,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";
import { PostBase } from "../../http-requests/api";
import toast from "react-hot-toast";

const PostForm = (props) => {
  const { token, id, user } = useSelector((state) => state.loginReducer);
  const [load, setLoad] = useState(false);
  const handleFile = useRef();
  const desc = useRef();
  const [img, setImg] = useState(null);
  const grabFile = () => {
    handleFile.current.click();
  };
  const uploadFile = (e) => {
    setImg(e.target.files[0]);
  };

  const createPost = async (e) => {
    e.preventDefault();
    if (desc.current.value === "" || null) {
      return toast.error("post cannot be empty");
    }
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
      desc.current.value = "";
      setImg(null);
      props.reload();
    } catch (err) {
      setLoad(false);
      props.toast.error(err.message);
    }
  };

  return (
    <Post onSubmit={createPost} encType="multipart/form-data">
      <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
        <Image
          src="https://picsum.photos/50/50"
          width={50}
          height={50}
          alt=""
          className="myImage"
        />
        <textarea
          placeholder={`What's on your mind ${user?.username.split(" ")[0]}?`}
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
        <PostIcon onClick={() => grabFile()}>
          <FontAwesomeIcon icon={faFile} color="red" />
          <p>Photo or Video</p>
          <input
            type="file"
            ref={handleFile}
            accept=".png,.jpg,.jpeg"
            onChange={(e) => uploadFile(e)}
            name="postImg"
            hidden
          />
        </PostIcon>
        {/* <PostIcon>
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
        </PostIcon> */}
        <button type="submit">
          {load ? (
            <FontAwesomeIcon
              icon={faSpinner}
              className="fa-spin"
              color="#ffffff"
            />
          ) : (
            "share"
          )}
        </button>
      </div>
      {img && (
        <div
          style={{
            position: "relative",
            display: "flex",
            padding: "5px",
            top: "-50px",
          }}
        >
          <Image
            src={URL.createObjectURL(img)}
            width="70px"
            height="70px"
            objectFit="cover"
            alt="select image"
          />
          <FontAwesomeIcon
            icon={faTimesCircle}
            color="#000"
            style={{ position: "absolute", cursor: "pointer", left: "65px" }}
            onClick={() => setImg(null)}
          />
        </div>
      )}
    </Post>
  );
};

export default PostForm;
