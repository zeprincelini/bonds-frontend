import {
  faCity,
  faEllipsisV,
  faFile,
  faFlag,
  faHeart,
  faMapMarker,
  faPeopleArrows,
  faSmile,
  faTag,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileLayout from "../../layouts/profile/profile";
import {
  Banner,
  ProfileBody,
  ProfileUser,
} from "../../styledComponents/Profile/profile.styled";
import {
  Posts,
  PostIcon,
  Post,
} from "../../styledComponents/Homepage/home.styled";

const Profile = () => {
  return (
    <>
      <Banner>
        <img
          src="/assets/images/banner.jpg"
          alt="banner"
          className="bannerImg"
        />
        <img src="https://picsum.photos/50/50" className="bannerUserImg" />
      </Banner>
      <ProfileUser>
        <span>John Doe</span>
        <span>Nice to meet you</span>
      </ProfileUser>
      <ProfileBody>
        <div className="profileBodyLeft">
          <Post>
            <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
              <img
                src="https://picsum.photos/50/50"
                style={{ borderRadius: "50%" }}
              />
              <textarea placeholder="What's on your mind?"></textarea>
            </div>
            <hr
              style={{ width: "90%", marginTop: "20px", marginBottom: "20px" }}
            />
            <div
              style={{
                display: "flex",
                gap: "20px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <PostIcon>
                <FontAwesomeIcon icon={faFile} color="red" />
                <p>Photo or Video</p>
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
              <button>share</button>
            </div>
          </Post>
          <Posts>
            <div className="postTop">
              <div className="postTopLeft">
                <img
                  src="https://picsum.photos/50/50"
                  style={{ borderRadius: "50%" }}
                />
                <p>Jordan Pierce</p>
                <p style={{ color: "gray", fontSize: "13px" }}>5 mins ago</p>
              </div>
              <div className="postTopRight">
                <FontAwesomeIcon icon={faEllipsisV} />
              </div>
            </div>
            <div className="postBody">
              <img
                src="assets/images/ppl.jpg"
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
                  }}
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
                  }}
                >
                  <FontAwesomeIcon icon={faHeart} color="#ffffff" />
                </div>
                <p>23 people liked this</p>
              </div>
              <div className="postComments">
                <p style={{ color: "gray" }}>9 comments</p>
              </div>
            </div>
          </Posts>
        </div>
        <div className="profileBodyRight">
          <div>
            <h3>User Information</h3>
            <div className="userInfo">
              <div className="info">
                <FontAwesomeIcon icon={faCity} />
                <span>City:</span>
                <span>Madrid</span>
              </div>
              <div className="info">
                <FontAwesomeIcon icon={faFlag} />
                <span>From:</span>
                <span>Mexico</span>
              </div>
              <div className="info">
                <FontAwesomeIcon icon={faPeopleArrows} />
                <span>Relationship:</span>
                <span>Single</span>
              </div>
            </div>
            <div className="userFriends">
              <h3>Bonds</h3>
              <div className="friends">
                <div className="img">
                  <img src="https://picsum.photos/80/80" />
                  <span>Jane doe</span>
                </div>
                <div className="img">
                  <img src="https://picsum.photos/80/80" />
                  <span>Jane doe</span>
                </div>
                <div className="img">
                  <img src="https://picsum.photos/80/80" />
                  <span>Jane doe</span>
                </div>
                <div className="img">
                  <img src="https://picsum.photos/80/80" />
                  <span>Jane doe</span>
                </div>
                <div className="img">
                  <img src="https://picsum.photos/80/80" />
                  <span>Jane doe</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ProfileBody>
    </>
  );
};

export default Profile;

Profile.getLayout = function PageLayout(page) {
  return <ProfileLayout>{page}</ProfileLayout>;
};
