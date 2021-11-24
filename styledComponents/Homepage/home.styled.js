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
  overflow-y: scroll;
  flex: 2.5;
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background: gray;
  }
`;

export const WrapperLeftLinks = styled.a`
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  width: 80%;
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
    margin-top: 10px;
  }
`;

export const WrapperMid = styled.div`
  flex: 6.5;
`;

export const WrapperRight = styled.div`
  flex: 3;
`;
