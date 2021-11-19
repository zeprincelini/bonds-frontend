import Link from "next/link";
import { Container, Search } from "../../styledComponents/Homepage/home.styled";

const NavBar = () => {
  return (
    <Container>
      <Link href="/">
        <a>
          <img
            src="/assets/logo/bonds.png"
            alt="logo"
            width="100px"
            height="auto"
          />
        </a>
      </Link>
      <Search>
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
          <Link href="/">Profile</Link>
        </li>
        <li>
          <Link href="/">Bonds</Link>
        </li>
        <li>
          <Link href="/">Inbox</Link>
        </li>
      </ul>
    </Container>
  );
};

export default NavBar;
