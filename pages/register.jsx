import { useFormik } from "formik";
import * as yup from "yup";
import Link from "next/link";
import axios from "axios";

import Title from "../components/title";
import {
  Card,
  Input,
  Logo,
  Button,
  Footer,
} from "../styledComponents/authPages/auth.styled";

import AuthLayout from "../layouts/auth/auth";
import { Sign_Up } from "../http-requests/api";

const Register = () => {
  const registerUser = async (val) => {
    try {
      const res = await axios.post(Sign_Up, val);
      console.log(res);
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
    onSubmit: (values) => registerUser(values),
  });

  return (
    <>
      <Title title="create an account" />
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
              <Button type="submit">Register</Button>
            </form>
          </div>
          <Footer>
            <Link href="login">
              <a>Already have an account? Login</a>
            </Link>
          </Footer>
        </>
      </Card>
    </>
  );
};

export default Register;

Register.getLayout = function PageLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
