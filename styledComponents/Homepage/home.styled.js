import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 50px;
  background-color: #4e4b4b;
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
      color: #fff;
      padding: 5px;
      cursor: pointer;
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
  background-color: #4e4b4b;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  color: #fff;
`;
