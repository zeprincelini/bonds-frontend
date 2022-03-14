import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

export const ContainerImage = styled.div`
  flex: 1.5;
  background-image: url("/assets/images/pic.jpg");
  max-width: 100%;
  height: auto;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const ContainerForm = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
