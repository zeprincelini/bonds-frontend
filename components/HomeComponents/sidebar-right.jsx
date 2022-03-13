import Image from "next/image";

import { faBirthdayCake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { WrapperRight } from "../../styledComponents/Homepage/home.styled";

const SideBarRight = () => {
  return (
    <WrapperRight>
      <div className="b-day">
        <FontAwesomeIcon icon={faBirthdayCake} color="#FF2900" />
        <p>
          <span>Jane Smith</span> and <span>3 others</span> have birthdays today
        </p>
      </div>
      <div className="ad">
        <Image
          src="/assets/images/ad.jpg"
          alt=""
          width="100%"
          height="100%"
          objectFit="contain"
        />
      </div>
      <div className="online">
        <h3>Online Bonds</h3>
        <div className="online-cover">
          <div className="friend">
            <div className="icon">
              <Image
                width="50px"
                height="50px"
                alt=""
                src="https://picsum.photos/50/50"
                style={{ borderRadius: "50%" }}
              />
              <div className="notification"></div>
            </div>
            <p style={{ fontWeight: 500 }}>Malachi Kemi</p>
          </div>
        </div>
      </div>
    </WrapperRight>
  );
};

export default SideBarRight;
