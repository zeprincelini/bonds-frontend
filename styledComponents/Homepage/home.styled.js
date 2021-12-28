import styled from "styled-components";

export const Navigation = styled.div`
  width: 100%;
  height: 50px;
  background-color: #ffffff;
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  position: sticky;
  top: 0px;
  z-index: 1;

  ul {
    display: flex;
    align-items: center;
    gap: 5px;

    li {
      list-style: none;
      color: #4e4b4b;
      padding: 5px;
      cursor: pointer;
      &:hover {
        background: #f04f2f;
        border-radius: 7px;
        color: #ffffff;
      }
    }
  }
`;

export const Search = styled.div`
  background-color: #fff;
  border-radius: 7px;
  width: 60%;
  height: 35px;
  display: flex;
  align-items: center;
  border: 1px solid #c7c7c7;
  input[type="search"] {
    border: none;
    width: 90%;
    height: 30px;
    margin-left: 20px;
  }
  input[type="search"]:focus {
    outline: none;
  }
`;

export const FooterStyle = styled.div`
  background-color: #f04f2f;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  color: #fff;
`;

//homepage main body

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const WrapperLeft = styled.div`
  height: calc(100vh - 50px);
  position: sticky;
  top: 50px;
  overflow-y: scroll;
  flex: 2.5;
  padding: 0px 10px;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 20px;
  }
`;

export const WrapperLeftLinks = styled.a`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  width: 90%;
  margin-bottom: 10px;
  background: ${(props) =>
    props.href === props.pathname ? "#f04f2f;" : "none;"}
  cursor: pointer;
  color: ${(props) => (props.href === props.pathname ? "#ffffff;" : "#4e4b4b;")}
  transition: 0.5s ease;
  &:hover {
    background: #f04f2f;
    color: #ffffff;
  }
  li {
    list-style: none;
  }
  &:first-child {
    margin-top: 20px;
  }
`;

export const WrapperLeftFriends = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  cursor: pointer;
  padding: 10px;
  width: 90%;
  margin-bottom: 10px;
  transition: 0.5s ease;
  &:hover {
    background: #e5e5e5;
  }
  li {
    list-style: none;
  }
`;

export const WrapperMid = styled.div`
  flex: 6.5;
  padding: 30px;
`;

/* wrapperMid section */

export const Post = styled.form`
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  width: 100%;
  height: 200px;
  padding: 10px;
  textarea {
    border: none;
    width: 90%;
    &:focus {
      outline: none;
    }
  }
  button {
    background: green;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
  }
`;

export const Posts = styled.div`
  margin-top: 40px;
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .postTop {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .postTopLeft {
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }
  .postFooter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .postLikes {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }
`;

export const PostIcon = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  p {
    font-weight: 600;
  }
`;

export const WrapperRight = styled.div`
  flex: 3;
  padding: 5px;
  .b-day {
    display: flex;
    align-items: center;
    gap: 10px;
    p {
      color: gray;
    }
    span {
      color: #000000;
      font-weight: 500;
    }
  }
  .ad {
    img {
      border-radius: 10px;
      background-size: contain;
    }
  }
  .online {
    h3 {
      color: gray;
    }
    .online-cover {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    .friend {
      display: flex;
      align-items: center;
      gap: 15px;
      .icon {
        position: relative;
        .notification {
          position: absolute;
          top: 0px;
          right: 0px;
          width: 10px;
          height: 10px;
          background: green;
          border-radius: 50%;
          border: 1px solid #ffffff;
        }
      }
    }
  }
`;
