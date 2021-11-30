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
    width: 200px;
    height: 200px;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 77%;
  }
`;
