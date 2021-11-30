import ProfileLayout from "../layouts/profile/profile";
import { Banner } from "../styledComponents/Profile/profile.styled";

const Profile = () => {
  return (
    <>
      <Banner>
        <img
          src="assets/images/banner.jpg"
          alt="banner"
          className="bannerImg"
        />
        <img src="https://picsum.photos/50/50" className="bannerUserImg" />
      </Banner>
    </>
  );
};

export default Profile;

Profile.getLayout = function PageLayout(page) {
  return <ProfileLayout>{page}</ProfileLayout>;
};
