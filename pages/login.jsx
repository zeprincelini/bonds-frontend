import { useFormik } from "formik";
import * as yup from "yup";
import Link from "next/link";
import axios from "axios";

import Title from "../components/title";
import {
  Card,
  Logo,
  Input,
  Button,
  Footer,
} from "../styledComponents/authPages/auth.styled";

import AuthLayout from "../layouts/auth/auth";
import { Sign_In } from "../http-requests/api";

const Login = () => {
  const loginUser = async (val) => {
    try {
      const res = await axios.post(Sign_In, val);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
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
    onSubmit: (values) => loginUser(values),
  });

  return (
    <>
      <Title title="login Page" />
      <Card>
        <Logo>
          <img
            alt="bonds logo"
            src="/assets/logo/bondss-02.png"
            width="200px"
          />
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
            <Link href="/register">
              <a>Don't have an account? Register now</a>
            </Link>
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
