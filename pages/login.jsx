import { useFormik } from "formik";
import * as yup from "yup";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import toast from "react-hot-toast";

import Title from "../components/title";
import {
  Card,
  Logo,
  Input,
  Button,
  Footer,
} from "../styledComponents/authPages/auth.styled";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AuthLayout from "../layouts/auth/auth";
import { LoginUser } from "../redux/features/api";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.loginReducer);
  const validation = yup.object({
    email: yup
      .string()
      .email("please enter a valid email")
      .required("Required"),
    password: yup.string().required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validation,
    onSubmit: (values) => LoginUser(values, dispatch, router, toast),
  });

  return (
    <>
      <Title title="login Page" />
      <Card height="400px">
        <Logo>
          <Image
            alt="bonds logo"
            src="/assets/logo/bondss-02.png"
            width="200px"
            height="51.86px"
          />
        </Logo>
        <>
          {/* {errorStatus && toast.error(error)} */}
          <div>
            <form onSubmit={formik.handleSubmit}>
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
                  autoComplete="on"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                />
              </div>
              <Button type="submit" loader={loading}>
                {loading ? (
                  <FontAwesomeIcon
                    icon={faSpinner}
                    color="#ffffff"
                    className="fa-spin"
                  />
                ) : (
                  "Login"
                )}
              </Button>
            </form>
            <Link href="/forgotPassword">
              <a
                style={{
                  color: "#f04f2f",
                  lineHeight: "30px",
                  fontSize: "14px",
                }}
              >
                Forgot Password? Reset now
              </a>
            </Link>
          </div>
          <Footer>
            <Link href="/register">
              <a>Don&apos;t have an account? Register now</a>
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

export default Login;

Login.getLayout = function PageLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
