import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  .right-sidebar {
    flex: 3;
  }
`;

export const WrapperLeft = styled.div`
  flex: 3;
  padding: 10px;
  .search input {
    border: none;
    border-bottom: 1px solid gray;
    width: 200px;
    padding: 6px;
    margin-bottom: 20px;
  }
  .search input:focus {
    outline: none;
  }
  .friends {
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 6px;
    margin-bottom: 10px;
    cursor: pointer;
    span {
      font-size: 14px;
    }
  }
`;

export const WrapperMid = styled.div`
  flex: 6;
  display: flex;
  flex-direction: column;
  padding: 10px;
  .empty {
    margin-top: 20px;
  }
  .empty h3 {
    font-size: 50px;
    color: gray;
    margin: 1px;
    opacity: 0.8;
  }
  .chat-container {
    height: calc(100vh - 150px);
    overflow-y: scroll;
  }
`;

export const Message = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  justify-content: ${(props) => (props.user ? "left;" : "right;")};
  &:nth-child(1) {
    margin-top: 10px;
  }
  .chat-body {
    span {
      font-size: 14px;
    }
    .chat-text {
      margin-top: 5px;
      background-color: ${(props) => (props.user ? "#f04f2f;" : "#ECECEC;")};
      color: ${(props) => (props.user ? "#ffffff;" : "#000000")}
      padding: 5px 12px 5px 12px;
      border-radius: 8px;
      font-size: 14px;
      max-width: 400px;
    }
    .chat-time{
      color: gray;
      font-size: 13px;
      margin-top: 3px
    }
  }
`;

export const Flex = styled.div`
  display: flex;
  gap: 15px;
  input {
    width: 200px;
    height: 40px;
    border: 1px solid gray;
    border-radius: 4px;
  }
  input:focus {
    outline: none;
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
