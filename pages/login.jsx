import { useFormik } from "formik";
import * as yup from "yup";
import Link from "next/link";
import Image from "next/image";

import Title from "../components/title";
import {
  Card,
  Logo,
  Input,
  Button,
  Footer,
} from "../styledComponents/auth/auth.styled";

import AuthLayout from "../layouts/auth/auth";

const Login = () => {
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
      <Title title="login Page" />
      <Card>
        <Logo>
          <img alt="bonds logo" src="/assets/logo/bonds2.png" width="100px" />
        </Logo>
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
              <Button type="submit">Login</Button>
            </form>
          </div>
          <Footer>
            <p>
              Don't have an account?{" "}
              <span>
                <Link href="register">
                  <a>Register now</a>
                </Link>
              </span>
            </p>
          </Footer>
        </>
      </Card>
    </>
  );
};

export default Login;

Login.getLayout = function PageLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
