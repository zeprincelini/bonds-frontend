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

  @media (max-width: 768px) {
    display: block;
    height: auto;
    padding-bottom: 10px;
    ul {
      display: none;
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
  @media (max-width: 768px) {
    width: 100%;
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
  flex: 2;
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 8px 0 6px -6px rgb(0 0 0 / 0.2);
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 20px;
  }
  @media (max-width: 800px) {
    display: none;
  }
`;

export const WrapperLeftLinks = styled.a`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  width: 100%;
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

export const SignOut = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  width: 90%;
  margin-bottom: 10px;
  list-style: none;
  transition: 0.5s ease;
  cursor: pointer;
  color: #4e4b4b;
  &:hover {
    color: #f04f2f;
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
  .myImage {
    border-radius: 50%;
  }
  textarea {
    border: none;
    width: 90%;
    &:focus {
      outline: none;
    }
  }
  button {
    background: #f04f2f;
    color: #ffffff;
    border: none;
    width: 90px;
    height: 30px;
    border-radius: 4px;
    padding: 5px 10px;
    cursor: pointer;
  }
`;

export const Posts = styled.div`
  margin-bottom: 40px;
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
      .postImg {
        border-radius: 50%;
        cursor: pointer;
      }
    }
    .postTopRight {
      cursor: pointer;
      position: relative;
      .popover {
        position: absolute;
        top: 100%;
        left: 0;
        width: 100px;
        background: #ffffff;
        box-shadow: 0px 2px 10px 2px rgb(0 0 0 / 15%);
        p {
          padding: 10px;
          margin: 0px;
          font-size: 14px;
          text-align: left;
        }
        p:hover {
          background: #f04f2f;
          color: #ffffff;
        }
        p:nth-child(1) {
          border-bottom: 1px solid #c6c6c6;
        }
      }
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
  flex: 2;
  padding: 5px 10px;
  box-shadow: -8px 0 6px -6px rgb(0 0 0 / 0.2);
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
  @media (max-width: 800px) {
    display: none;
  }
`;

export const Dialog = styled.div`
  padding: 20px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  .post-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .profile {
      display: flex;
      align-items: center;
      gap: 20px;
      text-transform: capitalize;
    }
    .close {
      border-radius: 50%;
      width: 30px;
      height: 30px;
      border: none;
      background: #f0522d;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .post-body {
    display: flex;
    flex-direction: column;
    gap: 20px;
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
  .comment-input {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 30px;
    input {
      width: 400px;
      height: 30px;
      border: none;
      border-bottom: 1px solid gray;
    }
    input:focus {
      outline: none;
    }
  }
  .comment-list {
    padding: 12px;
    margin-top: 10px;
    height: 300px;
    overflow-y: auto;
    .comment-body {
      padding: 8px;
      border-bottom: 1px solid #a5a5a5;
    }
    .comment-body-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
      .comment-user {
        display: flex;
        align-items: center;
        gap: 20px;
      }
    }
    .comment-main {
      margin-top: 10px;
    }
  }
  @media (max-width: 768px) {
    padding: 8px;
  }
`;

export const Floater = styled.div`
  position: fixed;
  left: 0px;
  top: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 5px 10px 5px;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  background: #f04f2f;
  cursor: pointer;
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;
