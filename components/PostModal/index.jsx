import { useEffect, useState } from "react";
import Modal from "react-modal";
import { PostBase } from "../../http-requests/api";
import axios from "axios";
import { useSelector } from "react-redux";
import { Dialog } from "../../styledComponents/Homepage/home.styled";

const PostModal = ({ open, setOpen, id }) => {
  Modal.setAppElement("#__next");
  const { token } = useSelector((state) => state.loginReducer);
  const [post, setPost] = useState({});
  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`${PostBase}/${id}`, {
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
  }, [id]);
  return (
    <Modal isOpen={open}>
      <Dialog>
        <div>{post && post.description}</div>
        <button onClick={() => setOpen(false)}>close me</button>
      </Dialog>
    </Modal>
  );
};

export default PostModal;
