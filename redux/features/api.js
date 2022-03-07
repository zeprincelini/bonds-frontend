import axios from "axios";
import { Sign_In } from "../../http-requests/api";
import { loginStart, loginFail, loginSuccess } from "./login";

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
