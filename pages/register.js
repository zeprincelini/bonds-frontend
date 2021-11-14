import { useFormik } from "formik";
import * as yup from "yup";
import Link from "next/link";

import Title from "../components/title";
import {
  Container,
  Card,
  Input,
  Button,
  Footer,
} from "../styledComponents/login/login.styled";

const Register = () => {
  const validation = yup.object({
    email: yup.string().required(),
    password: yup.string().required(),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // validate: validation,
    onSubmit: (values) => console.log(values),
  });

  return (
    <>
      <Title title="create an account" />
      <Container>
        <Card>
          <div>
            <h3>Bonds</h3>
          </div>
          <>
            <div>
              <form onSubmit={formik.handleSubmit}>
                <div style={{ marginBottom: "20px" }}>
                  <Input
                    type="email"
                    name="email"
                    placeholder="enter email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                </div>
                <div style={{ marginBottom: "20px" }}>
                  <Input
                    type="password"
                    name="password"
                    placeholder="enter password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                  />
                </div>
                <Button type="submit">Register</Button>
              </form>
            </div>
            <Footer>
              <p>
                Already have an account?{" "}
                <span>
                  <Link href="login">
                    <a>Login</a>
                  </Link>
                </span>
              </p>
            </Footer>
          </>
        </Card>
      </Container>
    </>
  );
};

export default Register;
