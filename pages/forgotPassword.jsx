import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

import Title from "../components/title";
import AuthLayout from "../layouts/auth/auth";
import {
  Card,
  Logo,
  Input,
  Button,
} from "../styledComponents/authPages/auth.styled";
import { Forgotpassword } from "../http-requests/api";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const validation = yup.object({
    email: yup
      .string()
      .email("please enter a valid email")
      .required("Required"),
  });
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: validation,
    onSubmit: (values) => handleSubmit(values),
  });
  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      await axios.post(Forgotpassword, values);
      setLoading(false);
      toast.success("Please check your email to reset password");
    } catch (err) {
      toast.error(err.message ? err.message : "failed to submit");
      setLoading(false);
    }
  };
  return (
    <>
      <Toaster />
      <Title title="login Page" />
      <Card height="250px">
        <Logo>
          <img
            alt="bonds logo"
            src="/assets/logo/bondss-02.png"
            width="200px"
          />
        </Logo>
        <div>
          <form onSubmit={formik.handleSubmit}>
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
            <Button type="submit" mb="30px">
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
        </div>
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

export default ForgotPassword;

ForgotPassword.getLayout = function PageLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
