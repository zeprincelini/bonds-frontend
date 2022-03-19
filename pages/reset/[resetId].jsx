import { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import Image from "next/image";
import toast from "react-hot-toast";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";

import Title from "../../components/title";
import AuthLayout from "../../layouts/auth/auth";
import {
  Card,
  Button,
  Logo,
  Input,
} from "../../styledComponents/authPages/auth.styled";
import { Resetpassword } from "../../http-requests/api";

const ResetPassword = ({ id }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const validation = yup.object({
    password: yup.string().required("Enter Password"),
    confirmPassword: yup
      .string()
      .required("Enter password again")
      .oneOf([yup.ref("password")], "Passwords do not match"),
  });
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: validation,
    onSubmit: (values) => reset(values),
  });

  const reset = async (values) => {
    setLoading(true);
    try {
      const res = await axios.patch(`${Resetpassword}/${id}`, values);
      setLoading(false);
      toast.success(res.data.message);
      router.replace("/login");
    } catch (err) {
      setLoading(false);
      console.log(err.message);
      toast.error(err.message ? err.message : "failed to reset password");
    }
  };

  return (
    <>
      <Title title="reset password" />
      <Card height="350px">
        <Logo>
          <Image
            alt="bonds logo"
            src="/assets/logo/bondss-02.png"
            width="200px"
            height="51.86px"
          />
        </Logo>
        <div>
          <form onSubmit={formik.handleSubmit}>
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
              <Input
                type="password"
                name="confirmPassword"
                placeholder="confirm password"
                onChange={formik.handleChange}
                value={formik.values.confirmPassword}
              />
            </div>
            <Button type="submit" mb="30px">
              {loading ? (
                <FontAwesomeIcon
                  icon={faSpinner}
                  color="#ffffff"
                  className="fa-spin"
                />
              ) : (
                "Reset Password"
              )}
            </Button>
          </form>
        </div>
      </Card>
    </>
  );
};

export const getServerSideProps = async (context) => {
  const userId = context.params.resetId;
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
    props: { id: userId },
  };
};

export default ResetPassword;

ResetPassword.getLayout = function PageLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
