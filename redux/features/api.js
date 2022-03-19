import axios from "axios";
import Cookies from "js-cookie";
import { Sign_In } from "../../http-requests/api";
import { loginStart, loginFail, loginSuccess, logOut } from "./login";

export const LoginUser = async (value, dispatch, router, toast) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(Sign_In, value, { withCredentials: true });
    dispatch(loginSuccess(res.data.data));
    router.push("/");
  } catch (err) {
    if (err.response.data) {
      dispatch(loginFail());
      toast.error(err.response.data.error);
    } else {
      toast.error(err.message);
      dispatch(loginFail());
    }
  }
};

export const LogOut = (dispatch, router) => {
  Cookies.remove("token");
  Cookies.remove("id");
  dispatch(logOut());
  router.push("/login");
};
