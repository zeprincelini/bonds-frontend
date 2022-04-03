import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch } from "react-redux";
import {
  faSearch,
  faInbox,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import {
  Navigation,
  Search,
} from "../../styledComponents/Homepage/home.styled";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { setSearchValue } from "../../redux/features/search";
import debounce from "lodash.debounce";
import Image from "next/image";

const NavBar = () => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.loginReducer);
  const router = useRouter();

  const debouncedSearch = debounce((e) => {
    dispatch(setSearchValue(e.target.value));
  }, 700);

  return (
    <Navigation>
      <div className="isMobile">
        <Link href="/">
          <a>
            <Image
              src="/assets/logo/bondss-02.png"
              alt="logo"
              width="150px"
              height="50px"
              objectFit="contain"
            />
          </a>
        </Link>
        {/* <Link href="/inbox" className="mobile-inbox">
          <FontAwesomeIcon
            icon={faComments}
            color="gray"
            style={{ marginRight: "13px", fontSize: "20px" }}
          />
        </Link> */}
      </div>
      <Search
        onClick={() => router.replace("/search")}
        onChange={debouncedSearch}
      >
        <FontAwesomeIcon
          icon={faSearch}
          style={{ marginLeft: "10px", color: "gray" }}
        />
        <input
          type="search"
          name="search"
          placeholder="search for friends or posts"
        />
      </Search>
      <ul>
        <Link href="/">
          <li>Home</li>
        </Link>
        {/* <Link href={`/profile/${id}`}>
          <li>Profile</li>
        </Link> */}
        <Link href={`/bonds/${id}`}>
          <li>Bonds</li>
        </Link>
        <Link href="/inbox">
          <li>Inbox</li>
        </Link>
      </ul>
    </Navigation>
  );
};

export default NavBar;
