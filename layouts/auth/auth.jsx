import {
  Container,
  ContainerForm,
  ContainerImage,
} from "../../styledComponents/authLayout/authLayout.styled";

const AuthLayout = ({ children }) => {
  return (
    <Container>
      <ContainerImage />
      <ContainerForm>{children}</ContainerForm>
    </Container>
  );
};

export default AuthLayout;
