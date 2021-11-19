import styled from "styled-components";

export const Card = styled.div`
  background-color: rgba(78, 75, 75, 0.7);
  border-radius: 10px;
  margin-right: 30px;
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > div {
    padding-left: 20px;
    padding-right: 20px;
  }
  h3 {
    text-align: center;
    color: #fff;
    margin: 20px;
  }
`;

export const Logo = styled.div`
  text-align: center;
  padding-top: 30px;
`;

export const Input = styled.input`
  width: 100%;
  height: 20px;
  border: none;
  border-radius: 10px;
  padding: 18px;
`;

export const Button = styled.button`
  width: 100%;
  background-color: #343237;
  border: none;
  border-radius: 10px;
  padding: 10px;
  color: #fff;
  font-weight: bold;
  margin-top: 30px;
  cursor: pointer;

  &:focus {
    transform: scale(1.02);
  }
`;

export const Footer = styled.div`
  background-color: #4e4b4b;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    color: #ffffff;

    span {
      font-weight: bold;
      cursor: pointer;
    }
  }
`;
