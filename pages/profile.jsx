import HomeLayout from "../layouts/home/home";

const Profile = () => {
  return <div>profile here</div>;
};

export default Profile;

Profile.getLayout = function PageLayout(page) {
  return <HomeLayout>{page}</HomeLayout>;
};
