import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

export const Main = styled.div`
  flex: 9.5;
`;

export const Banner = styled.div`
  position: relative;
  height: 300px;
  .bannerImg {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .bannerUserImg {
    border: 3px solid #ffffff;
    border-radius: 50%;
    width: 180px;
    height: 180px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 77%;
  }
`;

export const ProfileUser = styled.div`
  margin-top: 130px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .username {
    font-size: 19px;
    font-weight: bold;
    text-transform: capitalize;
  }
  .greeting {
    color: gray;
    font-size: 14px;
  }
  button {
    border: none;
    border-radius: 5px;
    padding: 10px 23px;
    color: #ffffff;
    background: #f04f2f;
    margin: 10px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  button:hover {
    background: #f04f2f;
    color: #ffffff;
  }
`;

export const ProfileBody = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
  .profileBodyLeft {
    flex: 2;
  }
  .profileBodyRight {
    flex: 1;
    .userInfo {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .info {
        display: flex;
        align-items: center;
        gap: 10px;
        color: gray;
      }
    }
    .friends {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: 5px;
      .img {
        display: flex;
        flex-direction: column;
        gap: 2px;
        align-items: center;
      }
    }
  }
`;
