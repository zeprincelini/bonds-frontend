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
  width: 100%;
  height: 300px;
  .banner-icon {
    position: absolute;
    right: 20px;
    bottom: 20px;
    cursor: pointer;
    background: #fff;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .user-img {
    width: 180px;
    height: 180px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 77%;
    border: 3px solid #ffffff;
    border-radius: 50%;
    @media (max-width: 768px) {
      height: auto;
      width: 100px;
    }
  }

  .bannerUserImg {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  .banner-userIcon {
    position: absolute;
    right: 20px;
    bottom: 20px;
    cursor: pointer;
    background: #fff;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 768px) {
    height: auto;
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
  @media (max-width: 768px) {
    margin-top: 100px;
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
    @media (max-width: 768px) {
      display: none;
    }
  }
  @media (max-width: 768px) {
    padding: 5px;
  }
`;
