import { useFormik } from "formik";
import * as yup from "yup";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import Image from "next/image";

import Title from "../components/title";
import {
  Card,
  Input,
  Logo,
  Button,
  Footer,
} from "../styledComponents/authPages/auth.styled";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AuthLayout from "../layouts/auth/auth";
import { Sign_Up } from "../http-requests/api";
import { useState } from "react";

const Register = () => {
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const registerUser = async (val) => {
    try {
      setLoading(true);
      await axios.post(Sign_Up, val);
      setLoading(false);
      router.push("/login");
    } catch (err) {
      setLoading(false);
      setError(err);
    }
  };
  const validation = yup.object({
    username: yup.string().required("Required").max(20).min(3),
    email: yup
      .string()
      .email("please enter a valid email")
      .required("Required"),
    password: yup.string().required("Required"),
    confirmPassword: yup
      .string()
      .required("Required")
      .oneOf([yup.ref("password")], "Passwords do not match"),
  });
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: validation,
    onSubmit: (values) => registerUser(values),
  });

  return (
    <>
      <Title title="create an account" />
      <Card height="500px">
        <Logo>
          <Image
            alt="bonds logo"
            src="/assets/logo/bondss-02.png"
            width="200px"
            height="51.86px"
          />
        </Logo>
        <>
          {error ? (
            <div
              style={{
                color: "red",
                fontSize: "13px",
                marginBottom: "2px",
              }}
            >
              {error}
            </div>
          ) : null}
          <div>
            <form onSubmit={formik.handleSubmit}>
              <div style={{ marginBottom: "20px" }}>
                {formik.errors.username && formik.touched.username ? (
                  <div
                    style={{
                      color: "red",
                      fontSize: "13px",
                      marginBottom: "2px",
                    }}
                  >
                    {formik.errors.username}
                  </div>
                ) : null}
                <Input
                  type="text"
                  name="username"
                  placeholder="enter username"
                  onChange={formik.handleChange}
                  value={formik.values.username}
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                {formik.errors.email && formik.touched.email ? (
                  <div
                    style={{
                      color: "red",
                      fontSize: "13px",
                      marginBottom: "2px",
                    }}
                  >
                    {formik.errors.email}
                  </div>
                ) : null}
                <Input
                  type="email"
                  name="email"
                  placeholder="enter email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                {formik.errors.password && formik.touched.password ? (
                  <div
                    style={{
                      color: "red",
                      fontSize: "13px",
                      marginBottom: "2px",
                    }}
                  >
                    {formik.errors.password}
                  </div>
                ) : null}

                <Input
                  type="password"
                  name="password"
                  placeholder="enter password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                {formik.errors.confirmPassword &&
                formik.touched.confirmPassword ? (
                  <div
                    style={{
                      color: "red",
                      fontSize: "13px",
                      marginBottom: "2px",
                    }}
                  >
                    {formik.errors.confirmPassword}
                  </div>
                ) : null}
                {/* {formik.touched.confirmPassword &&
                formik.values.confirmPassword !== formik.values.password ? (
                  <div
                    style={{
                      color: "red",
                      fontSize: "13px",
                      marginBottom: "2px",
                    }}
                  >
                    Passwords do not match!
                  </div>
                ) : null} */}

                <Input
                  type="password"
                  name="confirmPassword"
                  placeholder="confirm password"
                  onChange={formik.handleChange}
                  value={formik.values.confirmPassword}
                />
              </div>
              <Button type="submit">
                {loading ? (
                  <FontAwesomeIcon
                    icon={faSpinner}
                    className="fa-spin"
                    color="#ffffff"
                  />
                ) : (
                  "Register"
                )}
              </Button>
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

export async function getServerSideProps(context) {
  const token = context.req.cookies["token"];

  if (token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
}

export default Register;

Register.getLayout = function PageLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
