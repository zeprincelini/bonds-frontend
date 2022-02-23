import styled from "styled-components";

export const Card = styled.div`
  box-shadow: 0px 5px 10px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin-right: 0px;
  width: 400px;
  height: ${(props) => props.height};
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
  border: 1px solid #bfbfbf;
  border-radius: 10px;
  padding: 18px;
  &:focus {
    outline-color: gray;
  }
`;

export const Button = styled.button`
  width: 100%;
  background-color: #f04f2f;
  border: none;
  border-radius: 10px;
  padding: 10px;
  color: #fff;
  font-weight: bold;
  margin-top: 30px;
  margin-bottom: ${(props) => props.mb};
  cursor: pointer;

  &:focus {
    transform: scale(1.02);
  }
`;

export const Footer = styled.div`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  a {
    color: #f04f2f;
    cursor: pointer;
    margin-bottom: 15px;
  }
`;
