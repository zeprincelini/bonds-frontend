import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  Navigation,
  Search,
} from "../../styledComponents/Homepage/home.styled";

const NavBar = () => {
  return (
    <Navigation>
      <Link href="/">
        <a>
          <img
            src="/assets/logo/bondss-02.png"
            alt="logo"
            width="150px"
            height="auto"
          />
        </a>
      </Link>
      <Search>
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
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/profile">Profile</Link>
        </li>
        <li>
          <Link href="/bonds">Bonds</Link>
        </li>
        <li>
          <Link href="/inbox">Inbox</Link>
        </li>
      </ul>
    </Navigation>
  );
};

export default NavBar;
