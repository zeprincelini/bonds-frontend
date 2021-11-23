import HomeLayout from "../../layouts/home/home";

const Posts = () => {
  return <p>Posts</p>;
};

export default Posts;

Posts.getLayout = function PageLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
