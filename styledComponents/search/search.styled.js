import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  gap: 2rem;
  min-height: calc(100vh - 90px);
`;

export const Card = styled.div`
  width: 100%;
  height: auto;
  border-radius: 7px;
  padding: 10px;
  box-shadow: 0px 5px 10px rgb(0 0 0 / 15%);
  transition: 0.2s ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
  .search-name {
    color: gray;
    text-align: center;
  }
`;
