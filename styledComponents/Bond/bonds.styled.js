import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100vh - 90px);
  padding: 12px;
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
  .grid {
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 12px;
  }
`;

export const Chip = styled.div`
  width: 100%;
  height: 70px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px rgb(0 0 0 / 15%);
  padding: 10px;
  cursor: pointer;
  .chipBody {
    display: flex;
    align-items: center;
    gap: 30px;
  }
  transition: 0.4s ease-in-out;
  .img {
    border-radius: 50%;
  }
  &:hover {
    transform: scale(1.04);
    background: #f04f2f;
  }
  &:hover .chipBody {
    color: #fff;
  }
`;
