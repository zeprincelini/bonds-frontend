import axios from "axios";
import Cookies from "js-cookie";
import { Sign_In } from "../../http-requests/api";
import { loginStart, loginFail, loginSuccess, logOut } from "./login";

export const LoginUser = async (value, dispatch, router) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(Sign_In, value, { withCredentials: true });
    dispatch(loginSuccess(res.data.data));
    router.push("/");
  } catch (err) {
    dispatch(loginFail(err.message));
  }
};

export const LogOut = (dispatch) => {
  Cookies.remove("token");
  Cookies.remove("id");
  dispatch(logOut());
};
